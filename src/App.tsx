import axios from "axios";
import { useState, useEffect } from "react";

interface movieInfo {
  id: string;
  title: string;
  year: string;
}

function App() {
  const [name, setName] = useState("");
  const [movies, setMovies] = useState<movieInfo[]>([]);

  const movie_s: movieInfo[] = [
    /* { id: "121", title: "hello", year: "2012" },
    { id: "122", title: "hello-bello", year: "2013" },
    { id: "1233", title: "hello-bello-kello", year: "2014" }, */
  ];

  const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${name}`;

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(() => {
      return e.target.value;
    });
  };

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  useEffect(() => {
    if (!name) return;

    const identifier = setTimeout(() => {
      // send api call from here Title, imdbID, Year
      axios
        .get(url)
        .then((response) => {
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
    // accept input from users
    <main>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={inputChangeHandler} />
      </div>

      <div>
        <ul>
          {/* {movies.map((movie) => {
            return (
              <li key={movie.id}>
                {movie.title}
                <span>{movie.year}</span>
              </li>
            );
          })} */}
        </ul>
      </div>
    </main>
  );
}

export default App;
