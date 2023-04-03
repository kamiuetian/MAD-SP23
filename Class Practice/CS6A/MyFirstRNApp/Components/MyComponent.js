import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
/**props object  */
export default function MyComponent({ myname }) {
  //  console.log(props);
  console.log("Mycomponent component rendered");
  let inp_value;
  //state variable
  //return stateVariable  callbackFunction
  let [input, updateInput] = useState();
  let [inp1, setInp1] = useState(0);
  let [inp2, setInp2] = useState(0);
  let [result, setresult] = useState(10);
  return (
    <View>
      <Text
        style={{ color: "red", fontSize: 20 }}
        onPress={() => {
          console.log("Text is pressed");
        }}
      >
        your name is <Text style={{ color: "green" }}>{myname}</Text>
      </Text>
      {/**Text Input */}
      <TextInput
        onChangeText={(text) => {
          updateInput(text);
          //console.log(input);
        }}
      ></TextInput>
      <TextInput
        placeholder="number1"
        onChangeText={(text) => {
          setInp1(text);
        }}
      ></TextInput>
      <TextInput
        placeholder="number2"
        onChangeText={(text) => {
          setInp2(text);
        }}
      ></TextInput>
      <Text>your input is: {input}</Text>
      <Button
        color={"red"}
        title="Call Me"
        onPress={() => {
          setresult(inp1 + inp2);
        }}
      ></Button>
      <Text>
        Result {inp1}+{inp2}={result}
      </Text>
    </View>
  );
}
