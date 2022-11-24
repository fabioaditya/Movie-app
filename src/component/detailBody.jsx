import { React, useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Typography,
  Button,
  Dialog,
  TextField,
  Divider,
  CardMedia,
} from "@mui/material";
import { useParams, useHistory } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

// ----------------------------------------------------------------------

export default function DetailBody() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [similar, setSimilar] = useState([]);
  let history = useHistory();

  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDZmNTBkN2M0ZDMyYjk5ZWViY2NiNDUzNDRmMTViYiIsInN1YiI6IjYzN2VkNDNjYTRhZjhmMDA4MzJhOTIwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e8pJA73uM-E9dVJuNunrHkNaTtNzNltDjeTL3rJXhis";
  const apiKey = "5d6f50d7c4d32b99eebccb45344f15bb";

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(function (response) {
        setDetail(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}`)
      .then(function (response) {
        setSimilar(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [id]);

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
      <Grid item>
        <Typography variant="h5">
          {detail ? `${detail.original_title}` : ""}
        </Typography>
      </Grid>
      <Divider thiccness={10} color="black" />
      <Grid item style={{ display: "flex", paddingTop: "20px" }}>
        <img
          src={`https://image.tmdb.org/t/p/original${detail.poster_path}`}
          style={{ maxWidth: "200px", maxHeight: "300px" }}
        />
        <Grid item style={{ paddingLeft: "20px", display: "block" }}>
          <Typography sx={{ fontWeight: "bold" }}>
            {detail
              ? `${detail.runtime} min / Released at ${detail.release_date}`
              : ""}
          </Typography>
          <Typography sx={{ fontWeight: "bold", display: "flex" }}>
            <StarIcon style={{ color: "yellow", height: "21px" }} />{" "}
            {detail ? `${detail.vote_average}` : ""}
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>
            {detail ? (detail.genres ? `${detail.genres[0].name}` : "") : ""}
          </Typography>
          <Typography style={{ paddingTop: "20px" }}>
            {detail ? `${detail.overview}` : ""}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        justifyContent="center"
        alignItems="center"
        style={{ width: "100%", display: "flex", paddingTop: "50px" }}
      >
        <CardMedia
          component="iframe"
          title="test"
          src="https://www.youtube.com/embed/eI4an8aSsgw"
          style={{ maxWidth: "500px", height: "300px" }}
        />
      </Grid>
      <Grid item style={{ paddingTop: "30px" }}>
        <Grid item justifyContent="space-between" style={{ display: "flex" }}>
          <Typography variant="h6">Similiar Movies</Typography>
        </Grid>
        <Divider thiccness={10} color="black" />
        <Grid item style={{ display: "flex", paddingTop: "25px" }}>
          {/* Card */}
          {similar ? (
            <Grid container xs={12} md={12} style={{ display: "flex" }}>
              {similar.slice(0, 6).map((movie) => (
                <Grid
                  item
                  xs={4}
                  md={2}
                  style={{ display: "block", paddingRight: "20px" }}
                  onClick={() => {
                    history.push(`/detail/${movie.id}`);
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                  <Grid item style={{ paddingBottom: "15px" }}>
                    <Typography>{movie.title}</Typography>
                    <Typography>{movie.release_date}</Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          ) : (
            ""
          )}
          {/* Card end */}
          {/* place holder done */}
        </Grid>
      </Grid>
    </Grid>
  );
}
