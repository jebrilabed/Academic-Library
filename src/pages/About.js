import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography
        gutterBottom
        sx={{
          fontSize: 25,
          fontWeight: "700",
          marginBottom: 2,
        }}
      >
        عن الموقع
      </Typography>
      <Typography gutterBottom sx={{ fontSize: 16, fontWeight: "500" }}>
        هذا الموقع يقدم المحاضراوت تلخيصات للطلاب مقدمة من طاقم الدعم الأكاديمي لمساعدتهم
        في مسيرتهم الدراسية.
      </Typography>
    </Container>
  );
}
