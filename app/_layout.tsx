import { Stack } from "expo-router";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

// import Index from "./HomeScreen";
// import About from "./AddProductScreen";
import HomeScreen from "./HomeScreen";
import AddProductScreen from "./AddProductScreen";

export default function RootLayout() {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ 
          title: "Daily Fashion",
          headerStyle: {
            backgroundColor: '#D1E5C2'
          },
          drawerIcon: () => (
            <AntDesign name="home" size={16}/>
          ) 
        }} 
      />
      <Drawer.Screen 
        name="AddProductScreen" 
        component={AddProductScreen} 
        options={{ 
          title: "Add Product",
          headerStyle: {
            backgroundColor: '#D1E5C2'
          },
          drawerIcon: () => (
            <AntDesign name="plus" size={16}/>
          ) 
        }}  
      />
    </Drawer.Navigator>
    // <Stack>
    //   <Stack.Screen name="index" options={{ title: "Home" }} />
    //   <Stack.Screen name="about" options={{ title: "About" }} />
    // </Stack>
  );
}
