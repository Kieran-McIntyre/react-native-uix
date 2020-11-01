/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import fontAwesome from "./utils/fontAwesome";

fontAwesome;

AppRegistry.registerComponent(appName, () => App);
