import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyComponent from "./Components/MyComponent";
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
  return (
    <View style={styles.container}>
      <MyComponent myname="ALi" age="29"></MyComponent>
      <MyComponent myname="KAmran" age="29"></MyComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
