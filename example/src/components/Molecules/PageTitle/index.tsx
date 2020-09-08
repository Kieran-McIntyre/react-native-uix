import * as React from "react";
import { View } from "react-native";
import H1 from "../../Atoms/H1";
import Avatar from "../../Atoms/Avatar";
import { StyleSheet } from "react-native";
import InputSearch from "../../Atoms/InputSearch";
import LayoutStickyTitle from "../../Atoms/LayoutStickyTitle";

const FluidSection = () => {
  return (
    <View style={styles.titleContainer}>
      <View>
        <Avatar
          url={"https://avatars2.githubusercontent.com/u/25485732?s=60&v=4"}
          style={styles.avatar}
        />
      </View>

      <H1>Title</H1>

      {/* <InputSearch style={styles.searchBar} /> */}
    </View>
  );
};

const StickySection = () => {
  return <InputSearch style={styles.searchBar} />;
};

const ContentSection = () => {
  return (
    <View style={{ height: 4000, width: "100%", backgroundColor: "green" }} />
  );
};

const PageTitle = () => (
  <LayoutStickyTitle
    fluidSection={FluidSection}
    stickySection={StickySection}
    contentSection={ContentSection}
  />
);

export default PageTitle;

const styles = StyleSheet.create({
  avatar: {
    marginBottom: 16,
  },

  titleContainer: {
    backgroundColor: "purple",
    // width: "100%",
    // paddingHorizontal: 20,
    // paddingBottom: 10,
  },

  searchBar: {
    marginTop: 10,
  },
});
