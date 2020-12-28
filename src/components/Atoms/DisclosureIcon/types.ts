import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ViewProps } from "react-native";

export interface DisclosureIconProps extends ViewProps {
  icon: IconProp;
  backgroundColor: string;
}
