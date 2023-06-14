import React from "react";
import { Typography, Link, Container } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg" sx={{ py: 2, textAlign: "center" }}>
        <Typography variant="body2" color="textSecondary">
          TeateriHuskvarna.se &copy; 2023 &bull;{" "}
          <Link href="#">Privacy Policy</Link> &bull;{" "}
          <Link href="#">Terms of Use</Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
