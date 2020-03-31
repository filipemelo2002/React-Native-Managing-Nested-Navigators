import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
import Home from "./Home";
import Stacked from "./Stacked";
export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Stacked" component={Stacked} />
    </Stack.Navigator>
  );
}
