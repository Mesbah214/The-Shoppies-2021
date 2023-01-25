import { ReactNode } from "react";
import movieInfo from "../models/movieInfo";
import Movie from "./Movie";

const MovieList: React.FC<{
  objArr: movieInfo[];
  obj: movieInfo;
  // secObjArr?: movieInfo;
  children: ReactNode;
}> = ({ objArr, children }) => {
  return (
    <ul>
      {objArr
        ? objArr.map((obj) => {
            return (
              <Movie key={obj.imdbID} movie={obj}>
                {children}
              </Movie>
            );
          })
        : null}
    </ul>
  );
};

export default MovieList;
