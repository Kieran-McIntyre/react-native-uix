import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../screens/HomeScreen"

const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
        </HomeStack.Navigator>
    );
}

export default function RootHomeStackScreen() {
    return (
        <RootStack.Navigator mode="modal" headerMode="none">
            <RootStack.Screen
                name="Home"
                component={HomeStackScreen}
                options={{ headerShown: false }}
            />
        </RootStack.Navigator>
    );
}
