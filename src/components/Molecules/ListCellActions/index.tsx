import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import IListCellItem from "../../../interfaces/IListCellItem";
import IListCellItemAction from "../../../interfaces/IListCellItemAction";
import sizes from "../../../values/sizes";
import colors from "../../../values/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export interface Props {
  item: IListCellItem;
  actions: IListCellItemAction[];
}

interface ActionItemProps {
  isStart?: boolean;
  item: IListCellItem;
  action: IListCellItemAction;
  index: number;
}

const getActionStyle = (
  isStart: boolean,
  index: number,
  action: IListCellItemAction
) => {
  const offset = sizes.listCellActionWidth * index;
  const style: any = {
    backgroundColor: action.backgroundColor,
  };

  if (isStart) {
    style.left = -1 * offset;
    return [styles.action, style];
  }

  style.right = offset;
  return [styles.action, style];
};

const ActionItem = ({
  isStart = false,
  item,
  action,
  index,
}: ActionItemProps) => {
  const style = getActionStyle(isStart, index, action);

  const onPressAction = () => {
    action.onPress?.(item);
  };

  return (
    <TouchableOpacity style={style} onPress={onPressAction}>
      <FontAwesomeIcon
        style={styles.icon}
        icon={action.iconName}
        color={colors.light.neutralLightest}
      />

      <Text style={styles.label}>{action.label}</Text>
    </TouchableOpacity>
  );
};

const ListCellActions = ({ item, actions }: Props) => {
  const startActions = actions?.filter((action) => action.isStart);
  const endActions = actions?.filter((action) => !action.isStart);

  return (
    <View style={styles.actionContainer}>
      {startActions.map((action, i) => (
        <ActionItem
          key={action.id}
          isStart={true}
          item={item}
          action={action}
          index={i}
        />
      ))}

      {endActions.map((action, i) => (
        <ActionItem
          key={action.id}
          isStart={false}
          item={item}
          action={action}
          index={i}
        />
      ))}
    </View>
  );
};

export default ListCellActions;

const styles = StyleSheet.create({
  label: {
    color: colors.light.neutralLightest,
    fontWeight: "500",
  },
  icon: {
    marginBottom: 10,
  },
  actionContainer: {
    alignItems: "center",
    backgroundColor: colors.light.neutralLightest,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  action: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: sizes.listCellActionWidth,
  },
});
