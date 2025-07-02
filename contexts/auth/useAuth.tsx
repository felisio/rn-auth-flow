import { useContext } from "react";
import AuthContext from "./authContext";

function useAuth() {
  const { isLoggedIn, isAppLoading, login, logout } = useContext(AuthContext);

  return {
    isLoggedIn,
    isAppLoading,
    login,
    logout,
  };
}

export default useAuth;
