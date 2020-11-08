import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RootHomeStackScreen from "./RootHomeStackScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={RootHomeStackScreen} />
        {/* <Tab.Screen name="Settings" component={RootSettingsStackScreen} /> */}
      </Tab.Navigator>
    </>
  );
}
