import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { TextInput, Text } from "react-native";
import { View } from "react-native";
import { context1 } from "../Store/store";
function ComponentA() {
  const use_context = useContext(context1);
  return (
    <View>
      <Text>ComponentA</Text>
      <Text>{use_context.name}</Text>
    </View>
  );
}
function ComponentB() {
  const use_context = useContext(context1);
  return (
    <View>
      <Text>ComponentB</Text>
      <TextInput
        value={use_context.name}
        onChangeText={(txt) => {
          use_context.setName(txt);
        }}
      ></TextInput>
    </View>
  );
}
function AxiosCalls(props) {
  //const context1 = React.createContext(null);
  const [name, setName] = useState("kamran");
  return (
    <context1.Provider value={{ name, setName }}>
      <ComponentA></ComponentA>
      <ComponentB></ComponentB>
    </context1.Provider>
  );
  /* axios
    .get("https://jsonplaceholder.typicode.com/comments", {
      params: {
        postId: 1,
      },
    })
    .then((response) => {
      console.log(response.data[0].email);
    })
    .catch((error) => {
      console.log(error);
    });
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: "foo",
      body: "bar",
      userId: 1,
    })
    .then((response) => {
      console.log(response);
    });*/
}

export default AxiosCalls;
