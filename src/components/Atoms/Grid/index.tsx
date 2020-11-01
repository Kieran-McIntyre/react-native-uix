import * as React from "react";
import { View, StyleSheet } from "react-native";
import chunkArray from "../../../utils/chunkArray";

export interface Props {
  items: any[];
  itemWidth: number;
}

const Grid = ({ items, itemWidth }: Props) => {
  const itemRows = chunkArray(items, 2);

  return (
    <View>
      {itemRows.map((row: any, i: number) => {
        <View style={styles.gridRow} key={`${i}-${row[0].id}`}>
          {row.map((item: any) => item())}
        </View>;
      })}
    </View>
  );
};

export default Grid;

const styles = StyleSheet.create({
  gridRow: {
    flexDirection: "row",
    backgroundColor: "red",
  },
});
