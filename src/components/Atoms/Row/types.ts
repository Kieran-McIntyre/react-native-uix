import { ViewStyle } from "react-native";

export interface RowProps {
    centred?: boolean;
    between?: boolean;
    around?: boolean;
    style?: ViewStyle;
    children?: React.ReactNode
}