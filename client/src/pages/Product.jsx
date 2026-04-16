import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useIdeaForge from "../hooks/useIdeaForge";
import axios from "axios";
import {
  Container,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Button,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const Product = () => {
  const { productId } = useParams();
  const {
    setLoadingStatus,
    setAlertBoxOpenStatus,
    setAlertSeverity,
    setAlertMessage,
  } = useIdeaForge();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingStatus(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_ENDPOINT}/products/${productId}`
        );
        if (response.data.status) {
          setProduct(response.data.product);
        } else {
          setAlertBoxOpenStatus(true);
          setAlertSeverity("error");
          setAlertMessage(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setAlertBoxOpenStatus(true);
        setAlertSeverity("error");
        setAlertMessage(
          error.response?.data?.message || "Something Went Wrong"
        );
      } finally {
        setLoadingStatus(false);
      }
    };
    fetchData();
  }, [
    productId,
    setAlertBoxOpenStatus,
    setAlertMessage,
    setAlertSeverity,
    setLoadingStatus,
  ]);

  const handleBuy = () => {
    setAlertSeverity("info");
    setAlertMessage("Checkout feature is currently in Developer Mode. Payment Gateway pending integration.");
    setAlertBoxOpenStatus(true);
  };

  return (
    <Container sx={{ maxWidth: 1280, margin: "20px auto", padding: 2 }}>
      {product ? (
        <Card>
          <CardMedia
            component="img"
            height="240"
            image={`${import.meta.env.VITE_SERVER_ENDPOINT}/productimage/${
              product.image
            }`}
            alt={product.title}
          />
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5" component="div">
                {product.title}
              </Typography>
              <Box textAlign="right" color="text.secondary">
                <Typography>{product.authorName}</Typography>
                <Typography>{product.authorEmail}</Typography>
              </Box>
            </Box>
            <Typography variant="body1" color="text.secondary">
              {product.description}
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6" sx={{ marginTop: 2, color: '#1e293b' }}>
                Price: ${product.price}
              </Typography>
              <Button
                sx={{
                  backgroundColor: '#ffffff', borderLeft: "4px solid #ff00c8", boxShadow: "0 0 10px rgba(255, 0, 200, 0.1)",
                  color: "#a0a0a0",
                  paddingLeft: "20px!important",
                  paddingRight: "20px!important",
                  "&:hover": { backgroundColor: '#ffffff', borderLeft: "4px solid #ff00c8", boxShadow: "0 0 10px rgba(255, 0, 200, 0.1)" },
                  fontWeight: "semibold",
                }}
                startIcon={<ShoppingCart />}
                onClick={handleBuy}
              >
                Buy
              </Button>
            </Box>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h6" align="center">
          Product not found
        </Typography>
      )}
    </Container>
  );
};

export default Product;
