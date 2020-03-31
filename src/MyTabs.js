import React, { useState, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Constants from "expo-constants";

const Tab = createMaterialTopTabNavigator();
import MyStack from "./pages/MyStack";
import Settings from "./pages/Settings";

import HeaderContext from "./context";
export default function MyTabs() {
  const [showHeader, setShowHeader] = useState(true);
  const displayHeader = useMemo(() => (showHeader === true ? "flex" : "none"), [
    showHeader
  ]);

  function toggleView() {
    setShowHeader(!showHeader);
  }
  return (
    <NavigationContainer>
      <HeaderContext.Provider value={{ toggleView }}>
        <Tab.Navigator
          swipeEnabled={showHeader}
          tabBarOptions={{
            style: {
              paddingTop: Constants.statusBarHeight + 15,
              display: displayHeader
            }
          }}
        >
          <Tab.Screen name="MyStack" component={MyStack} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </HeaderContext.Provider>
    </NavigationContainer>
  );
}
