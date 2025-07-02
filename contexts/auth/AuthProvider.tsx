import { useEffect, useState } from "react";
import AuthContext, { AuthContextType } from "./authContext";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthProviderProps = {
  children: React.ReactElement;
};

type StorageAuthType = {
  isLoggedIn: boolean;
};

const AUTH_KEY = "asyncAuthKey";

function AuthProvider(props: AuthProviderProps) {
  const { children } = props;
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAppLoading, setIsAppLoading] = useState(true);

  const storeAuth = async (state: StorageAuthType) => {
    try {
      await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(state));
    } catch (error) {
      console.error(error);
    } finally {
      setIsAppLoading(false);
    }
  };

  const authentication = (isLoggedIn: boolean) => {
    setIsLoggedIn(isLoggedIn);
    storeAuth({ isLoggedIn });
    const path = isLoggedIn ? "/home" : "/";
    router.replace(path);
  };

  const login = () => {
    authentication(true);
  };

  const logout = () => {
    authentication(false);
  };

  useEffect(() => {
    const loadStorage = async () => {
      const authState = await AsyncStorage.getItem(AUTH_KEY);
      if (authState) {
        const auth = JSON.parse(authState) as StorageAuthType;
        authentication(auth.isLoggedIn);
      }
    };

    loadStorage();
  }, []);

  const providerValue: AuthContextType = {
    isLoggedIn,
    isAppLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
