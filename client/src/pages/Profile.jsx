import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArticleIcon from "@mui/icons-material/Article";
import TaskIcon from "@mui/icons-material/Task";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import ProfileCardDetails from "../../components/profile/profile/ProfileCardDetails";
import ActivityGrid from "../../components/profile/profile/ActivityGrid";
import useIdeaForge from "../hooks/useIdeaForge";
import RecentPost from "../../components/profile/profile/RecentPost";
import LatestProduct from "../../components/profile/profile/LatestProduct";
import OngoingTask from "../../components/profile/profile/OngoingTask";

const Profile = () => {
  const [data, setData] = useState(null);
  const {
    setAlertBoxOpenStatus,
    setLoadingStatus,
    setAlertMessage,
    setAlertSeverity,
  } = useIdeaForge();

  useEffect(() => {
    const fetchData = async () => {
      setLoadingStatus(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_ENDPOINT}/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get(
                import.meta.env.VITE_TOKEN_KEY
              )}`,
            },
          }
        );
        if (response.data.status) {
          setData(response.data.user);
        } else {
          setLoadingStatus(false);
          setAlertBoxOpenStatus(true);
          setAlertSeverity(response.data.status ? "success" : "error");
          setAlertMessage(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoadingStatus(false);
        setAlertBoxOpenStatus(true);
        setAlertSeverity("error");
        setAlertMessage("Something Went Wrong");
        error.response.data.message
          ? setAlertMessage(error.response.data.message)
          : setAlertMessage(error.message);
      } finally {
        setLoadingStatus(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12} sm={6} item>
          <Box
            sx={{
              display: "flex",
              mb: "10px",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                backgroundColor: '#ffffff', borderLeft: "4px solid #ff00c8", boxShadow: "0 0 10px rgba(255, 0, 200, 0.1)",
                padding: "5px 10px 15px 5px",
                borderRadius: "5px",
                flex: "1",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <ArticleIcon sx={{ color: "#a0a0a0" }} />
                <Typography variant="span" sx={{ color: "#a0a0a0" }}>
                  Total Post
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "60px",
                  height: "60px",
                  padding: "15px",
                  fontSize: "20px",
                  fontWeight: "semibold",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  textAlign: "center",
                  margin: "10px auto 0 auto",
                }}
              >
                <Typography variant="span">{data?.totalPosts}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: '#ffffff', borderLeft: "4px solid #ff00c8", boxShadow: "0 0 10px rgba(255, 0, 200, 0.1)",
                padding: "5px 10px 15px 5px",
                borderRadius: "5px",
                flex: "1",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <TaskIcon sx={{ color: "#a0a0a0" }} />
                <Typography variant="span" sx={{ color: "#a0a0a0" }}>
                  Ongoing Task
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "60px",
                  height: "60px",
                  padding: "15px",
                  fontSize: "20px",
                  fontWeight: "semibold",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  textAlign: "center",
                  margin: "10px auto 0 auto",
                }}
              >
                <Typography variant="span">{data?.ongoingTasks}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: '#ffffff', borderLeft: "4px solid #ff00c8", boxShadow: "0 0 10px rgba(255, 0, 200, 0.1)",
                padding: "5px 10px 15px 5px",
                borderRadius: "5px",
                flex: "1",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <ShoppingCartIcon sx={{ color: "#a0a0a0" }} />
                <Typography variant="span" sx={{ color: "#a0a0a0" }}>
                  Total Product
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "60px",
                  height: "60px",
                  padding: "15px",
                  fontSize: "20px",
                  fontWeight: "semibold",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  textAlign: "center",
                  margin: "10px auto 0 auto",
                }}
              >
                <Typography variant="span">{data?.totalProducts}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} sm={6} item>
          <ProfileCardDetails data={data} />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ mt: "4px" }}>
        <Grid item xs={12} md={4}>
          <OngoingTask />
        </Grid>
        <Grid item xs={12} md={4}>
          <LatestProduct />
        </Grid>
        <Grid item xs={12} md={4}>
          <RecentPost />
        </Grid>
      </Grid>
      <ActivityGrid />
    </>
  );
};

export default Profile;
