import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IGroupedTableItem {
  id: number | string;
  label: string;
  icon: IconProp;
  iconBackgroundColor: string;
}

export default IGroupedTableItem;
