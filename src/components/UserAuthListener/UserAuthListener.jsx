import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, toggleLoading } from "../../redux/features/user/userSlice";
import { auth } from "../../firebase/firebase.config";

const UserAuthListener = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ name: user.displayName, email: user.email }));
        dispatch(toggleLoading(false));
      } else {
        dispatch(toggleLoading(true));
      }
    });
  }, [dispatch]);
  return null;
};

export default UserAuthListener;
