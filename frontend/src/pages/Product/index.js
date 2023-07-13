import * as React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Alert, AlertTitle,
  Button,
  Card, CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from "@mui/material/Box";
import YesNoDialog from "../../components/YesNoDialog";
import SelectFormData from "../../data/formData.json";
import LoadingWrapper from "../../components/LoadingWrapper";

const ProductPage = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [productData, setProductData] = useState({});
  const [bDialogOpen, setDialogOpen] = useState(false);
  const [bSuccess, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Function to delete a product
  const deleteItem = async () => {
    setIsLoading(true);
    const response = await fetch(`/api/product/${param.id}`, { method: 'DELETE' });
    if (response.status === 200) {
      setIsLoading(false);
      setSuccess(true);
      setDialogOpen(false);
      setTimeout(() => { navigate('/') }, 2000);
    }
  }

  useEffect(() => {
    // Fetch product data
    const fetchData = async () => {
      const response = await fetch(`/api/product/${param.id}`);
      if (response.status === 200) {
        const jsonResults = await response.json();
        setProductData(jsonResults);
        setIsLoading(false);
      } else {
        navigate('/')
      }
    }
    fetchData();
  }, [param.id]);

  return (
    <LoadingWrapper isLoading={isLoading}>
      {bSuccess ?
        // Show success message if bSuccess is true
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Product is deleted!
        </Alert>
        :
        // Show product card if bSuccess is false
        <Card sx={{ display: 'flex' }} variant="outlined">
          <Grid xs={12} sm={4}>
            {/* Card Media */}
            <CardMedia
              sx={{ minHeight: 500 }}
              style={{ backgroundColor: productData.colour, opacity: '40%' }}
            />
          </Grid>
          <Grid xs={12} sm={8}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                {/* Product Details List */}
                <List>
                  {Object.keys(productData).map((e, i) => {
                    if (e !== 'uid') {
                      let value = productData[e];
                      if (e === 'size') {
                        value = SelectFormData.size[value - 1].size;
                      }
                      let label = e.charAt(0).toUpperCase() + e.slice(1);
                      return (
                        <ListItem key={e}>
                          {/* Product Detail ListItem */}
                          <ListItemText primary={label} secondary={value} secondaryTypographyProps={{ style: { whiteSpace: "pre-line" } }} />
                          <Divider />
                        </ListItem>
                      )
                    }
                  })}
                </List>
              </CardContent>
              {/* Card Actions */}
              <CardActions style={{ alignSelf: 'center' }}>
                <Stack direction="row" spacing={2}>
                  {/* Delete Button */}
                  <Button
                    variant="outlined"
                    endIcon={<DeleteIcon />}
                    onClick={() => { setDialogOpen(true) }}>
                    Delete
                    {/* Yes/No Dialog for Delete Confirmation */}
                    <YesNoDialog
                      bOpen={bDialogOpen}
                      setDialogState={setDialogOpen}
                      sDialogMsg={'Do you want to remove this product?'}
                      alertAction={deleteItem}
                    />
                  </Button>
                  {/* Update Button */}
                  <Button
                    variant="contained"
                    endIcon={<EditIcon />}
                    onClick={() => { navigate(`/product/update/${param.id}`) }}>
                    Update
                  </Button>
                </Stack>
              </CardActions>
            </Box>
          </Grid>
        </Card>
      }
    </LoadingWrapper>
  );
}

export default ProductPage;
