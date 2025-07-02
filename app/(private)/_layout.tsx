import { Redirect, Stack } from "expo-router";
import useAuth from "../../contexts/auth/useAuth";

function PrivateLayout() {
  const { isLoggedIn, isAppLoading } = useAuth();

  if (isAppLoading) {
    return null;
  }

  if (!isLoggedIn) {
    return <Redirect href="/" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}

export default PrivateLayout;
