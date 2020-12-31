import { ReactNode } from "react";
import { ISegmentedControlOption } from "../../../interfaces/ISegmentedControlOption";
import { IHeaderActionsMoreOptions } from "../../../interfaces/IHeaderActionsMoreOptions";
import { NavigationProp } from "@react-navigation/native";
import { Animated, SectionListProps } from "react-native";

export interface LayoutTopLevelScreenProps
  extends Animated.WithAnimatedValue<SectionListProps<any>> {
  title: string;
  navigation: NavigationProp<any>;
  children?: ReactNode;
  segmentedControlOptions?: ISegmentedControlOption[];
  onEdit?: () => void;
  onAdd?: () => void;
  onSearch?: () => void;
  renderCustomHeaderAction?: () => JSX.Element;
  moreOptions?: IHeaderActionsMoreOptions[];
  searchPlaceholder?: string;
}

export interface SectionData {
  context: contexts;
  data: [{ key: number; el: () => JSX.Element }];
}

// eslint-disable-next-line no-shadow
export enum contexts {
  FLUID_HEADER = "fluid",
  STICKY_HEADER = "sticky",
}
