import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setlogInFlag } from "../redux/logInSlice";

const ProtectedRoute = ({children}) => {
  const isLoggedIn = useSelector((state) => state.signin.logInFlag);
  const dispatch = useDispatch();
  console.log(isLoggedIn, "iiiiiiiiiiiiiiiiii")
 
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};
export default ProtectedRoute;
