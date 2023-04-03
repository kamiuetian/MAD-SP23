import { Text, TextInput, Button } from "react-native";
import { useState } from "react";
export default function MyComponent({ name }) {
  console.log("My compoennt rendered");
  //console.log(props);
  //let { name, age } = props;
  let myvalue = "";
  // state variable , callback function to update the state variable
  let [mystate, setMystate] = useState();
  let [result, setResult] = useState();
  let numb1, numb2;
  function MyPressHandler() {
    console.log("Text is pressed");
  }
  {
    /*() => {
        console.log("Text is pressed");
      }*/
  }
  return (
    <>
      <Text style={{ color: "red" }} onPress={MyPressHandler}>
        <Text style={{ color: "black" }}>My name is</Text>
        {name}
      </Text>
      <TextInput
        onChangeText={(text) => {
          //console.log(text);
          //mystate = text;  //wrong way
          setMystate(text);
          console.log(mystate);
        }}
      ></TextInput>
      <Text>{mystate}</Text>
      <TextInput
        placeholder="Number 1"
        onChangeText={(text) => {
          numb1 = text;
        }}
      ></TextInput>
      <TextInput
        placeholder="Number 2"
        onChangeText={(text) => {
          numb2 = text;
        }}
      ></TextInput>
      <Button
        title="Press Me"
        onPress={() => {
          setResult(numb1 + numb2);
        }}
        color={"red"}
      >
      </Button>
      <Text>
        Result of {numb1}+{numb2}={result}
      </Text>
    </>
  );
}
