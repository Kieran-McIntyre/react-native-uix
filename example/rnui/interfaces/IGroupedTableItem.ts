import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IGroupedTableItem {
  id: number | string;
  label: string;
  icon: IconProp;
  iconBackgroundColor: string;
  onPress: any;
}

export default IGroupedTableItem;
