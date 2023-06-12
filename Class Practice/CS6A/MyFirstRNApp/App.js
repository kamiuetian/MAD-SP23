import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import FlexComponent from "./Components/FlexComponent";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import AxiosCalls from "./Components/AxiosCalls";
/**Our own component */
/* function MyComponent() {
  return (
    <View>
      <Text>I am a custom compoent.</Text>
      <Text>I am second line of component</Text>
    </View>
  );
} */
/**Component */
function HomeScreen({ navigation, route }) {
  const { itemId } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details Screen"
        onPress={() => {
          navigation.navigate("detail", {
            name: "Ali",
            fruits: ["apple", "bnana", "orange"],
          });
        }}
      ></Button>
    </View>
  );
}
function DetailsScreen({ navigation, route }) {
  console.log(route.params);
  const [title, setTitle] = useState(route.params.name);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <TextInput
        value={title}
        onChangeText={(text) => {
          setTitle(text);
        }}
      ></TextInput>
      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack();
        }}
      ></Button>
      <Button
        title="Go to Details Again"
        onPress={() => {
          navigation.push("detail");
        }}
      ></Button>
      <Button
        title="Go back to First screen"
        onPress={() => {
          navigation.poptoTop();
        }}
      ></Button>
    </View>
  );
}
const Stack = createNativeStackNavigator();
export default function App() {
  return <AxiosCalls></AxiosCalls>;
  {
    /* <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="detail"
          component={DetailsScreen}
          options={({ route }) => {
            return {
              title: route.params.name,
            };
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          initialParams={{ itemId: 42 }}
          options={{
            title: "Home",
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer> */
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
