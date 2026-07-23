import TaskInfo from '../../components/TaskInfo.jsx';

const description = "Display a list of movies with title, year, and rating.";

const requirements = [
  "Render each movie's title, year, and rating",
  "Seed at least 5 sample movies",
  "Sort the list by rating (bonus)"
];
import { useState } from 'react';

export default function MovieList() {

  const movieList = [
    {
      title: "3 Idiots",
      year: 2009,
      rating: 8.4
    },
    {
      title: "Inception",
      year: 2010,
      rating: 8.8
    },
    {
      title: "Interstellar",
      year: 2014,
      rating: 8.7
    },
    {
      title: "The Dark Knight",
      year: 2008,
      rating: 9.0
    },
    {
      title: "Dangal",
      year: 2016,
      rating: 8.3
    }
  ];
  const [buttonText, setButtonText] = useState("SHOW");
  let sorted = 0;
  const newMovieList = [...movieList].sort((a,b) => b.rating-a.rating)


  function buttonClicked() {
    setButtonText(buttonText === "SHOW" ? "HIDE" : "SHOW");
  }

  return (
    <div className="task-page">
      <TaskInfo
        title="Movie List"
        description={description}
        requirements={requirements}
        filePaths={["src/tasks/lists/movie-list.jsx"]}
      />
      <div className="task-workspace">
        <div className="stack">
          <div>
            <button onClick={buttonClicked}>{buttonText}</button>
          </div>
          {
            buttonText === "HIDE" ? 
            newMovieList.map((movie,id) => (
              <div key={id}>
                <p>Movie Name :- {movie.title}</p>
                <p>Movie Year :- {movie.year}</p>
                <p>Movie Rating :- {movie.rating}</p>
              </div>
            )) :
            <div></div>
          }
        </div>
      </div>
    </div>
  );
}