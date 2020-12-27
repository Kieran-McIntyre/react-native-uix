import { ISegmentedControlOption } from "../../../interfaces/ISegmentedControlOption";
import { IHeaderActionsMoreOptions } from "../../../interfaces/IHeaderActionsMoreOptions";
import { NavigationProp } from "@react-navigation/native";

export interface LayoutTopLevelScreenProps {
  title: string;
  navigation: NavigationProp<any>;
  children?: React.ReactNode;
  segmentedControlOptions?: ISegmentedControlOption[];
  onEdit?: () => void;
  onAdd?: () => void;
  onSearch?: () => void;
  renderCustomHeaderAction?: () => JSX.Element;
  moreOptions?: IHeaderActionsMoreOptions[];
}

export enum contexts {
  FLUID_HEADER = "fluid",
  STICKY_HEADER = "sticky",
}

export interface SectionData {
  context: contexts;
  data: [{ key: number; el: () => JSX.Element }];
}
