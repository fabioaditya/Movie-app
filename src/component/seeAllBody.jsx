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
import { useParams, useHistory } from "react-router-dom";
// ----------------------------------------------------------------------

export default function DetailBody() {
  const { id } = useParams();
  const [seeAll, setSeeAll] = useState([]);
  const [query, setQuery] = useState("");
  let history = useHistory();
  
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDZmNTBkN2M0ZDMyYjk5ZWViY2NiNDUzNDRmMTViYiIsInN1YiI6IjYzN2VkNDNjYTRhZjhmMDA4MzJhOTIwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e8pJA73uM-E9dVJuNunrHkNaTtNzNltDjeTL3rJXhis";
  const apiKey = "5d6f50d7c4d32b99eebccb45344f15bb";

  function clickDetail() {
    history.push("/detail/:id");
  }

  useEffect(() => {
    if (id == "1") {
      setQuery("now_playing");
    } else if (id == "2") {
      setQuery("upcoming");
    } else if (id == "3") {
      setQuery("popular");
    } else if (id == "4") {
      setQuery("top_rated");
    }

    if (query != "") {
      axios
        .get(`https://api.themoviedb.org/3/movie/${query}?api_key=${apiKey}`)
        .then(function (response) {
          setSeeAll(response.data.results);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }, [id, query]);

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
      <Grid item style={{ paddingTop: "30px" }}>
        <Grid item justifyContent="space-between" style={{ display: "flex" }}>
          <Typography variant="h6">
            {id
              ? id == 1
                ? "Now Playing"
                : id == 2
                ? "Upcoming"
                : id == 3
                ? "Popular"
                : id == 4
                ? "Top Rated"
                : "Title"
              : "Title"}
          </Typography>
        </Grid>
        <Divider thiccness={10} color="black" />
        <Grid item style={{ display: "flex", paddingTop: "25px" }}>
          {/* Card */}
          {seeAll ? (
            <Grid container xs={12} md={12} style={{ display: "flex" }}>
              {seeAll.map((movie) => (
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
    </Grid>
  );
}
