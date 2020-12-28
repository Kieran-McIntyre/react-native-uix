import { ViewProps } from "react-native";
import { IListCellItem } from "../../../interfaces/IListCellItem";

export interface ListCellProps extends ViewProps {
  item: IListCellItem;
  index: number;
}
