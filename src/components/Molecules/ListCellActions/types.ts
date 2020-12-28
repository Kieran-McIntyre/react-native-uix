import { StyleSheet, ViewProps } from "react-native";
import { IListCellItem } from "../../../interfaces/IListCellItem";
import { IListCellItemAction } from "../../../interfaces/IListCellItemAction";
import { IThemeSchema } from "../../../interfaces/IThemeSchema";

export interface ListCellActionsProps extends ViewProps {
  item: IListCellItem;
  actions: IListCellItemAction[];
}

export interface ActionItemProps {
  isStart?: boolean;
  item: IListCellItem;
  action: IListCellItemAction;
  index: number;
  styles: StyleSheet.NamedStyles<any>;
  themeSet: IThemeSchema;
}

export interface ItemStyle {
  backgroundColor: string;
  left?: number;
  right?: number;
}
