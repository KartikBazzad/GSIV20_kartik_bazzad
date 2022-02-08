import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../state/myHooks";
import { nextStep } from "../state/slices/stepSlice";
import { getMovieDetails } from "../utils/api";
import { MovieDetails } from "../utils/types";

function DetailsPage() {
  const [movie, setMovie] = useState<MovieDetails>();
  const params = useParams();
  const { id } = params;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(nextStep());
  }, []);
  useEffect(() => {
    getMovieDetails(id as string).then(({ data }) => {
      console.log(data);
      setMovie(data);
    });
  }, [id]);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex  p-4 flex-col md:flex-row">
        <div className="flex items-center w-52 m-auto md:m-0 min-w-max justify-center">
          <img
            className="rounded hover:scale-105 w-52"
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt={movie?.original_title}
          />
        </div>
        <div className="flex flex-col p-4 max-w-3xl">
          <div className="flex items-center">
            <h1 className="font-Roboto text-2xl font-semibold">
              {movie?.original_title}
            </h1>
            <span className=" font-sans text-2xl opacity-50 px-3">
              ({movie?.vote_average})
            </span>
          </div>
          <div>
            <p className="font-Roboto font-normal">
              <span>{movie?.release_date.split("-")[0]}</span> |
              <span> {movie?.runtime} mins</span> |
              <span> {movie?.production_companies[0].name}</span>
            </p>
          </div>
          <div className="">
            <span className="font-Roboto font-medium">Cast: </span>
            {movie?.credits.cast[0].original_name},{" "}
            {movie?.credits.cast[1].original_name}, ...
          </div>
          <div className="flex">
            <p className="overflow-clip">
              <span className="font-Roboto text-justify">Description:</span>
              {movie?.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
