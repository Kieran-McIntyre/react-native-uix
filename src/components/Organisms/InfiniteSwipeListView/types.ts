import { IListCellItem } from "../../../interfaces/IListCellItem";
import { IListCellItemAction } from "../../../interfaces/IListCellItemAction";
import { ViewProps } from "react-native";

export interface InfiniteSwipeListViewProps extends ViewProps {
  items: IListCellItem[];
  initialCount: number;
  increment: number;
  onNewCount: (newCount: number) => void;
  actions?: IListCellItemAction[];
}
