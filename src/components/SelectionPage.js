import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Card, CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

/**
 * Reusable selection page for Major / Level / Semester flows.
 *
 * @param {string}   title    – page heading
 * @param {Array}    items    – list of selectable items ({ id, name })
 * @param {boolean}  loading  – whether data is still loading
 * @param {Function} onSelect – called with the selected item
 */
export default function SelectionPage({ title, items, loading, onSelect }) {
  if (loading) {
    return (
      <Container
        maxWidth="lg"
        sx={{
          marginTop: 6,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ marginTop: 3, marginBottom: 3 }}>
      <Typography sx={{ fontSize: 24, fontWeight: "700" }}>
        {title}{" "}
      </Typography>
      <Grid container spacing={2} sx={{ textAlign: "center", marginTop: 2 }}>
        {items.map((item) => (
          <Grid size={{ md: 6, xs: 12 }} key={item.id}>
            <Card
              sx={{
                bgcolor: "Background.paper",
                padding: 1,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
              }}
            >
              <CardActionArea onClick={() => onSelect(item)}>
                <CardContent sx={{ padding: 3 }}>
                  <Typography sx={{ fontSize: 25, fontWeight: "700" }}>
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
