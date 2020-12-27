import { IHeaderActionsMoreOptions } from "../../../interfaces/IHeaderActionsMoreOptions";

export interface HeaderActionsProps {
  onEdit?: () => void;
  onAdd?: () => void;
  renderCustomAction?: () => JSX.Element;
  moreOptions?: IHeaderActionsMoreOptions[];
}
