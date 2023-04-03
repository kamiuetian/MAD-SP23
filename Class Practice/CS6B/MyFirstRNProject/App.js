import { StyleSheet, Text, View } from "react-native";
import MyComponent from "./Components/MyComponent";

/**My First Component */

/*function MyComponent() {
  return <Text>I am MyComponent</Text>;
}*/
export default function App() {
  console.log("App compoennt rendered");
  return (
    <View style={styles.container}>
      <MyComponent name="ALi" age="30"></MyComponent>
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
