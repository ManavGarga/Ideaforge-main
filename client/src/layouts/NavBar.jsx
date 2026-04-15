import { AppBar, Toolbar, Box, Typography, Button, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import AlertBox from '../../components/common/AlertBox';

export default function NavBar() {
    const cookie = Cookies.get(import.meta.env.VITE_TOKEN_KEY)
    return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: '#ffffff', borderBottom: "1px solid #8b5cf6", padding: "5px 0" }} elevation={0} >
                <Toolbar>
                    <Box sx={{ maxWidth: "1280px", width: "100%", marginLeft: "auto", marginRight: "auto" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} >
                                <Box sx={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                                    <img src="./images/favicon.ico" width="55" alt="IdeaForge" />
                                    <Typography
                                        sx={{
                                            fontFamily: "Inter",
                                            color: "#a0a0a0"
                                        }}
                                        variant="h3"
                                        component="h3"
                                    >IdeaForge</Typography>
                                </Box>
                            </Link>
                            <Box >
                            {
                                !cookie && <>
                                <ButtonGroup >
                                    <Link to="/registration"><Button sx={{ backgroundColor: '#ffffff', borderLeft: '4px solid #2563eb', boxShadow: "0 0 10px rgba(0, 243, 255, 0.1)", color: "#a0a0a0", "&:hover": { backgroundColor: '#ffffff', borderLeft: '4px solid #2563eb', boxShadow: "0 0 10px rgba(0, 243, 255, 0.1)" } }}>Join</Button></Link>
                                    <Link to="/login"><Button sx={{ backgroundColor: '#ffffff', borderLeft: '4px solid #2563eb', boxShadow: "0 0 10px rgba(0, 243, 255, 0.1)", color: "#a0a0a0", "&:hover": { backgroundColor: '#ffffff', borderLeft: '4px solid #2563eb', boxShadow: "0 0 10px rgba(0, 243, 255, 0.1)" } }}>Login</Button></Link>
                                </ButtonGroup>
                                </>
                            }
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <AlertBox />
        </Box>
    );
}