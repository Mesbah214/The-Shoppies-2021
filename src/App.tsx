import axios from "axios";
import { useState, useEffect } from "react";
import movieInfo from "./models/movieInfo";
import Input from "./components/Input";
import Movies from "./components/Movies";

function App() {
  const [name, setName] = useState("");
  const [movies, setMovies] = useState<movieInfo[]>([]);
  const [nominations, setNominations] = useState<movieInfo[]>([]);

  const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${name}`;

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
      <Input onInputChangeHandler={inputChangeHandler} />

      <div>
        <h2>Nominate</h2>
        <Movies
          movies={movies}
          nominations={nominations}
          onAddNominationHandler={addNominationHandler}
        />
      </div>

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
