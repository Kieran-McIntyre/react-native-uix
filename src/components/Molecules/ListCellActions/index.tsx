import * as React from "react";
import { useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import sizes from "../../../values/sizes";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ListCellActionsProps, ActionItemProps, ItemStyle } from "./types";
import { dynamicStyles } from "./styles";
import { useStyle } from "../../../hooks/useStyle";

const ActionItem: React.FC<ActionItemProps> = ({
  isStart = false,
  item,
  action,
  index,
  styles,
  themeSet,
}) => {
  const style = useMemo(() => {
    const offset = sizes.listCellActionWidth * index;
    const itemStyle: ItemStyle = {
      backgroundColor: action.backgroundColor,
    };

    if (isStart) {
      itemStyle.left = -1 * offset;
      return [styles.action, itemStyle];
    }

    itemStyle.right = offset;
    return [styles.action, itemStyle];
  }, []);

  const onPressAction = () => {
    action.onPress?.(item);
  };

  return (
    <TouchableOpacity style={style} onPress={onPressAction}>
      <FontAwesomeIcon
        style={styles.icon}
        icon={action.iconName}
        color={themeSet.white}
      />

      <Text style={styles.label}>{action.label}</Text>
    </TouchableOpacity>
  );
};

export const ListCellActions = ({
  item,
  actions,
  ...otherProps
}: ListCellActionsProps) => {
  const startActions = actions?.filter((action) => action.isStart);
  const endActions = actions?.filter((action) => !action.isStart);
  const { styles, themeSet } = useStyle(dynamicStyles);

  return (
    <View {...otherProps} style={styles.actionContainer}>
      {startActions.map((action, i) => (
        <ActionItem
          key={action.id}
          isStart={true}
          item={item}
          action={action}
          index={i}
          styles={styles}
          themeSet={themeSet}
        />
      ))}

      {endActions.map((action, i) => (
        <ActionItem
          key={action.id}
          isStart={false}
          item={item}
          action={action}
          index={i}
          styles={styles}
          themeSet={themeSet}
        />
      ))}
    </View>
  );
};
