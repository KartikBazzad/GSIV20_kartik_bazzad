import { useEffect, useState } from "react";
import MovieListCard from "../components/cards/MovieListCard";
import { useAppDispatch, useAppSelector } from "../state/myHooks";
import { prevStep } from "../state/slices/stepSlice";
import { getLatestMoviesList } from "../utils/api";
import { MovieDetails } from "../utils/types";
function HomePage() {
  const [list, setList]: Array<MovieDetails | any> = useState([]);
  const [loading, setLoading] = useState(true);
  const { step } = useAppSelector((state) => state.stepReducer);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(prevStep());
  }, [step]);
  useEffect(() => {
    setLoading(true);
    getLatestMoviesList(pageNumber)
      .then(({ data }) => {
        setList(data.results);
        setLoading(false);
        console.log(data);
        setTotalPages(data.total_pages);
      })
      .catch((e) => {
        if (e) setError(true);
        return;
      });
  }, [pageNumber]);
  return (
    <>
      {error ? (
        "Error Occured"
      ) : (
        <div className=" m-4 flex items-center justify-center flex-col">
          <div className="flex max-w-screen-2xl justify-center flex-wrap">
            {loading
              ? "Loading..."
              : list.map((movie: MovieDetails) => {
                  return (
                    <div key={movie.original_title}>
                      <MovieListCard movie={movie} />
                    </div>
                  );
                })}
          </div>
          {!loading && (
            <div className="button-groups gap-2 flex max-w-lg w-full h-28 items-center justify-center">
              <button
                disabled={pageNumber === 1 ? true : false}
                onClick={() => setPageNumber(1)}
                className={`button ${
                  pageNumber === 1 ? "button-disabled" : "button-enabled"
                }`}
              >
                First
                <span className="hidden sm:inline"> Page</span>
              </button>
              <button
                disabled={pageNumber === 1 ? true : false}
                onClick={() => setPageNumber(pageNumber - 1)}
                className={`button ${
                  pageNumber === 1 ? "button-disabled" : "button-enabled"
                }`}
              >
                Previous
                <span className="hidden sm:inline"> Page</span>
              </button>

              <button
                disabled={pageNumber === totalPages ? true : false}
                onClick={() => setPageNumber(pageNumber + 1)}
                className={`button ${
                  pageNumber === totalPages
                    ? "button-disabled"
                    : "button-enabled"
                }`}
              >
                Next
                <span className="hidden sm:inline"> Page</span>
              </button>
              <button
                disabled={pageNumber === totalPages ? true : false}
                onClick={() => setPageNumber(totalPages)}
                className={`button ${
                  pageNumber === totalPages
                    ? "button-disabled"
                    : "button-enabled"
                }`}
              >
                Last
                <span className="hidden sm:inline"> Page</span>
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default HomePage;
