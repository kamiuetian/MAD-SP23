import React from "react";
import { StyleSheet, View } from "react-native";

function FlexComponent(props) {
  return (
    <View
      style={{
        width: 100,
        height: 350,
        backgroundColor: "yellow",
      }}
    >
      <View
        style={{
          width: 50,
          height: 100,
          backgroundColor: "red",
          flexShrink: 1,
          position: "absolute",
          left: 50,
          top: 50,
        }}
      ></View>

      <View
        style={{
          width: 50,
          height: 100,
          backgroundColor: "green",
          flexShrink: 1,
        }}
      ></View>

      <View
        style={{
          width: 50,
          height: 100,
          backgroundColor: "blue",
          flexShrink: 1,
        }}
      ></View>
    </View>
  );
}
{
  /*<View
      style={{ flex: 0.5, flexDirection: "row", backgroundColor: "yellow" }}
    >
      <View style={{ flex: 1, backgroundColor: "red" }}></View>
      <View style={{ flex: 5, backgroundColor: "green" }}></View>
  </View>*/
}
export default FlexComponent;
