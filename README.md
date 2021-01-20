# package-name

_package-name_ is an opinionated React Native UI component library that gets you up and running with your app in minutes.

### Features

- Library of iOS-Style UI Components
- Supports both iOS and Android platforms
- Supports Dark Mode out-of-the-box
- Full theme support
- TypeScript support

# Example

- ...

## Installation

## 📦 Installation

```bash
npm install package-name
```

```bash
yarn add package-name
```


This project has several project peer dependencies. To install these quickly, from the terminal in your project directory run the shell script:

```sh
bash node_modules/package-name/install.sh
```

This will install the peer dependencies after choosing your desired package manager.

## 🔨 Usage

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

- [ActionSheet]()
- [Avatar](/src/components/Atoms/Avatar/index.md)
- [Button]()
- [ButtonPrimary]()
- [LayoutDetailSection]()
- [ThemeProvider]()
- [GroupedTable]()
- [InfiniteFlatList]()
- [InfiniteSwipeListView]()
- [LayoutDetailScreen]()
- [LayoutTopLevelScreen]()

### Other Components

- [AnimatedHeaderTitle]()
- [DisclosureIcon]()
- [Label]()
- [Row]()
- [Screen]()
- [SegmentedControl]()
- [DetailMeta]()
- [HeaderActions]()
- [InputSearch]()
- [ListCell]()
- [ListCellActions]()
- [Section]()
- [TableRow]()

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)