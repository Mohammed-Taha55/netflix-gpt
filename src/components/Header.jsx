import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO2_URL, LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email, displayName: displayName }));
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex justify-between items-center w-full px-4 sm:px-8 py-3 bg-gradient-to-b from-black z-20 absolute">
      {/* Left: Netflix logo */}
      <img
        className="w-20 sm:w-28 md:w-36"
        src={LOGO_URL}
        alt="logo"
      />

      {/* Middle: GPT search / Home button */}
      <button
        className="py-1 px-3 sm:px-4 bg-purple-900 text-white rounded-lg text-xs sm:text-sm md:text-base"
        onClick={handleGptSearchClick}
      >
        {showGptSearch ? "HomePage" : "GPT Search"}
      </button>

      {/* Right: Profile + Language + Sign Out */}
      {user && (
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <img
            className="w-7 sm:w-8 md:w-10 rounded"
            src={LOGO2_URL}
            alt="profile logo"
          />

          {showGptSearch && (
            <select
              className="p-1 sm:p-1.5 md:p-2 bg-gray-900 text-white text-xs sm:text-sm md:text-base rounded"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleSignOut}
            className="font-bold text-white text-xs sm:text-sm md:text-base"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
