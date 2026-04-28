import Header from "./components/Header";
import Summaries from "./pages/Summaries";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Levels from "./pages/Levels";
import Major from "./pages/Major";
import Semester from "./pages/Semester";

import "./App.css";


import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { Button, Box, Container } from "@mui/material";

import { Routes, Route } from "react-router-dom";
import { SelectionProvider } from "./contexts/SelectionContext";

function App() {
  return (
    <SelectionProvider>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Header />

          <div id="home" style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Major />} />
              <Route path="/level" element={<Levels />} />
              <Route path="/semester" element={<Semester />} />
              <Route path="/summaries" element={<Summaries />} />
            </Routes>
          </div>
          <Box id="about">
            <About />
          </Box>

          <Box id="contact">
            <Contact />
          </Box>
          <Container maxWidth="lg">
            <Button
              variant="contained"
              href="https://aug-backpack.runasp.net/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: "button.primary",
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                fontSize: 14,
                px: 2.5,
                py: 1,
                boxShadow: 3,
                marginBottom: 3,
              }}
            >
              <DashboardOutlinedIcon />
              لوحة التحكم
            </Button>
          </Container>
          <Footer />
        </div>
    </SelectionProvider>
  );
}

export default App;
