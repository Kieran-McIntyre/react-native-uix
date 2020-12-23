import { ISegmentedControlOption } from "../../../interfaces/ISegmentedControlOption";
import { IHeaderActionsMoreOptions } from "../../../interfaces/IHeaderActionsMoreOptions";

export interface LayoutTopLevelScreenProps {
  title: string;
  navigation: any;
  children?: any;
  outerChildren?: any;
  onSearch?: any;
  segmentedControlOptions?: ISegmentedControlOption[];
  onEdit?: any;
  onAdd?: any;
  renderCustomHeaderAction?: any;
  moreOptions?: IHeaderActionsMoreOptions[];
}

export enum contexts {
  FLUID_HEADER = "fluid",
  STICKY_HEADER = "sticky",
}

export interface SectionData {
  context: contexts;
  data: [{ key: number; el: any }];
}
