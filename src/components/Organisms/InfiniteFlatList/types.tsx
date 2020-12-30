import { FlatListProps } from "react-native";

export interface InfiniteFlatListProps extends FlatListProps<any> {
  initialCount: number;
  increment: number;
  onNewCount: (newCount: number) => void;
}
