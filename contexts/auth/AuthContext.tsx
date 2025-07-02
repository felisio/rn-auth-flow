import { createContext } from "react";

export type AuthContextType = {
  isLoggedIn: boolean;
  isAppLoading: boolean;
  login: () => void;
  logout: () => void;
};

const initialValues: AuthContextType = {
  isLoggedIn: false,
  isAppLoading: false,
  login: () => null,
  logout: () => null,
};

const AuthContext = createContext<AuthContextType>(initialValues);

export default AuthContext;
