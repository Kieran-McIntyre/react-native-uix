import React, { useEffect, useState } from "react";
import {
  InfiniteSwipeListView,
  LayoutTopLevelScreen,
  IListCellItem,
  IListCellItemAction,
  useStyle,
} from "react-native-uix";
import faker from "faker";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const INITIAL_ITEM_COUNT = 15;
const INCREMENT_COUNT = 10;

export const ListScreen = ({ navigation }) => {
  const [items, setItems] = useState<IListCellItem[]>([{
    id: "1",
    title: "The Burger Company",
    description: "Notting Hill, London",
    onPress: () => {
      navigation.navigate("Detail");
    },
  }]);

  const [itemCount, setItemCount] = useState(INITIAL_ITEM_COUNT);
  const { themeSet } = useStyle();

  // mock new items being added to list
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newItems: IListCellItem[] = [...Array(INCREMENT_COUNT).keys()].map(_i => ({
      id: faker.random.uuid(),
      title: faker.company.companyName(),
      description: faker.address.city(),
      onPress: () => {},
    }));

    setItems([...items, ...newItems]);
  }, [itemCount]);

  const actions: IListCellItemAction[] = [
    {
      id: "delete",
      label: "Delete",
      iconName: faTrash,
      backgroundColor: themeSet.red,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onPress: (_item: IListCellItem) => {
        // do something
      },
    },
  ];

  return (
    <LayoutTopLevelScreen 
      title={"Restaraunts"}
      navigation={navigation}
    >
      <InfiniteSwipeListView
        items={items}
        initialCount={itemCount}
        increment={5}
        actions={actions}
        onNewCount={setItemCount}
      />
    </LayoutTopLevelScreen>
  );
};
