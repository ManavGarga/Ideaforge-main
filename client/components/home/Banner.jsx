import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, TextField, Typography, Stack, Chip } from '@mui/material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const Banner = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    const handleChipClick = (keyword) => {
        navigate(`/search?q=${encodeURIComponent(keyword)}`);
    }

    return (
        <>
            <Grid minHeight="92vh" maxWidth="1280px" mx="auto" container spacing={2} justifyContent="center" alignItems="center" >
                <Grid item xs={6} >
                    <Box sx={{ display: "flex", gap: "5px", color: "#797979" }}  >
                        <ConnectWithoutContactIcon />
                        <Typography variant="body1" >Connecting Ideas, Inspiring Perspectives</Typography>
                    </Box>
                    <Typography
                        sx={{
                            fontFamily: "Inter",
                            color: "#a0a0a0",
                            margin: "5px 0 30px 0"
                        }}
                        variant="h1"
                        component="h1"
                    >IdeaForge</Typography>
                    <Typography sx={{ color: "#797979" }} variant="body1">At IdeaForge, our mission is to provide a dynamic and intuitive platform that empowers individuals to transform their ideas into actionable tasks.</Typography>
                    <Box sx={{ margin: "30px 0 35px 0" }}>
                        <form onSubmit={handleSearchSubmit}>
                            <TextField
                                placeholder="Search Here ..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                sx={{
                                    width: '75%',
                                }}

                            />
                        </form>
                    </Box>
                    <Stack direction="row" spacing={1}>
                        <Chip label="vr-gaming" onClick={() => handleChipClick("vr-gaming")} sx={{ backgroundColor: '#ffffff', borderLeft: '4px solid #2563eb', boxShadow: "0 0 10px rgba(0, 243, 255, 0.1)", color: "#a0a0a0", cursor: "pointer" }} />
                        <Chip label="blockchain" onClick={() => handleChipClick("blockchain")} sx={{ backgroundColor: '#ffffff', borderLeft: '4px solid #2563eb', boxShadow: "0 0 10px rgba(0, 243, 255, 0.1)", color: "#a0a0a0", cursor: "pointer" }} />
                        <Chip label="crypto-currency" onClick={() => handleChipClick("crypto-currency")} sx={{ backgroundColor: '#ffffff', borderLeft: '4px solid #2563eb', boxShadow: "0 0 10px rgba(0, 243, 255, 0.1)", color: "#a0a0a0", cursor: "pointer" }} />
                        <Chip label="machine-learning" onClick={() => handleChipClick("machine-learning")} sx={{ backgroundColor: '#ffffff', borderLeft: '4px solid #2563eb', boxShadow: "0 0 10px rgba(0, 243, 255, 0.1)", color: "#a0a0a0", cursor: "pointer" }} />
                        <Chip label="cyber-security" onClick={() => handleChipClick("cyber-security")} sx={{ backgroundColor: '#ffffff', borderLeft: '4px solid #2563eb', boxShadow: "0 0 10px rgba(0, 243, 255, 0.1)", color: "#a0a0a0", cursor: "pointer" }} />
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <img style={{ width: "100%" }} src="/images/banner.jpg" alt="IdeaForge" />
                </Grid>
            </Grid>
        </>
    )
}

export default Banner