import React from "react";

import "./Film.css";

function Films({ film, onClick }) {
  const [form, setForm] = React.useState(false);
  const [vote, setVote] = React.useState(0);
  const [comment, setComment] = React.useState("");

  const handleToggleBack = (e) => {
    setForm(false);
  };

  const handleToggle = (e) => {
    setForm(!form);
  };

  const handleChangeVote = (e) => {
    setVote(e.target.value);
  };

  const handleChangeComment = (e) => {
    setComment(e.target.value);
  };

  const renderFilm = () => {
    return (
      <div className="Poster" onClick={handleToggle}>
        <h2>{film.title}</h2>
        <h3>{film.release_date}</h3>
        {film.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={film.original_title}
          />
        ) : (
          film.original_title
        )}
      </div>
    );
  };

  const renderForm = () => {
    const filmDataArray = Object.entries(film);

    return (
      <div className="Info">
        <div className="Info--form">
          <button onClick={handleToggleBack}>Return</button>
          <input value={vote} type="number" onChange={handleChangeVote} />
          <input value={comment} type="text" onChange={handleChangeComment} />
        </div>
        <div className="Info--data">
          <p>{`VOTE: ${vote}`}</p>
          <p>{`COMMENT: ${comment}`}</p>
          {filmDataArray.map((film) => (
            <p>{`${film[0]}: ${film[1]}`}</p>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="Film">
      {!form ? renderFilm() : renderForm()}
    </div>
  );
}

export default Films;
