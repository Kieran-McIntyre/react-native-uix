interface IListCellItem {
  id: string;
  heading?: string;
  title: string;
  description?: string;
  detail?: string;
  onPress: any;
  renderItemStart?: any;
}

export default IListCellItem;
