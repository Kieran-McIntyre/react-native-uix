import { ViewProps } from "react-native";

export interface SectionProps extends ViewProps {
  title?: string;
  emptyStateMessage?: string;
  shouldShowEmptyState?: boolean;
}
