import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IGroupedTableItem {
  id: number | string;
  label: string;
  icon: IconProp;
  count?: number;
  iconBackgroundColor: string;
  onPress: () => void;
}
