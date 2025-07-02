import { View, Text, StyleSheet, Button } from "react-native";
import useAuth from "../../../contexts/auth/useAuth";

function Home() {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text>Home Screen Private</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
