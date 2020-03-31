import React, { useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, BackHandler } from "react-native";
import { Feather } from "@expo/vector-icons";
// import { Container } from './styles';
import HeaderContext from "../context";
export default function Stacked({ navigation }) {
  const { toggleView } = useContext(HeaderContext);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      toggleView
    );

    return () => backHandler.remove();
  }, []);

  function navigateBack() {
    toggleView();
    navigation.goBack();
  }
  navigation.setOptions({
    headerLeft: () => (
      <TouchableOpacity style={{ padding: 7 }} onPress={navigateBack}>
        <Feather name="arrow-left" size={28} color="#009dff" />
      </TouchableOpacity>
    )
  });
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>My Stacked Screen</Text>
    </View>
  );
}
