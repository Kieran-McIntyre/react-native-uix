import * as React from "react";
import H1 from "../../Atoms/H1";
import Row from "../../Atoms/Row";
import { StyleSheet } from "react-native";

const LargeTitle = () => (
  <Row style={styles.titleContainer}>
    <H1>Title</H1>
  </Row>
);

export default LargeTitle;

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: "purple",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
