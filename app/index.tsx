import { View, Text, StyleSheet, Button } from "react-native";
import useAuth from "../contexts/auth/useAuth";

function Index() {
  const { login } = useAuth();

  return (
    <View style={styles.container}>
      <Text>Index Page</Text>
      <Button title="Login" onPress={login} />
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
