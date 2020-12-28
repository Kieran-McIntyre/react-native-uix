import { ViewProps } from "react-native";
import { IHeaderActionsMoreOptions } from "../../../interfaces/IHeaderActionsMoreOptions";

export interface HeaderActionsProps extends ViewProps {
  onEdit?: () => void;
  onAdd?: () => void;
  renderCustomAction?: () => JSX.Element;
  moreOptions?: IHeaderActionsMoreOptions[];
}
