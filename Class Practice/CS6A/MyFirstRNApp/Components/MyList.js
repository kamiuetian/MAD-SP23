import React from "react";
import { FlatList } from "react-native";

function MyList(props) {
  //const DATA = ["one", "two", "three"];
  const DATA = [
    { key: 1, id: "1", name: "ALi" },
    { key: 1, d: "2", name: "ALi" },
    { key: 1, id: "3", name: "ALi" },
  ];
  function myrenderer({ item }) {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.id}</Text>
      </View>
    );
  }
  return (
    <>
      <FlatList
        data={DATA}
        renderItem={(item) => {
          return <myrenderer item={item}></myrenderer>;
        }}
      ></FlatList>
    </>
  );
}

export default MyList;
