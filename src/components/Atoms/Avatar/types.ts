import { ImageStyle, ViewStyle } from "react-native";

export interface AvatarImageProps {
  url?: string;
  style?: ImageStyle;
}

export interface AvatarInitialsProps {
  backgroundColor?: string;
  firstName?: string;
  lastName?: string;
  style?: ViewStyle;
}

export type AvatarProps = AvatarImageProps & AvatarInitialsProps;
