import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import IListCellItemAction from "../../../interfaces/IListCellItemAction";
import sizes from "../../../values/sizes";
import colors from "../../../values/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ListCellActionsProps, ActionItemProps } from "./types"
import { styles } from "./styles"

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

const ActionItem: React.FC<ActionItemProps> = ({
  isStart = false,
  item,
  action,
  index,
}) => {
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

export const ListCellActions = ({ item, actions }: ListCellActionsProps) => {
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
