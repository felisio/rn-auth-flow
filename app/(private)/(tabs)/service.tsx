import { View, Text, StyleSheet } from "react-native";

function Service() {
  return (
    <View style={styles.container}>
      <Text>Service Screen Private</Text>
    </View>
  );
}

export default Service;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
