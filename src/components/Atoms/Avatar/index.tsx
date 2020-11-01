import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../../../values/colors";

export interface Props {
  style?: any;
  url?: string;
  backgroundColor?: string;
  firstName?: string;
  lastName?: string;
}

const AvatarImage = ({ url, style }: Props) => {
  return (
    <Image
      style={[styles.avatar, styles.avatarImage, style]}
      source={{ uri: url, cache: "force-cache" }}
    />
  );
};

const AvatarInitials = ({
  style,
  firstName,
  lastName,
  backgroundColor,
}: Props) => {
  const initials: string = [firstName, lastName]
    .filter(Boolean)
    .map((name) => name?.charAt(0).toUpperCase())
    .join("");

  const avatarStyle = {
    ...style,
    backgroundColor: backgroundColor ?? colors.light.neutralDark,
  };

  return (
    <View style={[styles.avatar, styles.avatarInitals, avatarStyle]}>
      <Text style={styles.avatarInitalsText}>{initials}</Text>
    </View>
  );
};

const Avatar = ({
  url,
  firstName,
  lastName,
  backgroundColor,
  style,
}: Props) => {
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

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },

  avatarImage: {
    resizeMode: "cover",
  },

  avatarInitals: {
    alignItems: "center",
    justifyContent: "center",
  },

  avatarInitalsText: {
    color: "white",
  },
});
