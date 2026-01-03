import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsContainer from "./components/pages/products/ProductsContainer"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import LoginPage from "./components/pages/auth/LoginPage"
import RegisterPage from "./components/pages/auth/RegisterPage"
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Box component="main" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/ProductsContainer" element={<ProductsContainer />} />
            <Route path="/RegisterPage" element={<RegisterPage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}
export default App;