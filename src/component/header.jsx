import { React, useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Button,
  Dialog,
  TextField,
  Container,
} from "@mui/material";

export default function Header() {
  return (
    <Grid Container style={{ width: "100%", backgroundColor: "#e9ecf2" }}>
      <Container>
        <Grid
          item
          justifyContent="space-between"
          style={{
            display: "flex",
            padding: "15px",
            paddingLeft: "0px",
            margin: "auto",
            width: "100%",
          }}
        >
          <Button style={{ color: "red" }} href="/">
            Home
          </Button>
          <Button style={{ color: "blue" }} href="/login">
            Login
          </Button>
        </Grid>
      </Container>
    </Grid>
  );
}
