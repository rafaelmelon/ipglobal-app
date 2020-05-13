import React from "react";

import { API_KEY } from "../shared";

import "./Films.css";

function Films() {
  const [films, setFilms] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true)
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=''`
    )
      .then((response) => response.json())
      .then((json) => setFilms(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="Films">{isLoading ? "loading..." : <h2>Film List</h2>}</div>
  );
}

export default Films;
