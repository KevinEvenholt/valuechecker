import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Container } from "@mui/material";
const JWT_TOKEN = import.meta.env.VITE_JWT_TOKEN;


function App() {

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    const API_URL = "https://ean-db.com/api/v2/product/5449000000996";
   
    fetch(CORS_PROXY + API_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${JWT_TOKEN}`,
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then((data) => setProduct(data.product))
      .catch((error) => setError(error.message));
  }, []);
  

  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
<Container sx={{ maxWidth: 480, mx: "auto", p: 3 }}>
  <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
    Product Info
  </Typography>

  {product && (
    <List sx={{ bgcolor: "background.paper", borderRadius: 3, boxShadow: 4, p: 2 }}>
      <ListItem sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <ListItemAvatar>
          <Avatar sx={{ width: 80, height: 80, mb: 1 }} src={product.images?.[0]?.url} alt={product.titles.en} />
        </ListItemAvatar>
        <Typography variant="h6" fontWeight="bold">
          {product.titles.en}
        </Typography>
      </ListItem>
      <ListItem divider>
        <ListItemText primary="Title" secondary={product.titles?.en} />
      </ListItem>
      <ListItem divider>
      <ListItemText primary="Manufacturer" secondary={product.manufacturer?.titles.en} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Volume" secondary={`${product.metadata?.generic?.volume?.equals?.value}ml`} />
      </ListItem>
    </List>
  )}
</Container>

  );
}

export default App;





