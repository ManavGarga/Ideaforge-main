import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Box, Grid, Card, CardContent, Chip, Stack } from "@mui/material";
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import useIdeaForge from "../hooks/useIdeaForge";

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const [results, setResults] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    const { setLoadingStatus, setAlertBoxOpenStatus, setAlertSeverity, setAlertMessage } = useIdeaForge();

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (!query) return;
            setLoadingStatus(true);
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER_ENDPOINT}/posts/search?q=${encodeURIComponent(query)}`);
                if (response.data.status) {
                    setResults(response.data.posts);
                } else {
                    setAlertBoxOpenStatus(true);
                    setAlertSeverity("error");
                    setAlertMessage(response.data.message);
                }
            } catch (error) {
                console.error("Error fetching search data:", error);
                setAlertBoxOpenStatus(true);
                setAlertSeverity("error");
                setAlertMessage("Failed to fetch search results.");
            } finally {
                setLoadingStatus(false);
                setHasLoaded(true);
            }
        };

        fetchSearchResults();
    }, [query]);

    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <NavBar />
            <Container maxWidth="lg" sx={{ mt: 5, mb: 5, flexGrow: 1 }}>
                <Typography variant="h2" sx={{ mb: 1, fontFamily: '"Inter", sans-serif', color: '#1e293b' }}>
                    SEARCH TERMINAL
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, color: '#a0a0a0' }}>
                    Querying public matrix for: <strong style={{ color: '#2563eb' }}>"{query}"</strong>
                </Typography>

                {hasLoaded && results.length === 0 ? (
                    <Box sx={{ p: 5, textAlign: "center", border: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
                        <Typography variant="h5" sx={{ color: '#2563eb', fontFamily: '"Inter", sans-serif' }}>
                            NO MATCHES FOUND IN SECTOR
                        </Typography>
                    </Box>
                ) : (
                    <Grid container spacing={3}>
                        {results.map((post) => (
                            <Grid item xs={12} sm={6} md={4} key={post._id}>
                                <Card sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #e2e8f0',
                                    borderLeft: '4px solid #2563eb',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        borderLeftColor: '#ff00c8',
                                        boxShadow: '0 0 15px rgba(255, 0, 200, 0.2)'
                                    }
                                }}>
                                    <Link to={`/posts/${post._id}`} style={{ textDecoration: 'none', color: 'inherit', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography variant="h5" sx={{ mb: 1, color: '#1e293b', fontWeight: 'bold' }}>
                                                {post.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#64748b', mb: 2 }}>
                                                By {post.author} | {new Date(post.createdAt).toLocaleDateString()}
                                            </Typography>
                                            <Typography variant="body1" sx={{ color: '#a0a0a0', mb: 2, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                {post.description.replace(/<[^>]*>?/gm, '')}
                                            </Typography>
                                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 'auto' }}>
                                                {post.tags.slice(0, 3).map((tag, idx) => (
                                                    <Chip key={idx} label={`#${tag}`} size="small" sx={{ 
                                                        backgroundColor: 'transparent', 
                                                        border: '1px solid #e2e8f0', 
                                                        color: '#2563eb',
                                                        fontFamily: '"Inter", sans-serif',
                                                        fontSize: '0.7rem'
                                                    }} />
                                                ))}
                                            </Stack>
                                        </CardContent>
                                    </Link>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
            <Footer />
        </Box>
    );
};

export default Search;
