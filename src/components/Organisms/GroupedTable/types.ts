import { ViewProps } from "react-native";
import { IGroupedTableItem } from "../../../interfaces/IGroupedTableItem";

export interface GroupedTableProps extends ViewProps {
  title: string;
  items: IGroupedTableItem[];
}
