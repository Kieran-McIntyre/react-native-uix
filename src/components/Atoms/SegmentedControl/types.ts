import { ViewStyle } from "react-native";
import { ISegmentedControlOption } from "../../../interfaces/ISegmentedControlOption";

export interface SegmentedControlProps {
    options: ISegmentedControlOption[];
    style?: ViewStyle;
    selectedIndex?: number;
}