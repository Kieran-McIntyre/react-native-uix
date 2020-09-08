import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import HomeScreen from "./screens/HomeScreen";

const Tab = createBottomTabNavigator();
const JobStack = createStackNavigator();
const ActivityStack = createStackNavigator();

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function JobStackScreen() {
  return (
    <JobStack.Navigator>
      <JobStack.Screen name="Home" component={HomeScreen} />
      <JobStack.Screen name="Details" component={DetailsScreen} />
    </JobStack.Navigator>
  );
}

function ActivityStackScreen() {
  return (
    <ActivityStack.Navigator>
      <ActivityStack.Screen name="Home" component={HomeScreen} />
      <ActivityStack.Screen name="Details" component={DetailsScreen} />
    </ActivityStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesomeIcon icon="search" />;
          },
        })}
      >
        <Tab.Screen name="Home" component={JobStackScreen} />
        <Tab.Screen
          name="Activity"
          component={ActivityStackScreen}
          options={{ tabBarBadge: 3 }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
