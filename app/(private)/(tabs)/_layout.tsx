import { Tabs } from "expo-router";

function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="service" options={{ title: "Service" }} />
    </Tabs>
  );
}

export default TabsLayout;
