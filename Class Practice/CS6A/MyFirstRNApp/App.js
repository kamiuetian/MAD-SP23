import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyComponent from "./Components/MyComponent";
import FlexComponent from "./Components/FlexComponent";
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
export default function App() {
  console.log("App component rendered");
  return <FlexComponent></FlexComponent>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
