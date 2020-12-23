import * as React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import { AvatarImageProps } from "./types";

const AvatarImage: React.FC<AvatarImageProps> = ({ url, style }) => {
  return (
    <Image
      testID="typeImage"
      style={[styles.avatar, styles.avatarImage, style]}
      source={{ uri: url, cache: "force-cache" }}
    />
  );
};

const AvatarInitials: React.FC<AvatarImageProps> = ({
  style,
  firstName,
  lastName,
  backgroundColor,
}) => {
  const initials: string = [firstName, lastName]
    .filter(Boolean)
    .map(name => name?.charAt(0).toUpperCase())
    .join("");

  const avatarStyle = {
    ...style,
    backgroundColor: backgroundColor ?? "red"
  };

  return (
    <View testID="typeInitials" style={[styles.avatar, styles.avatarInitals, avatarStyle]}>
      <Text testID="typeInitials__text" style={styles.avatarInitalsText}>{initials}</Text>
    </View>
  );
};

export const Avatar: React.FC<AvatarImageProps> = ({
  url,
  firstName,
  lastName,
  backgroundColor,
  style,
}) => {
  if (url) {
    return <AvatarImage style={style} url={url} />;
  }

  return (
    <AvatarInitials
      style={style}
      firstName={firstName}
      lastName={lastName}
      backgroundColor={backgroundColor}
    />
  );
};
