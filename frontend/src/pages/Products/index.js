import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import LoadingWrapper from "../../components/LoadingWrapper";

const ProductsPage = () => {
  const navigate = useNavigate();
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch products data
    const fetchData = async () => {
      const response = await fetch('/api/products');
      setIsLoading(false);
      if (response.status === 200) {
        setProductsData(await response.json());
      }
    }
    fetchData();
  }, []);

  return (
    <LoadingWrapper maxWidth="ms" xs={12} isLoading={isLoading}>
      {/* Add Product Button */}
      <Stack direction="row" spacing={2} justifyContent="flex-end" mb={2}>
        <Button variant="contained" endIcon={<AddIcon />} onClick={() => { navigate(`/product/add`) }}>
          Add Product
        </Button>
      </Stack>
      {/* Products Table */}
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          {/* Table Head */}
          <TableHead>
            <TableRow>
              <TableCell>Product ID</TableCell>
              <TableCell>Product Name</TableCell>
            </TableRow>
          </TableHead>
          {/* Table Body */}
          <TableBody>
            {/* Map over productsData to generate table rows */}
            {productsData.map((data) => (
              <TableRow
                key={data.uid}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                style={{ cursor: 'pointer' }}
                onClick={() => { navigate(`/product/${data.uid}`) }}
                hover
              >
                {/* Product ID cell */}
                <TableCell component="th" scope="row">
                  {data.ID}
                </TableCell>
                {/* Product Name cell */}
                <TableCell component="th" scope="row">
                  {data.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </LoadingWrapper>
  );
}

export default ProductsPage;
