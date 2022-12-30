import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../contexts/auth.context";

function Regester() {
  const [showPassword, setShowPassword] = useState(false);
  const { regiseterUser, updateUserProfile, user, loginWithGoogle } =
    useContext(AuthContext);
  /*******************************/
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  /*******************************/

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    regiseterUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUserProfile({
          displayName: name,
          // photoURL: image,
        });
        toast.success("Successfully registered 🦄!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate(from, { replace: true });

        /****[spinner]****/
        form.reset();
      })
      .catch((err) =>
        toast.error(err.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      );
  };

  const GOOGLE_LOGIN = () => {
    loginWithGoogle()
      .then((res) => {
        toast.success("Successfully logged in 🦄!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        // navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  useEffect(() => {
    if (user && user.uid) {
      navigate(from, { replace: true });
    }
  }, [user]);

  return (
    <>
      {" "}
      <ToastContainer />
      <div className="bg-image p-0 m-0 h-[100vh] w-[100%] flex flex-col lg:flex-row justify-center lg:justify-around  2xl:justify-center 2xl:gap-36  overflow-hidden">
        {/* about */}
        <div className=" hidden lg:flex justify-center items-center ">
          <div className="flex flex-row justify-between items-center lg:max-w-md xl:max-w-lg 2xl:max-w-screen-sm ">
            <div className="text-slate-300  select-none">
              <h1 className="lg:text-4xl xl:text-5xl 2xl:text-7xl google-old select-none mb-12">
                todos
              </h1>
              <div className="my-4">
                <div className="lg:text-xl xl:text-2xl 2xl:text-3xl roboto flex flex-row gap-4 self-center">
                  <div>
                    <i className="bx bx-check text-blue-600 text-4xl "></i>
                  </div>
                  <div className=" flex self-center">
                    Work with your data as code
                  </div>
                </div>
                <div className="ml-[3.35rem] mt-2  sm:text-base lg:text-base xl:text-lg text-slate-400">
                  Documents in MongoDB map directly to objects in your
                  programming language. Modify your schema as your apps grow
                  over time.
                </div>
              </div>

              <div className="my-4">
                <div className="lg:text-xl xl:text-2xl 2xl:text-3xl roboto flex flex-row gap-4 self-center">
                  <div>
                    <i className="bx bx-check text-blue-600 text-4xl "></i>
                  </div>
                  <div className=" flex self-center">
                    Work with your data as code
                  </div>
                </div>
                <div className="ml-[3.35rem] mt-2  sm:text-base lg:text-base xl:text-lg text-slate-400">
                  Documents in MongoDB map directly to objects in your
                  programming language. Modify your schema as your apps grow
                  over time.
                </div>
              </div>

              <div className="my-4">
                <div className="lg:text-xl xl:text-2xl 2xl:text-3xl roboto flex flex-row gap-4 self-center">
                  <div>
                    <i className="bx bx-check text-blue-600 text-4xl "></i>
                  </div>
                  <div className=" flex self-center">
                    Work with your data as code
                  </div>
                </div>
                <div className="ml-[3.35rem] mt-2  sm:text-base lg:text-base xl:text-lg text-slate-400">
                  Documents in MongoDB map directly to objects in your
                  programming language. Modify your schema as your apps grow
                  over time.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* tag */}
        <div className="text-slate-300 lg:hidden text-center ">
          <h1 className="text-5xl sm:text-5xl md:text-5xl  google-old select-none mb-12">
            todos
          </h1>
        </div>
        {/* form */}
        <div className="mx-4   sm:flex sm:self-center ">
          {/* px-24 py-52 */}
          <div className="  rounded-3xl lg:ml-auto p-4 sm:px-16 sm:py-6 md:px-16 md:py-6 lg:px-14 lg:py-6 xl:px-20 xl:py-10 2xl:px-28 2xl:py-16  bg-slate-200 ">
            <div>
              <div className="roboto text-2xl pb-2 sm:text-3xl sm:pb-4 lg:text-3xl lg:pb-4  xl:text-4xl 2xl:text-5xl text-center xl:pb-6 2xl:pb-8 text-slate-800">
                Sign Up
              </div>
              <div className="text-center text-slate-800 md:text-md lg:text-lg xl:text-xl roboto pb-12">
                Making ideas happen
              </div>
            </div>
            <form className="roboto" onSubmit={handleSignUp}>
              {/* name */}
              <div className="mb-12">
                <div className="relative z-0">
                  <input
                    name="name"
                    type="text"
                    id="floating_standard"
                    className="block py-2.5 px-0 w-full text-sm sm:text-base lg:text-base xl:text-lg bg-transparent border-0 border-b-2 appearance-none text-slate-800 border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_standard"
                    className="absolute text-sm sm:text-base lg:text-base xl:text-lg text-slate-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Full Name*
                  </label>
                </div>
              </div>
              {/* email */}
              <div className="mb-12">
                <div className="relative z-0">
                  <input
                    type="email"
                    name="email"
                    id="floating_standard"
                    className="block py-2.5 px-0 w-full text-sm sm:text-base lg:text-base xl:text-lg bg-transparent border-0 border-b-2 appearance-none text-slate-800 border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_standard"
                    className="absolute text-sm sm:text-base lg:text-base xl:text-lg text-slate-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email*
                  </label>
                </div>
              </div>
              {/*  */}
              <div className="mb-12">
                <div className="relative z-0">
                  <input
                    type={!showPassword ? "password" : "text"}
                    name="password"
                    id="floating_standard"
                    className="block py-2.5 px-0 w-full text-sm  sm:text-base lg:text-base xl:text-lg bg-transparent border-0 border-b-2 appearance-none text-slate-800 border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_standard"
                    className="absolute text-sm sm:text-base lg:text-base xl:text-lg text-slate-800  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password*
                  </label>
                </div>
              </div>
              <div className="mb-12">
                <div className="flex items-center">
                  <input
                    onClick={togglePassword}
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <label
                    htmlFor="link-checkbox"
                    className="ml-2 text-sm sm:text-base lg:text-base xl:text-lg font-medium text-slate-800 dark:text-gray-300 select-none"
                  >
                    Show Password
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="text-slate-300 text-sm sm:text-base lg:text-base xl:text-lg bg-blue-700 duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold roboto rounded-lg hover:rounded-2xl  w-full py-2.5 text-center"
              >
                Create new account
              </button>

              <div className="text-center py-4">or</div>

              <div
                onClick={GOOGLE_LOGIN}
                className="text-slate-800 text-sm sm:text-base lg:text-base xl:text-lg border border-slate-800  duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold roboto rounded-lg hover:rounded-2xl   w-full py-2.5 text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline "
                  x="0px"
                  y="0px"
                  width="23"
                  height="23"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                <span className="px-2 ">Sign in with google</span>
              </div>
              <div className="text-center mt-8 text-xs md:text-sm lg:text-sm xl:text-base text-slate-800">
                Already have an account?
                <Link to={"/login"}>
                  <span className="underline px-2 text-blue-600 cursor-pointer">
                    Sign in
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Regester;
