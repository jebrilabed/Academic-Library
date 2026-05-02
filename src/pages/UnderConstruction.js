import React from "react";
import { Box, Typography, Container, Fade, Paper, IconButton } from "@mui/material";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function UnderConstruction() {
  return (
    <Fade in={true} timeout={1000}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          color: "white",
          p: 3,
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={24}
            sx={{
              p: { xs: 4, md: 6 },
              textAlign: "center",
              borderRadius: 4,
              bgcolor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "white",
            }}
          >
            <EngineeringOutlinedIcon sx={{ fontSize: 80, color: "#60a5fa", mb: 3 }} />

            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
              الموقع تحت التطوير
            </Typography>

            <Typography variant="body1" sx={{ opacity: 0.8, lineHeight: 1.8, fontSize: "1.1rem", mb: 4 }}>
              نعمل حالياً على تطوير وتحديث المنصة لنقدم لكم تجربة تعليمية أفضل.
              سنعود قريباً!
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <IconButton
                component="a"
                href="https://github.com/jebrilabed"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)", transform: "translateY(-3px)" },
                  transition: "all 0.3s ease"
                }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.linkedin.com/in/jebril-aabed"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)", transform: "translateY(-3px)" },
                  transition: "all 0.3s ease"
                }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Fade>
  );
}
