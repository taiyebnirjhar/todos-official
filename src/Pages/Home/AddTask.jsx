import React, { useState } from "react";

function AddTask() {
  const [showOnHover, setShowOnHover] = useState({
    checkbox: false,
    draw: false,
  });

  const [showSectionOnClick, setShowSectionOnClick] = useState({
    subsection: true,
    fullsecion: false,
  });

  return (
    <div>
      {/* subsection */}
      {showSectionOnClick.subsection && (
        <form
          className="roboto  "
          onClick={() => {
            setShowSectionOnClick((prev) => {
              return {
                ...prev,
                subsection: false,
                fullsecion: true,
              };
            });
          }}
        >
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Take a Note ..
          </label>
          <div className="relative">
            <input
              type=""
              id="default-search"
              className="block w-full py-4 px-48 pl-10 text-base text-slate-300  rounded-lg border border-gray-600 bg-[#151f28]  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Take a Note .."
              required
            />

            {/* image */}
            <div className="text-slate-300  absolute right-24 bottom-[0.15rem] text-xl px-6 py-2 mb-[.354rem]">
              @
            </div>

            {/* checkbox */}
            <div
              onMouseEnter={() => {
                setShowOnHover((prev) => {
                  return {
                    ...prev,
                    checkbox: true,
                  };
                });
              }}
              onMouseLeave={() => {
                setShowOnHover((prev) => {
                  return {
                    ...prev,
                    checkbox: false,
                  };
                });
              }}
              className="text-white opacity-30 absolute right-14 bottom-[0.15rem] text-2xl px-4 py-2"
            >
              <i className="bx bx-check-square"></i>
            </div>

            {showOnHover.checkbox && (
              <div className="text-white duration-300 ease-in-out bg-[#151f28]  rounded-lg opacity-30 absolute right-[-0.5rem] bottom-[-2.5rem] text-xs px-4 py-2">
                checkbox is not available
              </div>
            )}

            {/* draw */}
            <div
              onMouseEnter={() => {
                setShowOnHover((prev) => {
                  return {
                    ...prev,
                    draw: true,
                  };
                });
              }}
              onMouseLeave={() => {
                setShowOnHover((prev) => {
                  return {
                    ...prev,
                    draw: false,
                  };
                });
              }}
              className="text-white opacity-30 absolute right-2.5 bottom-[0.15rem] text-2xl px-4 py-2"
            >
              <i className="bx bx-pen"></i>
            </div>
            {showOnHover.draw && (
              <div className="text-white duration-300 ease-in-out bg-[#151f28] rounded-lg opacity-30 absolute right-[-2.5rem] bottom-[-2.5rem] text-xs px-4 py-2">
                draw is not available
              </div>
            )}
          </div>
        </form>
      )}

      {/* full section */}
      {showSectionOnClick.fullsecion && (
        <form
          className="roboto "
          onSubmit={() => {
            setShowSectionOnClick((prev) => {
              return {
                subsection: true,
                fullsecion: false,
              };
            });
          }}
        >
          <div className="w-full mb-4 border border-gray-700 rounded-lg bg-[#151f28]  dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-[#151f28]  rounded-t-lg dark:bg-gray-800">
              <label htmlFor="comment" className="sr-only">
                Take a Note...
              </label>
              <textarea
                id="comment"
                rows="6"
                cols="36"
                className="w-full px-0 text-base text-slate-300 bg-[#151f28]  border-none dark:bg-gray-800 focus:outline-none  dark:text-white dark:placeholder-gray-400"
                placeholder="Take a Note..."
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t border-gray-700 dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Add Note
              </button>
              <div className="flex pl-0 space-x-1 sm:pl-2">
                <button
                  type="button"
                  className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Attach file</span>
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Set location</span>
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Upload image</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddTask;
