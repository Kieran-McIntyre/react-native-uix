import * as React from "react";
// import { useState, useEffect, useRef } from "react";
import { FlatList } from "react-native";
import ListCell from "../../Molecules/ListCell";
import IListCellItem from "../../../interfaces/IListCellItem";

export interface Props {
  items: IListCellItem[];
}

const InfiniteList = ({ items }: Props) => {
  const onRenderItem = () => {
    return ListCell;
  };

  return (
    <FlatList
      data={items}
      renderItem={onRenderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default InfiniteList;
