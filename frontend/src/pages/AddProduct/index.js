import * as React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  AlertTitle,
  Card,
  Grid
} from "@mui/material";
import Box from "@mui/material/Box";
import ProductForm from "../../components/ProductForm";
import AddIcon from '@mui/icons-material/Add';
import LoadingWrapper from "../../components/LoadingWrapper";

const AddProductPage = () => {
  const navigate = useNavigate();
  const [bSuccess, setSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Function to add a new product
  const addItem = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/product`, {
        method: 'POST',
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
      console.error("Error occurred while adding product:", error);
      setIsLoading(false);
      setIsError(true);
    }
  }

  return (
    <LoadingWrapper isLoading={isLoading}>
      {bSuccess ?
        // Show success message if bSuccess is true
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Product is added!
        </Alert>
        :
        // Show product form if bSuccess is false
        <Card sx={{ display: 'flex' }} variant="outlined">
          <Grid xs={12}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <ProductForm
                defaultData={{}}
                submitButtonText={'ADD'}
                onSubmit={addItem}
                icon={<AddIcon />}
                isError={isError}
              />
            </Box>
          </Grid>
        </Card>
      }
    </LoadingWrapper>
  );
}

export default AddProductPage;
