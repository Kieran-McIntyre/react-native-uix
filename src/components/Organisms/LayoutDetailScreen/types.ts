import { IHeaderActionsMoreOptions } from "../../../interfaces/IHeaderActionsMoreOptions";
import { IDetailMeta } from "../../../interfaces/IDetailMeta";
import { IGroupedTableItem } from "../../../interfaces/IGroupedTableItem";
import { NavigationProp } from "@react-navigation/native";

export interface LayoutDetailScreenProps {
  navigation: NavigationProp<any>;
  children?: React.ReactNode;
  onEdit?: () => void;
  onAdd?: () => void;
  moreOptions?: IHeaderActionsMoreOptions[];

  caption?: string;
  title: string;
  meta?: IDetailMeta[];
  tableItems?: IGroupedTableItem[];
}
