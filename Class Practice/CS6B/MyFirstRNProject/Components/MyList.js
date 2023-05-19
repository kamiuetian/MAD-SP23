import React from "react";
import { FlatList } from "react-native";
function ItemLayout({ item }) {
  return (
    <View>
      <Text>item</Text> <Text>item</Text>
    </View>
  );
}
function MyList(props) {
  const DATA = [
    { id: "1", name: "ALi" },
    { id: "2", name: "ALi" },
    { id: "3", name: "ALi" },
  ];
  function myRenderer(item) {
    return <ItemLayout item={item}></ItemLayout>;
  }
  return (
    <>
      <FlatList data={DATA} renderItem={myRenderer} keyExtractor={item.id}></FlatList>
    </>
  );
}

export default MyList;
