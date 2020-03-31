import React, { useContext } from "react";
import { View, Button } from "react-native";

// import { Container } from './styles';
import HeaderContext from "../context";
export default function Home({ navigation }) {
  const { toggleView } = useContext(HeaderContext);
  function openScreenAndToggleHeader() {
    toggleView();
    navigation.push("Stacked");
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => openScreenAndToggleHeader()}
        title="Open Stacked View"
        color="#009dff"
      />
    </View>
  );
}
