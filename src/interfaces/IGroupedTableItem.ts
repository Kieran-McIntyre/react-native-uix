import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IGroupedTableItem {
  id: number | string;
  label: string;
  icon: IconProp;
  count?: number;
  iconBackgroundColor: string;
  onPress: any;
}

export default IGroupedTableItem;
