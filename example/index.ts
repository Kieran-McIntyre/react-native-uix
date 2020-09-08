/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import fontAwesome from "./src/utils/fontAwesome";

fontAwesome;

AppRegistry.registerComponent(appName, () => App);
