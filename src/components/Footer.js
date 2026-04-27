import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        boxShadow: "0px 6px 15px -3px rgba(0, 0, 0, 0.1 )",
        width: "100%",
        textAlign: "center",
      }}
    >
      <CardContent>
        <Container maxWidth="lg">
          <Typography
            gutterBottom
            sx={{
              fontSize: 15,
              fontWeight: "500",
              marginTop: 1,
            }}
          >
            تم انشاء هذا الموقع من قبل GSE
          </Typography>
          <Typography gutterBottom sx={{ fontSize: 15, fontWeight: "500" }}>
            © جميع الحقوق محفوظة | GSE
          </Typography>
        </Container>
      </CardContent>
    </Card>
  );
}
