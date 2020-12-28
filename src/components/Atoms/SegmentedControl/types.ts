import { SegmentedControlProps as NativeSegmentedControlProps } from "@react-native-community/segmented-control";
import { ViewStyle } from "react-native";
import { ISegmentedControlOption } from "../../../interfaces/ISegmentedControlOption";

export interface SegmentedControlProps extends NativeSegmentedControlProps {
  options: ISegmentedControlOption[];
  style?: ViewStyle;
  selectedIndex?: number;
  testID?: string;
}
