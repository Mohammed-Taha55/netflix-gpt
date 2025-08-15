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
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

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
    return () => unsubscribe()
  }, []);

  const handleGptSearchClick = () => {
dispatch(toggleGptSearchView())
  }
const handleLanguageChange = (e) => {
dispatch(changeLanguage(e.target.value))

}
  return (
    <div className="flex justify-between items-center w-screen px-8 py-4 bg-gradient-to-b from-black z-20 absolute">
      {/* Left: Netflix logo */}
      <img
        className="w-40 m-5"
        src={LOGO_URL}
        alt="logo"
      />
     
    <button className="py-2 px-4 m-2 my-2 bg-purple-900 text-white rounded-lg"
    onClick={handleGptSearchClick}
    >
      {showGptSearch? "HomePage" : "GPT Search"}
      </button>
      {/* Right: Profile + Sign Out */}
      {user && (
        
        <div className="flex items-center gap-4">
          <img
            className="w-10 rounded"
            src={LOGO2_URL}
            alt="smile logo"
          />
           { showGptSearch && (<select className="p-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option> )}
      </select>)}
          <button
            onClick={handleSignOut}
            className="font-bold text-white"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
