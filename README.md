# package-name

_package-name_ is an opinionated React Native UI component library that gets you up and running with your app in minutes.

You can think of this library like TailwindUI.

### Features

- Library of iOS-Style UI Components
- Supports both iOS and Android platforms
- Supports Dark Mode out-of-the-box
- Full theme support
- TypeScript support

IMAGE_HERE

# Example

- ...

## 📥 Installation

```bash
npm install package-name
```

```bash
yarn add package-name
```

### Requirements


This project has several project peer dependencies. A few of these include:

- [react-navigation]()
- [font-awesome]()
- [react-native-actionsheet]()
- [react-native-community/segmented-control]()

Refer to the project [package.json]() file to view all required peer dependencies. 

#### Quick Installation

To install all of these peer dependencies quickly, from the terminal in your project directory run the shell script:

```sh
bash node_modules/package-name/install.sh
```

This will install the peer dependencies after choosing your desired package manager.

## 🔨 Usage

The best way to see `package-name` in-action, is to take a look at the [example]()!

```javascript
import { ThemeProvider, useStyle, LayoutTopLevelScreen, GroupedTable } from "react-native-ios-ui";

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

## 📦 Components

### Core Components

- [ActionSheet](src/components/Atoms/ActionSheet/index.md)
- [Avatar](/src/components/Atoms/Avatar/index.md)
- [Button](src/components/Atoms/Button/index.md)
- [ButtonPrimary](src/components/Atoms/ButtonPrimary/index.md)
- [LayoutDetailSection](src/components/Organisms/LayoutDetailSection/index.md)
- [ThemeProvider](src/components/Atoms/ThemeProvider/index.md)
- [GroupedTable](src/components/Organisms/GroupedTable/index.md)
- [InfiniteFlatList](src/components/Organisms/InfiniteFlatList/index.md)
- [InfiniteSwipeListView](src/components/Organisms/InfiniteSwipeListView/index.md)
- [LayoutDetailScreen](src/components/Organisms/LayoutDetailScreen/index.md)
- [LayoutTopLevelScreen](src/components/Organisms/LayoutTopLevelScreen/index.md)

### Other Components

- [AnimatedHeaderTitle](src/components/Atoms/ActionSheet/index.md)
- [DisclosureIcon](src/components/Atoms/DisclosureIcon/index.md)
- [Label](src/components/Atoms/Label/index.md)
- [Row](src/components/Atoms/Row/index.md)
- [Screen](src/components/Atoms/Screen/index.md)
- [SegmentedControl](src/components/Atoms/SegmentedControl/index.md)
- [DetailMeta](src/components/Molecules/DetailMeta/index.md)
- [HeaderActions](src/components/Molecules/HeaderActions/index.md)
- [InputSearch](src/components/Molecules/InputSearch/index.md)
- [ListCell](src/components/Molecules/ListCell/index.md)
- [ListCellActions](src/components/Molecules/ListCellActions/index.md)
- [Section](src/components/Molecules/Section/index.md)
- [TableRow](src/components/Molecules/TableRow/index.md)

## 🎨 Custom Styling

### _ThemeProvider_ component

### _useStyle_ hook

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)