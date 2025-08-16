import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(() => {
          updateProfile(auth.currentUser, { displayName: name?.current?.value }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName }));
          });
        })
        .catch((error) => setErrorMessage(error.code + " - " + error.message));
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value).catch((error) =>
        setErrorMessage(error.code + " - " + error.message)
      );
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="fixed inset-0 z-0">
        <img src={BG_URL} alt="bgimage" className="w-full h-full object-cover" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[90%] sm:w-2/3 md:w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 sm:p-10 bg-black text-white rounded-lg bg-opacity-75 z-10"
      >
        <h1 className="font-bold text-2xl sm:text-3xl py-4 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 w-full bg-gray-700 rounded"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-2 w-full bg-gray-700 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full bg-gray-700 rounded"
        />

        {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

        <button
          type="button"
          className="p-3 my-4 bg-red-700 hover:bg-red-800 w-full rounded-lg transition"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="text-center text-sm sm:text-base cursor-pointer hover:underline"
          onClick={() => setIsSignInForm(!isSignInForm)}
        >
          {isSignInForm ? "New to Netflix? Sign Up now" : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
