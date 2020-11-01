import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export interface Props {
  style?: any;
  url?: string;
  firstName?: string;
  lastName?: string;
}

const AvatarImage = ({ url, style }: Props) => {
  return <Image style={[styles.avatar, styles.avatarImage, style]} source={{ uri: url, cache: "force-cache" }} />;
};

const AvatarInitials = ({ style, firstName, lastName }: Props) => {
  const initials: string = [firstName, lastName]
    .filter(Boolean)
    .map((name) => name?.charAt(0).toUpperCase())
    .join("");

  return (
    <View style={[styles.avatar, style]}>
      <Text>{initials}</Text>
    </View>
  );
};

const Avatar = ({ url, firstName, lastName, style }: Props) => {
  if (url) {
    return <AvatarImage style={style} url={url} />;
  }

  return <AvatarInitials style={style} firstName={firstName} lastName={lastName} />;
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
    backgroundColor: "black",
  },

  avatarInitials: {
    backgroundColor: "red",
  },
});
