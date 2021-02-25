# react-native-uix

_react-native-uix_ is an opinionated React Native UI component library that gets you up and running in minutes.

![package_name](https://media4.giphy.com/media/vG6Kknk22tCBa25kcM/giphy.gif)

### Features

- Library of iOS-Style UI Components
- Supports both iOS and Android platforms
- Supports Dark Mode out-of-the-box
- Full custom theme support
- TypeScript support

## 📥 Installation

Using npm:
```bash
npm install react-native-uix
```

or with yarn:
```bash
yarn add react-native-uix
```

### Requirements


This project has several project peer dependencies. A few of these include:

- [react-navigation](https://github.com/react-navigation/react-navigation)
- [font-awesome](https://github.com/FortAwesome/Font-Awesome)
- [react-native-actionsheet](https://github.com/beefe/react-native-actionsheet)
- [react-native-community/segmented-control](https://www.npmjs.com/package/@react-native-community/segmented-control)

Refer to the project [package.json](https://github.com/Kieran-McIntyre/react-native-uix/blob/master/package.json) file to view all required peer dependencies. 

#### Quick Installation

To install all of these peer dependencies quickly, from the terminal in your project directory run the shell script:

```sh
bash node_modules/react-native-uix/install.sh
```

This will install the peer dependencies after choosing your desired package manager.

## 🔨 Usage

The best way to see `react-native-uix` in-action, is to take a look at the [example](https://github.com/Kieran-McIntyre/react-native-uix/tree/master/example)!

```javascript
import { ThemeProvider, useStyle, LayoutTopLevelScreen, GroupedTable } from "react-native-uix";

function HomeScreen() {
    const { themeSet } = useStyle();

    const tableItems = [
        {
            id: 0,
            label: "Hotels",
            count: 2,
            iconBackgroundColor: themeSet.red,
            icon: faBuilding,
            onPress: () => {},
        },
        {
            id: 1,
            label: "Restaraunts",
            count: 2,
            iconBackgroundColor: themeSet.teal,
            icon: faUtensils,
            onPress: () => {},
        },
        {
            id: 2,
            label: "Universities",
            count: 3,
            iconBackgroundColor: themeSet.yellow,
            icon: faUniversity,
            onPress: () => {},
        },
    ];

    return (
        <LayoutTopLevelScreen title="Home" navigation={navigation}>
            <GroupedTable title="Places" items={tableItems} />
        </LayoutTopLevelScreen>
    );
}

function App() {
    const HomeStack = createStackNavigator();

    return (
        <ThemeProvider>
            <HomeStack.Navigator>
                <HomeStack.Screen name="Home" component={HomeScreen} />
            </HomeStack.Navigator>
        </ThemeProvider>
    );
}

```

## 🎨 Custom Styling

Customising the theme of your app can be achieved using the `ThemeProvider` component. You can determine the colours for both light and dark mode.

| Light | Dark |
| --- | --- |
| ![light theme](https://i.ibb.co/F85y3Sm/home-light.png) | ![dark theme](https://i.ibb.co/VWk9hSz/home-dark.png) 

### _ThemeProvider_ component

#### Usage

```javascript
import { ThemeProvide } from "react-native-uix";

const App: React.FC = () => {
  const theme = {
    light: {
      textPrimary: "#345000",
      tint: "#2188ff",
      systemBackground: "#ff0000"
    },
    dark: {
      textPrimary: "#345088",
      tint: "#388bfd",
      systemBackground: "#ff0055"
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <AppNavigation />
    </ThemeProvider>
  );
};

```

You can customise any of the colors below for your theme. If a color is not provided, the corresponding color in the `DEFAULT_THEME` is used.

```javascript
tint,
textPrimary,
textSecondary
textTertiary,
textQuarternary,
systemBackground,
secondarySystemBackground,
tertiarySystemBackground,
separator,
blue,
green,
indigo,
orange,
pink,
purple,
red,
teal,
yellow,
white,
```

### _useStyle_ hook

If you are making your own custom components and would like to make use of your custom theme, whilst supporting dark mode, this is where the `useStyle` hook becomes useful.

#### Usage

```javascript
import { useStyle } from "react-native-uix";

const MyComponent = () => {
    const dynamicStyles = (theme) => {
        return {
            container: {
                width: 20,
                height: 20,
                backgroundColor: theme.systemBackground,
            }
        }
    }

    const { styles } = useStyle(dynamicStyles);
  
    return (
      <View style={styles.container} />
    );
  };
}
```

## Roadmap

- Documentation for individual components
- JSON form component

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)