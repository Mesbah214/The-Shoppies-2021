import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [movies, setMovies] = useState<{}[]>([]);

  const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${name}`;

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(() => {
      return e.target.value;
    });
  };

  useEffect(() => {
    if (!name) return;

    const identifier = setTimeout(() => {
      // send api call from here
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
        <ul></ul>
      </div>
    </main>
  );
}

export default App;
