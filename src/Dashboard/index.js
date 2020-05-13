import React from "react";

import { API } from "../shared";
import Film from "../Film";

import "./Dashboard.css";

function Dashboard() {
  const [films, setFilms] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch(API)
      .then((response) => response.json())
      .then((json) => setFilms(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="Dashboard">
      {isLoading ? (
        "loading..."
      ) : (
        <>
          <h2>Film List</h2>{" "}
          {films.map((film) => (
            <Film key={film.original_title} {...{ film }} />
          ))}
        </>
      )}
    </div>
  );
}

export default Dashboard;
