import {
  Grid,
  Typography,
  Box,
  Divider,
  Button,
  ListItemButton,
  ListItemText,
  List,
} from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#ffffff', borderLeft: '4px solid #2563eb', boxShadow: "0 0 10px rgba(0, 243, 255, 0.1)",
        color: "#a0a0a0",
        paddingTop: "4rem",
        paddingBottom: "1rem",
      }}
    >
      <Box maxWidth="1280px" mx="auto">
        <Grid container>
          <Grid item>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <img src="./images/favicon.ico" width="55" alt="IdeaForge" />
              <Typography
                sx={{
                  fontFamily: "Inter",
                  color: '#1e293b',
                }}
                variant="h3"
                component="h3"
              >
                IdeaForge
              </Typography>
            </Box>
            <Typography variant="body1">
              Connecting Ideas, Inspiring Perspectives
            </Typography>
          </Grid>
        </Grid>
        <Grid container my={6}>
          <Grid item xs={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              Solutions
            </Typography>
            <List>
              <ListItemButton sx={{padding:"0","&:hover": { backgroundColor: '#ffffff' }}} component={Link} to="/case-studies">
                <ListItemText primary="Facebook" sx={{margin:"0"}} />
              </ListItemButton>
              <ListItemButton sx={{padding:"0","&:hover": { backgroundColor: '#ffffff' }}} component={Link} to="/blogs">
                <ListItemText primary="Linkedin" sx={{margin:"0"}} />
              </ListItemButton>
              <ListItemButton sx={{padding:"0","&:hover": { backgroundColor: '#ffffff' }}} component={Link} to="/blogs">
                <ListItemText primary="You Tube" sx={{margin:"0"}} />
              </ListItemButton>
            </List>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              Products
            </Typography>
            <List>
              <ListItemButton sx={{padding:"0","&:hover": { backgroundColor: '#ffffff' }}} component={Link} to="/community">
                <ListItemText primary="Community" sx={{margin:"0"}} />
              </ListItemButton>
              <ListItemButton sx={{padding:"0","&:hover": { backgroundColor: '#ffffff' }}} component={Link} to="/forums">
                <ListItemText primary="Forums" sx={{margin:"0"}} />
              </ListItemButton>
            </List>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              Resources
            </Typography>
            <List>
              <ListItemButton sx={{padding:"0","&:hover": { backgroundColor: '#ffffff' }}} component={Link} to="/case-studies">
                <ListItemText primary="Case Studies" sx={{margin:"0"}} />
              </ListItemButton>
              <ListItemButton sx={{padding:"0","&:hover": { backgroundColor: '#ffffff' }}} component={Link} to="/blogs">
                <ListItemText primary="Blogs" sx={{margin:"0"}} />
              </ListItemButton>
            </List>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1" fontWeight="bold">
              Company
            </Typography>
            <List>
              <ListItemButton sx={{padding:"0","&:hover": { backgroundColor: '#ffffff' }}} component={Link} to="/about">
                <ListItemText primary="About Us" sx={{margin:"0"}} />
              </ListItemButton>
              <ListItemButton sx={{padding:"0","&:hover": { backgroundColor: '#ffffff' }}} component={Link} to="/career">
                <ListItemText primary="Careers" sx={{margin:"0"}} />
              </ListItemButton>
              <ListItemButton sx={{padding:"0","&:hover": { backgroundColor: '#ffffff' }}} component={Link} to="/contact">
                <ListItemText primary="Contact Us" sx={{margin:"0"}} />
              </ListItemButton>
            </List>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                background: "gray",
                textAlign: "right",
                borderRadius: "2px",
                borderTopLeftRadius: "50px",
                padding: "10px",
                backgroundColor: '#ffffff', borderLeft: "4px solid #ff00c8", boxShadow: "0 0 10px rgba(255, 0, 200, 0.1)",
                color: "#a0a0a0",
              }}
            >
              <Typography>1-800-600-0464</Typography>
              <Typography>support@IdeaForge.com</Typography>
              <Typography>900-140 10th Avenue SE</Typography>
              <Typography>Calgary, AB TG 0R1</Typography>
            </Box>
          </Grid>
        </Grid>
        <Divider style={{ marginBottom: "1rem" }} />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">
            Copyright {new Date().getFullYear()} IdeaForge. All rights reserved
          </Typography>
          <Box>
            <Button
              sx={{
                color: '#1e293b',
                "&:hover": { backgroundColor: '#ffffff' },
              }}
            >
              Privacy Policy
            </Button>
            <Button
              sx={{
                color: '#1e293b',
                "&:hover": { backgroundColor: '#ffffff' },
              }}
            >
              Terms of Services
            </Button>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
