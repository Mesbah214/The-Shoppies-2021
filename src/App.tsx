import axios from "axios";
import { useState, useEffect } from "react";

interface movieInfo {
  Title: string;
  Year: string;
  imdbID: string;
}

function App() {
  const [name, setName] = useState("");
  const [movies, setMovies] = useState<movieInfo[]>([]);
  const [nominations, setNominations] = useState<movieInfo[]>([]);

  const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${name}`;

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(() => e.target.value);
  };

  const addNominationHandler = (obj: movieInfo) => {
    if (nominations.length < 5) setNominations([...nominations, obj]);
  };

  const denominationHandler = (obj: movieInfo) => {
    setNominations(nominations.filter((a) => a.imdbID !== obj.imdbID));
  };

  useEffect(() => {
    if (!name) return;

    const identifier = setTimeout(() => {
      // send api call from here Title, imdbID, Year
      axios
        .get(url)
        .then((response) => {
          setMovies(() => response.data.Search);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [name, url]);

  return (
    <main>
      <div>
        {/* accept input from users */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={inputChangeHandler} />
      </div>

      <div>
        <h2>Nominate</h2>
        <ul>
          {movies
            ? movies.map((movie) => {
                const isDisabled = !!nominations.find(nomination => movie.imdbID === nomination.imdbID);
                return (
                  <li key={movie.imdbID}>
                    {movie.Title}
                    <span>({movie.Year})</span>
                    <button
                      onClick={() => {
                        addNominationHandler(movie);
                      }}
                      disabled={isDisabled}
                    >
                      Nominate
                    </button>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
      <br />
      <br />
      <br />

      <div>
        <h2>Nominations</h2>
        <ul>
          {nominations
            ? nominations.map((nomination) => {
                return (
                  <li key={nomination.imdbID}>
                    {nomination.Title}
                    <span>({nomination.Year})</span>
                    <button
                      onClick={() => {
                        denominationHandler(nomination);
                      }}
                    >
                      Remove
                    </button>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </main>
  );
}

export default App;
