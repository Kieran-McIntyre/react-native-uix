import { IHeaderActionsMoreOptions } from "../../../interfaces/IHeaderActionsMoreOptions";
import { IDetailMeta } from "../../../interfaces/IDetailMeta";
import { IGroupedTableItem } from "../../../interfaces/IGroupedTableItem";
import { NavigationProp } from "@react-navigation/native";
import { ViewProps } from "react-native";

export interface LayoutDetailScreenProps extends ViewProps {
  navigation: NavigationProp<any>;
  onEdit?: () => void;
  onAdd?: () => void;
  moreOptions?: IHeaderActionsMoreOptions[];
  caption?: string;
  title: string;
  meta?: IDetailMeta[];
  tableItems?: IGroupedTableItem[];
}
