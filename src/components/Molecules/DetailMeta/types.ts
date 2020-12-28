import { ViewProps } from "react-native";
import { IDetailMeta } from "../../../interfaces/IDetailMeta";

export interface DetailMetaProps extends ViewProps {
  meta: IDetailMeta;
  index?: number;
}
