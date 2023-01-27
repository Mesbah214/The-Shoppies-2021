import axios from "axios";
import { useState, useEffect } from "react";

import Card from "./components/UI/Card";
import movieInfo from "./models/movieInfo";
import Input from "./components/Input";
import MovieList from "./components/MovieList";

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
      // send api call from here
      axios
        .get(url)
        .then((response) => {
          setMovies(() => response.data.Search);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 400);

    return () => {
      clearTimeout(identifier);
    };
  }, [name, url]);

  return (
    <main className="bg-slate-100 mx-auto py-10 min-h-full">
      <h1 className="w-11/12 max-w-4xl mx-auto font-bold text-2xl md:text-3xl">
        The Shoppies
      </h1>
      <Card className="w-11/12 max-w-4xl my-5">
        <Input onInputChangeHandler={inputChangeHandler} val={name} />
      </Card>

      <div className="w-11/12 max-w-4xl mx-auto md:flex items-start">
        <Card className="basis-1/2 md:mr-3 mb-5 md:mb-0">
          <h2 className="text-lg font-bold md:text-xl">Results for "{name}"</h2>
          <MovieList
            objArr={movies}
            searchArr={nominations}
            name="movies"
            onMovieListHandler={addNominationHandler}
          />
        </Card>

        <Card className="basis-1/2 md:ml-3">
          <h2 className="text-lg font-bold md:text-xl">Nominations</h2>
          <MovieList
            objArr={nominations}
            name="nominations"
            onMovieListHandler={denominationHandler}
          />
        </Card>
      </div>
    </main>
  );
}

export default App;
