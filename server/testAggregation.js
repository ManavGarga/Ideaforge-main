import mongoose from 'mongoose';
import dotenv from 'dotenv';
import PostModel from './models/postSchema.js';

dotenv.config();

const testSearch = async () => {
    await mongoose.connect(`${process.env.DATABASE_URL}${process.env.DATABASE_NAME}`);
    
    try {
        const q = 'vr';
        const regex = new RegExp(q, 'i');
        const posts = await PostModel.aggregate([
            {
                $match: {
                    visibility: "public",
                    $or: [
                        { title: regex },
                        { description: regex },
                        { tags: regex }
                    ]
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'authorId',
                    foreignField: '_id',
                    as: 'author'
                }
            },
            {
                $unwind: "$author"
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'reactions.userId',
                    foreignField: '_id',
                    as: 'reactors'
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'comments.userId',
                    foreignField: '_id',
                    as: 'commenters'
                }
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    tags: 1,
                    description: 1,
                    createdAt: 1,
                    "author": "$author.fullName",
                    reactions: {
                        $map: {
                            input: "$reactions",
                            as: "reaction",
                            in: {
                                reactor: {
                                    $arrayElemAt: [
                                        "$reactors.fullName",
                                        { $indexOfArray: ["$reactors._id", "$$reaction.userId"] }
                                    ]
                                },
                                reaction: "$$reaction.reaction",
                                createdAt: "$$reaction.createdAt",
                                reactor_id: "$$reaction.userId"
                            }
                        }
                    },
                    comments: {
                        $map: {
                            input: "$comments",
                            as: "comment",
                            in: {
                                commenter: {
                                    $arrayElemAt: [
                                        "$commenters.fullName",
                                        { $indexOfArray: ["$commenters._id", "$$comment.userId"] }
                                    ]
                                },
                                comment: "$$comment.comment",
                                createdAt: "$$comment.createdAt",
                                commenter_id: "$$comment.userId"
                            }
                        }
                    }
                }
            },
            { $sort: { createdAt: -1 } }
        ]);
        console.log("Success:", posts.length, "posts found.");
    } catch (e) {
        console.error("Aggregation Error:");
        console.error(e);
    }
    
    process.exit(0);
};

testSearch();
