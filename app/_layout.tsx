import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import AuthProvider from "../contexts/auth/AuthProvider";
import useAuth from "../contexts/auth/useAuth";

SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const { isAppLoading } = useAuth();

  useEffect(() => {
    const loadApp = async () => {
      if (!isAppLoading) {
        await SplashScreen.hideAsync();
      }
    };

    loadApp();
  }, []);

  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false, animation: "none" }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(private)" />
      </Stack>
    </AuthProvider>
  );
}

export default RootLayout;
