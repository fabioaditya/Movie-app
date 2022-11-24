import { React, useState, useEffect } from "react";
import { Container, Grid, Button, Box, Typography } from "@mui/material";
import LoginBody from "../component/loginBody";

// ----------------------------------------------------------------------

export default function Home() {
  const [buttonState, setButtonState] = useState(0);

  const handleClick = (event) => {
    setButtonState(parseInt(event));
  };

  return (
    <Container>
      <Grid>
        <LoginBody />
      </Grid>
    </Container>
  );
}
