import { ViewStyle } from "react-native";

export interface SectionProps {
    children?: React.ReactNode;
    title?: string;
    emptyStateMessage?: string;
    shouldShowEmptyState?: boolean;
    style?: ViewStyle;
}
