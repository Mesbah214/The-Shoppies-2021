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

  const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${name}`;

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(() => {
      return e.target.value;
    });
  };

  useEffect(() => {
    if (!name) return;

    const identifier = setTimeout(() => {
      // send api call from here Title, imdbID, Year
      axios
        .get(url)
        .then((response) => {
          // console.log(response.data)
          setMovies(() => {
            return response.data.Search;
          });
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
        <ul>
          {movies
            ? movies.map((movie) => {
                return (
                  <li key={movie.imdbID}>
                    {movie.Title}
                    <span>({movie.Year})</span>
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
