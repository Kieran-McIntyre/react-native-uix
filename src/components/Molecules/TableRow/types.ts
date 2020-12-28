import { TouchableHighlightProps } from "react-native";
import { IGroupedTableItem } from "../../../interfaces/IGroupedTableItem";

export interface TableRowProps extends TouchableHighlightProps {
  item: IGroupedTableItem;
  index: number;
}
