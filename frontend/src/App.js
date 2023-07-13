import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, Grid, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Footer from './components/Footer';
import ProductsPage from './pages/Products';
import ProductPage from './pages/Product';
import SimpleBreadcrumbs from './components/SimpleBreadcrumbs';
import UpdateProduct from "./pages/UpdateProduct";
import AddProductPage from "./pages/AddProduct";

function App() {
  // Create a default theme
  const defaultTheme = createTheme();

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={defaultTheme}>
          {/* Header component */}
          <Header />

          {/* Breadcrumbs component */}
          <SimpleBreadcrumbs />

          {/* Main content */}
          <Grid container style={{ padding: 10 }}>
            <Routes>
              {/* Route for Products page */}
              <Route path="/" element={<ProductsPage />} />

              {/* Route for individual Product page */}
              <Route path="/product/:id" element={<ProductPage />} />

              {/* Route for updating a Product */}
              <Route path="/product/update/:id" element={<UpdateProduct />} />

              {/* Route for adding a new Product */}
              <Route path="/product/add" element={<AddProductPage />} />
            </Routes>
          </Grid>

          {/* Footer component */}
          <Footer />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
