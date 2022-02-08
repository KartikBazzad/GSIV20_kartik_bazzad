import { Link } from "react-router-dom";

function MovieListCard({ movie }: any) {
  return (
    <>
      <Link to={`/details/${movie.id}`}>
        <div className="w-44 cursor-pointer hover:scale-105 lg:w-64 m-2 rounded-xl shadow-lg  flex flex-col">
          <div className="">
            <img
              className="rounded-t-lg w-44 md:w-52 md:h-60 lg:w-64 h-56 lg:h-72"
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.original_title}
            />
          </div>
          <div className="bg-white p-1 rounded-b-xl">
            <div className="flex min-h-max overflow-hidden leading-tight h-10 w-full">
              <span className="w-full text-sm px-1 font-Roboto font-medium">
                {movie.original_title}
              </span>
              <span className="px-1 opacity-70">({movie.vote_average})</span>
            </div>
            <div className="h-10 px-1 overflow-clip leading-tight">
              <span className="text-xs opacity-70">{movie.overview}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MovieListCard;
