import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

export default function Contact() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 3, marginBottom: 3 }}>
      <Typography
        gutterBottom
        sx={{
          fontSize: 25,
          fontWeight: "700",
          marginBottom: 2,
        }}
      >
        اتصل بنا{" "}
      </Typography>
      <Typography gutterBottom sx={{ fontSize: 16, fontWeight: "500" }}>
        للتواصل: jebrilaabed@gmail.com
      </Typography>
      <Typography gutterBottom sx={{ fontSize: 16, fontWeight: "500" }}>
        واتساب: +972 56-767-7406{" "}
      </Typography>
    </Container>
  );
}
