import React from "react";
import { View } from "react-native";
function FlexBoxComponent(props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        //justifyContent: "center",
        //alignItems: "center",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "yellow",
          alignSelf: "center",
          //flexWrap: "wrap",
          alignContent: "center",
        }}
      >
        <View
          style={{
            width: 30,
            height: 60,
            backgroundColor: "grey",
            flexShrink: 2,
          }}
        ></View>
        <View
          style={{ width: 30, height: 30, backgroundColor: "orange" }}
        ></View>
      </View>
      <View style={{ width: 50, height: 50, backgroundColor: "green" }}></View>
      <View style={{ width: 50, height: 50, backgroundColor: "black" }}></View>
    </View>
  );
  {
    /**
  1+2+3 = 6
 */
  }
}

export default FlexBoxComponent;
