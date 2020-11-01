import * as React from "react";
import { View, Image, StyleSheet } from "react-native";

const InputChatImage = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://ichef.bbci.co.uk/news/320/cpsprodpb/E571/production/_93273785_c0301025-feizor_yorkshire_dales_uk-spl-1.jpg",
        }}
      />
    </View>
  );
};

export default InputChatImage;

const styles = StyleSheet.create({
  imageContainer: {
    width: 80,
    height: 80,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 4,
  },
});
