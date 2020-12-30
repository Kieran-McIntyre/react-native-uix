import React, { useEffect, useState } from "react";
import {
  InfiniteSwipeListView,
  LayoutTopLevelScreen,
  IListCellItem,
  IListCellItemAction,
  useStyle,
} from "react-native-ios-ui";
import faker from "faker";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const ListScreen = ({ navigation }) => {
  const [items, setItems] = useState<IListCellItem[]>([]);
  const [itemCount, setItemCount] = useState(15);
  const { themeSet } = useStyle();

  useEffect(() => {
    const newItems: IListCellItem[] = [...Array(5).keys()].map(i => ({
      id: faker.random.uuid(),
      title: faker.company.companyName(),
      description: faker.name.jobDescriptor(),
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
      onPress: (_item: IListCellItem) => {},
    },
  ];

  return (
    <LayoutTopLevelScreen title={"Restaraunts"} navigation={navigation}>
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
