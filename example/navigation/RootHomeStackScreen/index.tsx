import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../screens/HomeScreen";
import { ListScreen } from "../../screens/ListScreen";
import { DetailScreen } from "../../screens/DetailScreen";

const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home"
        component={HomeScreen}
      />

      <HomeStack.Screen 
        name="List"
        component={ListScreen} 
      />

      <HomeStack.Screen 
        name="Detail"
        component={DetailScreen} 
      />
    </HomeStack.Navigator>
  );
}

export default function RootHomeStackScreen() {
  return (
    <RootStack.Navigator 
      mode="modal"
      headerMode="none"
    >
      <RootStack.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
}
