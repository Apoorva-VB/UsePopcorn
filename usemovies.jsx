import { useEffect, useState } from "react";

const KEY = "e3c86859";
export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  useEffect(
    function () {
      // const controller = new AbortController();
      callback?.();
      async function fetchMovie() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          // { signal: controller.signal }
        );
        const data = await res.json();
        setMovies(data.Search);
      }
      if (query.length < 3) {
        setMovies([]);
        return;
      }
      // handleClose();
      fetchMovie();
      // return function () {
      //   controller.abort();
      // };
    },
    [query]
  );
  return { movies };
}
