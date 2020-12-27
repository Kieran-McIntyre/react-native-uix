export interface IListCellItem {
  id: string;
  heading?: string;
  title: string;
  description?: string;
  detail?: string;
  onPress: () => void;
  renderItemStart?: () => JSX.Element;
}
