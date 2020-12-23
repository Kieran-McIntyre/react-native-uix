import { IListCellItem } from "./IListCellItem";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IListCellItemAction {
  id: string;
  label: string;
  iconName: IconProp;
  backgroundColor: string;
  onPress: (item: IListCellItem) => void;
  isStart?: boolean;
}

