export interface IListCellItem {
  id: string;
  heading?: string;
  title: string;
  description?: string;
  detail?: string;
  onPress: () => void;
  // eslint-disable-next-line no-undef
  renderItemStart?: () => JSX.Element;
}
