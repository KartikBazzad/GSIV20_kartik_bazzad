import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../state/myHooks";

function Header() {
  const { step } = useAppSelector((state) => state.stepReducer);
  useEffect(() => {}, [step]);
  return (
    <div className="flex w-full justify-between shadow-lg h-14">
      {step === 0 ? (
        <>
          <form
            autoComplete="off"
            action="/search"
            className="flex w-full max-w-2xl items-center px-8"
          >
            <div className="flex py-2 px-2 rounded-full w-full  bg-gray-200">
              <label htmlFor="q" className="opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 m-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                {""}
              </label>
              <input
                type="text"
                className="w-full px-2 font-Roboto bg-transparent text-lg text-gray-800  flex items-center placeholder:opacity-60 placeholder:text-gray-700 outline-none"
                name="q"
                placeholder="Search"
                id="q"
              />
            </div>
          </form>
        </>
      ) : (
        <>
          <div className="flex items-center px-4">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </Link>
            <h1 className="font-Roboto px-4 font-semibold text-xl">
              Movie Details
            </h1>
          </div>
        </>
      )}
      <div className="flex items-center px-8 justify-center">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Header;
