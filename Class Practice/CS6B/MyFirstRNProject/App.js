import { StyleSheet, Text, View } from "react-native";
import MyComponent from "./Components/MyComponent";
import FlexBoxComponent from "./Components/FlexBoxComponent";

/**My First Component */

/*function MyComponent() {
  return <Text>I am MyComponent</Text>;
}*/
export default function App() {
  console.log("App compoennt rendered");
  return <FlexBoxComponent></FlexBoxComponent>;
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
