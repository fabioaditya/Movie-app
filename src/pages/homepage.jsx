import { React, useState, useEffect } from "react";
import { Container, Grid, Button, Box, Typography } from "@mui/material";
import HomeBody from "../component/homeBody";
import Header from "../component/header";

// ----------------------------------------------------------------------

export default function Home() {
  const [buttonState, setButtonState] = useState(0);

  const handleClick = (event) => {
    setButtonState(parseInt(event));
  };

  return (
    <Container>
      <Grid>
        <HomeBody />
      </Grid>
    </Container>
  );
}
