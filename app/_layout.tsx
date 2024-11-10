import { Stack } from "expo-router";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import Index from "./index";
import About from "./about";

export default function RootLayout() {
  return (
    <Drawer.Navigator initialRouteName="index">
      <Drawer.Screen name="index" component={Index} options={{ title: "Home" }} />
      <Drawer.Screen name="about" component={About} options={{ title: "About" }} />
    </Drawer.Navigator>
    // <Stack>
    //   <Stack.Screen name="index" options={{ title: "Home" }} />
    //   <Stack.Screen name="about" options={{ title: "About" }} />
    // </Stack>
  );
}
