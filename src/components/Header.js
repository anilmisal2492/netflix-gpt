import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, USER_AVATAR } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email,displayName} = user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName}))
    navigate("/browse")
  } else {
    // User is signed out
    dispatch(removeUser());
    navigate("/");
  }
});
return ()=> unsubscribe();
  },[])
  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-30 w-screen flex justify-between">
      <img
        className="w-36"
        src={LOGO}
        alt=""
      />
      {user && (
        <div className="flex gap-3">
          <img
            className="object-contain w-12 "
            src={USER_AVATAR}
            alt=""
          />
          <div>
            <p className="text-center text-red-500">{auth?.currentUser?.displayName}</p>
            <button
              onClick={handleSignOut}
              className=" text-center text-white border rounded-lg hover:bg-slate-500"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
