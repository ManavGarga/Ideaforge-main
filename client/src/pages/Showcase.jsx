import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from "@mui/material";
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import useIdeaForge from "../hooks/useIdeaForge";

const Showcase = () => {
    const [products, setProducts] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    const { setLoadingStatus, setAlertBoxOpenStatus, setAlertSeverity, setAlertMessage } = useIdeaForge();

    useEffect(() => {
        const fetchPublicProducts = async () => {
            setLoadingStatus(true);
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER_ENDPOINT}/products/public?sort=createdAt`);
                if (response.data.status) {
                    setProducts(response.data.products);
                } else {
                    setAlertBoxOpenStatus(true);
                    setAlertSeverity("error");
                    setAlertMessage(response.data.message);
                }
            } catch (error) {
                console.error("Error fetching showcase data:", error);
                setAlertBoxOpenStatus(true);
                setAlertSeverity("error");
                setAlertMessage("Failed to fetch products.");
            } finally {
                setLoadingStatus(false);
                setHasLoaded(true);
            }
        };

        fetchPublicProducts();
    }, []);

    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <NavBar />
            <Container maxWidth="lg" sx={{ mt: 5, mb: 10, flexGrow: 1 }}>
                <Typography variant="h2" sx={{ mb: 1, fontFamily: '"Inter", sans-serif', color: '#1e293b' }}>
                    IdeaForge Showcase
                </Typography>
                <Typography variant="h6" sx={{ mb: 6, color: '#a0a0a0' }}>
                    Explore projects, tools, and portfolios created by our talented community.
                </Typography>

                {hasLoaded && products.length === 0 ? (
                    <Box sx={{ p: 5, textAlign: "center", border: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
                        <Typography variant="h5" sx={{ color: '#2563eb', fontFamily: '"Inter", sans-serif' }}>
                            No products are currently showcased.
                        </Typography>
                    </Box>
                ) : (
                    <Grid container spacing={4}>
                        {products.map((product) => (
                            <Grid item xs={12} sm={6} md={4} key={product._id}>
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
                                        boxShadow: '0 0 15px rgba(255, 0, 200, 0.2)',
                                        transform: 'translateY(-5px)'
                                    }
                                }}>
                                    <Link to={`/products/${product._id}`} style={{ textDecoration: 'none', color: 'inherit', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            image={`${import.meta.env.VITE_SERVER_ENDPOINT}/productimage/${product.image}`}
                                            alt={product.title}
                                        />
                                        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                            <Box>
                                                <Typography variant="h5" sx={{ mb: 1, color: '#1e293b', fontWeight: 'bold' }}>
                                                    {product.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: '#64748b', mb: 2 }}>
                                                    By {product.authorName || 'Unknown'} | {new Date(product.createdAt).toLocaleDateString()}
                                                </Typography>
                                                <Typography variant="body1" sx={{ color: '#797979', mb: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                    {product.description.replace(/<[^>]*>?/gm, '')}
                                                </Typography>
                                            </Box>
                                            <Typography variant="h6" fontWeight="bold" color="#2563eb" sx={{ mt: 2 }}>
                                                ${product.price}
                                            </Typography>
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

export default Showcase;
