import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

const BASE_URL = "https://aug-backpack.runasp.net";

export default function SummaryCard({ summary, type }) {
  const handleOpen = () => {
    const url = summary.driveLink ?? `${BASE_URL}${summary.documentPath}`;
    window.open(url, "_blank");
  };

  return (
    <Card
      sx={{
        bgcolor: "Background.paper",
        transition: "0.3s",
        "&:hover": { transform: "scale(1.03)", cursor: "pointer" },
      }}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid
            size={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LibraryBooksOutlinedIcon
              sx={{
                color: "text.secondary",
                fontSize: 50,
                bgcolor: "button.primary",
                padding: 1.2,
                borderRadius: 1.8,
              }}
            />
          </Grid>
          <Grid size={9}>
            <Typography gutterBottom sx={{ fontSize: 19, fontWeight: "700" }}>
              {summary.title}
            </Typography>
            <Typography gutterBottom sx={{ fontSize: 15, fontWeight: "500" }}>
              {summary.subjectName}{" "}
            </Typography>
          </Grid>
        </Grid>
        <Button
          onClick={handleOpen}
          variant="contained"
          sx={{
            width: "100%",
            padding: 1,
            marginTop: 2.5,
            bgcolor: "button.primary",
          }}
        >
          {type === "الملخصات" ? " تحميل الملخص" : " تحميل المحاضرة"}
        </Button>
      </CardContent>
    </Card>
  );
}
