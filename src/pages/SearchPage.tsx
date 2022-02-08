import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieListCard from "../components/cards/MovieListCard";
import { searchMovie } from "../utils/api";
import { MovieDetails } from "../utils/types";
function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
function SearchPage() {
  let query = useQuery();
  const searchQuery = query.get("q");
  const [loading, setLoading] = useState(true);
  const [movies, setMovies]: Array<MovieDetails | any> = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    setLoading(true);
    searchMovie(searchQuery as string, pageNumber)
      .then(({ data }) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      })
      .catch((e) => {
        return;
      });
  }, [searchQuery, pageNumber]);
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex mx-auto my-4 items-center justify-center flex-wrap">
        {loading
          ? "Loading"
          : movies.map((movie: MovieDetails) => {
              return (
                <div key={movie.imdb_id}>
                  <MovieListCard movie={movie} />
                </div>
              );
            })}
      </div>
      {!loading && (
        <div className="button-groups flex max-w-lg w-full h-28 items-center justify-around">
          <button
            disabled={pageNumber === 1 ? true : false}
            onClick={() => setPageNumber(1)}
            className={`button ${
              pageNumber === 1 ? "button-disabled" : "button-enabled"
            }`}
          >
            First Page
          </button>
          <button
            disabled={pageNumber === 1 ? true : false}
            onClick={() => setPageNumber(pageNumber - 1)}
            className={`button ${
              pageNumber === 1 ? "button-disabled" : "button-enabled"
            }`}
          >
            Previous Page
          </button>

          <button
            disabled={pageNumber === totalPages ? true : false}
            onClick={() => setPageNumber(pageNumber + 1)}
            className={`button ${
              pageNumber === totalPages ? "button-disabled" : "button-enabled"
            }`}
          >
            Next Page
          </button>
          <button
            disabled={pageNumber === totalPages ? true : false}
            onClick={() => setPageNumber(totalPages)}
            className={`button ${
              pageNumber === totalPages ? "button-disabled" : "button-enabled"
            }`}
          >
            Last Page
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
