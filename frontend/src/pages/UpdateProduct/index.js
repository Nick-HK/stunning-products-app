import * as React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Alert,
  AlertTitle,
  Card,
  Grid
} from "@mui/material";
import Box from "@mui/material/Box";
import ProductForm from "../../components/ProductForm";
import EditIcon from "@mui/icons-material/Edit";
import LoadingWrapper from "../../components/LoadingWrapper";

const UpdateProductPage = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [productData, setProductData] = useState({});
  const [bSuccess, setSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const updateItem = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/product/${param.id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });

      setIsLoading(false);

      if (response.status === 200) {
        setSuccess(true);
        setTimeout(() => { navigate('/') }, 2000);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error("Error occurred while updating product:", error);
      setIsLoading(false);
      setIsError(true);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(`/api/product/${param.id}`);
      if (response.status === 200) {
        const jsonResults = await response.json();
        setIsLoading(false);
        setProductData(jsonResults);
      } else {
        navigate('/');
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
          Product is updated!
        </Alert>
        :
        // Show product form if bSuccess is false
        <Card sx={{ display: 'flex' }} variant="outlined">
          <Grid xs={12}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <ProductForm
                defaultData={productData}
                submitButtonText={'UPDATE'}
                onSubmit={updateItem}
                icon={<EditIcon />}
                isError={isError}
              />
            </Box>
          </Grid>
        </Card>
      }
    </LoadingWrapper>
  );
}

export default UpdateProductPage;
