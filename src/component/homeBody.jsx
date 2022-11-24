import { React, useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Typography,
  Button,
  Dialog,
  TextField,
  Divider,
} from "@mui/material";
import { useHistory } from "react-router-dom";
// ----------------------------------------------------------------------

export default function HomeBody() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);

  let history = useHistory();
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDZmNTBkN2M0ZDMyYjk5ZWViY2NiNDUzNDRmMTViYiIsInN1YiI6IjYzN2VkNDNjYTRhZjhmMDA4MzJhOTIwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e8pJA73uM-E9dVJuNunrHkNaTtNzNltDjeTL3rJXhis";
  const apiKey = "5d6f50d7c4d32b99eebccb45344f15bb";

  function clickDetail(e) {
    history.push("/detail/:id");
  }

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
      .then(function (response) {
        setNowPlaying(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
      .then(function (response) {
        setUpcoming(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(function (response) {
        setPopular(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
      .then(function (response) {
        setTopRated(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

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
        <Typography variant="h5">Millenia Movie</Typography>
      </Grid>
      <Grid item style={{ paddingTop: "30px" }}>
        <Grid item justifyContent="space-between" style={{ display: "flex" }}>
          <Typography variant="h6">Now Playing</Typography>
          <Button href="/seeAll/1">see all</Button>
        </Grid>
        <Divider thiccness={10} color="black" />
        <Grid item style={{ display: "flex", paddingTop: "25px" }}>
          {/* Card */}
          {nowPlaying ? (
            <Grid container xs={12} md={12} style={{ display: "flex" }}>
              {nowPlaying.slice(0, 6).map((movie) => (
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
        </Grid>
      </Grid>
      <Grid item style={{ paddingTop: "30px" }}>
        <Grid item justifyContent="space-between" style={{ display: "flex" }}>
          <Typography variant="h6">Upcoming</Typography>
          <Button href="/seeAll/2">see all</Button>
        </Grid>
        <Divider thiccness={10} color="black" />
        <Grid item style={{ display: "flex", paddingTop: "25px" }}>
          {/* Card */}
          {upcoming ? (
            <Grid container xs={12} md={12} style={{ display: "flex" }}>
              {upcoming.slice(0, 6).map((movie) => (
                <Grid
                  item
                  xs={4}
                  md={2}
                  style={{ display: "block", paddingRight: "20px" }}
                  value={movie.id}
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
        </Grid>
      </Grid>
      <Grid item style={{ paddingTop: "30px" }}>
        <Grid item justifyContent="space-between" style={{ display: "flex" }}>
          <Typography variant="h6">Popular</Typography>
          <Button href="/seeAll/3">see all</Button>
        </Grid>
        <Divider thiccness={10} color="black" />
        <Grid item style={{ display: "flex", paddingTop: "25px" }}>
          {/* Card */}
          {popular ? (
            <Grid container xs={12} md={12} style={{ display: "flex" }}>
              {popular.slice(0, 6).map((movie) => (
                <Grid
                  item
                  xs={4}
                  md={2}
                  style={{ display: "block", paddingRight: "20px" }}
                  value={movie.id}
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
        </Grid>
      </Grid>
      <Grid item style={{ paddingTop: "30px" }}>
        <Grid item justifyContent="space-between" style={{ display: "flex" }}>
          <Typography variant="h6">Top Rated</Typography>
          <Button href="/seeAll/4">see all</Button>
        </Grid>
        <Divider thiccness={10} color="black" />
        <Grid item style={{ display: "flex", paddingTop: "25px" }}>
          {/* Card */}
          {topRated ? (
            <Grid container xs={12} md={12} style={{ display: "flex" }}>
              {topRated.slice(0, 6).map((movie) => (
                <Grid
                  item
                  xs={4}
                  md={2}
                  style={{ display: "block", paddingRight: "20px" }}
                  value={movie.id}
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
        </Grid>
      </Grid>
    </Grid>
  );
}
