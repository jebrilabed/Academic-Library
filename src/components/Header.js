// MUI Imports
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import { Typography, FormControlLabel } from "@mui/material";
import { ColorModeContext } from "../contexts/ThemeContext";
import MaterialUISwitch from "../components/MaterialUISwitch";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

// Hooks Imports
import { useContext } from "react";

function Header() {
  const { mode, toggleColorMode } = useContext(ColorModeContext);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navButtonSx = {
    fontSize: { md: 19, sm: 17, xs: 15 },
    padding: "0 20px",
    height: "80%",
  };

  return (
    <Card
      sx={{
        bgcolor: "Background.paper",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <CardContent>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            width="100%"
            sx={{
              display: "flex",
              justifyContent: { md: "space-between", xs: "center" },
            }}
          >
            <Grid
              item
              md={3}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <MenuBookOutlinedIcon
                sx={{
                  color: "text.secondary",
                  fontSize: { md: 50, sm: 48, xs: 46 },
                  bgcolor: "button.primary",
                  padding: 1.2,
                  borderRadius: 1.8,
                }}
              />
              <Typography
                gutterBottom
                sx={{
                  fontSize: { md: 30, sm: 28, xs: 26 },
                  fontWeight: "800",
                  marginTop: "10px",
                }}
              >
                ملخصات ومحاضرات جامعية
              </Typography>
            </Grid>
            <Grid
              item
              md={7}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button onClick={() => scrollToSection("home")} sx={navButtonSx}>
                الرئيسية
              </Button>

              <Button onClick={() => scrollToSection("about")} sx={navButtonSx}>
                عن الموقع
              </Button>

              <Button
                onClick={() => scrollToSection("contact")}
                sx={navButtonSx}
              >
                الاتصال
              </Button>
            </Grid>
            <Grid
              item
              md={1}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FormControlLabel
                control={
                  <MaterialUISwitch
                    checked={mode === "dark"}
                    onChange={toggleColorMode}
                  />
                }
              />
            </Grid>
          </Grid>
        </Container>
      </CardContent>
    </Card>
  );
}

export default Header;
