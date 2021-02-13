import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RootHomeStackScreen from "./RootHomeStackScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome as faHomeSolid,
  faBell as faBellSolid,
  faCog as faCogSolid,
} from "@fortawesome/free-solid-svg-icons";
import DummyScreen from "../screens/DummyScreen";

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ color, route, size }) => {
  let iconName;

  switch (route.name) {
    case "Home":
      iconName = faHomeSolid;
      break;
    case "Notifications":
      iconName = faBellSolid;
      break;
    case "Settings":
      iconName = faCogSolid;
      break;
  }

  return (
    <FontAwesomeIcon 
      icon={iconName}
      color={color}
      size={size} 
    />
  );
};

export default function AppNavigation() {
  return (
    <>
      <Tab.Navigator  
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon
              route={route}
              size={size}
              color={color}
            />
          ),
        })}
      >
        <Tab.Screen 
          name="Home"
          component={RootHomeStackScreen}
        />

        <Tab.Screen 
          name="Notifications"
          component={DummyScreen}
        />

        <Tab.Screen 
          name="Settings"
          component={DummyScreen}
        />
      </Tab.Navigator>
    </>
  );
}
