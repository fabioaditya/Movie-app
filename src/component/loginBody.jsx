import { React, useState, useEffect } from "react";
import { Grid, Typography, Box, TextField, Button } from "@mui/material";
// ----------------------------------------------------------------------

export default function HomeBody() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Grid
      container
      style={{
        width: "100%",
        paddingTop: "20px",
        paddingBottom: "40px",
        display: "block",
      }}
    >
      <Grid
        item
        justifyContent="center"
        style={{ display: "flex", marginTop: "50px" }}
      >
        <Box
          style={{
            minWidth: "400px",
            minHeight: "300px",
            padding: "30px 30px",
          }}
        >
          <Typography variant="h5">Login</Typography>
          <Grid item style={{ paddingTop: "20px" }}>
            <TextField
              style={{ width: "100%" }}
              required
              label="User Name"
              value={id}
            />
          </Grid>
          <Grid item style={{ paddingTop: "20px" }}>
            <TextField
              style={{ width: "100%" }}
              required
              label="Password"
              value={password}
            />
          </Grid>
          <Grid
            item
            justifyContent="center"
            style={{ paddingTop: "20px", display: "flex" }}
          >
            <Button variant="contained">Login</Button>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
