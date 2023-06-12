import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import MyComponent from "./Components/MyComponent";
import FlexBoxComponent from "./Components/FlexBoxComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import MetaMaskWallet from "./Components/MetaMaskBalance";
import UserLocation from "./Components/UserLocation";

/**My First Component */

/*function MyComponent() {
  return <Text>I am MyComponent</Text>;
}*/
const Stack = createNativeStackNavigator();
function HomeScreen({ navigation, route }) {
  console.log(route.params);
  const { theme } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details Screen"
        onPress={() => {
          navigation.navigate("Detail", { name: "ALi", reg: "01" });
        }}
      ></Button>
      <Button
        title="change theme"
        onPress={() => {
          navigation.setParams({ theme: "dark" });
          console.log(route.params);
        }}
      ></Button>
    </View>
  );
}
function DetailsScreen({ navigation, route }) {
  const [name, setName] = useState(route.params.name);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <TextInput
        value={name}
        onChangeText={(text) => {
          setName(text);
        }}
      ></TextInput>
      <Button
        title="Go to Details Again"
        onPress={() => {
          navigation.push("Detail");
        }}
      ></Button>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      ></Button>
      <Button
        title="Go to First Screen"
        onPress={() => {
          navigation.popToTop("Home");
        }}
      ></Button>
    </View>
  );
}
export default function App() {
  return <UserLocation></UserLocation>;
  /*  <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
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
          name="Detail"
          component={DetailsScreen}
          options={({ route }) => {
            return {
              title: route.params.name,
            };
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home Screen",
          }}
          initialParams={{ theme: "light" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer> */
}
{
  /**<View style={styles.container}>
      <MyComponent name="ALi" age="30"></MyComponent>
    </View> */
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
