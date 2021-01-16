import React from "react";
import { InfiniteFlatList } from ".";
import { fireEvent, render } from "@testing-library/react-native";
import { View } from "react-native";

jest.mock("../../../hooks/useStyle");

describe("Organisms - InfiniteFlatList", () => {
  describe("render", () => {
    const initialCount = 20;
    const increment = 5;
    const onNewCount = jest.fn();
    const onRenderItem = ({ item }: any) => <View key={item.key} />;

    it("has items > should render", () => {
      // Arrange.
      const data: any = [{ title: "Item 1", key: "item-1" }];

      const { queryByTestId } = render(
        <InfiniteFlatList
          initialCount={initialCount}
          increment={increment}
          onNewCount={onNewCount}
          data={data}
          renderItem={onRenderItem}
        />
      );

      const element = queryByTestId("infiniteFlatList");

      // Assert.
      expect(element).not.toBeNull();
    });

    it("does NOT have items > should NOT render", () => {
      // Arrange.
      const data: any = [];

      const { queryByTestId } = render(
        <InfiniteFlatList
          initialCount={initialCount}
          increment={increment}
          onNewCount={onNewCount}
          data={data}
          renderItem={onRenderItem}
        />
      );

      const element = queryByTestId("infiniteFlatList");

      // Assert.
      expect(element).toBeNull();
    });
  });

  it("onEndReached > should call onNewCount", () => {
    // Arrange.
    const initialCount = 4;
    const increment = 17;
    const expectedNewCount = 21;
    const onNewCount = jest.fn();
    const onRenderItem = ({ item }: any) => <View key={item.key} />;

    const data = [{ title: "Item 1", key: "item-1" }];

    const { getByTestId } = render(
      <InfiniteFlatList
        initialCount={initialCount}
        increment={increment}
        onNewCount={onNewCount}
        data={data}
        renderItem={onRenderItem}
      />
    );

    const flatList = getByTestId("infiniteFlatList");

    // Act.
    fireEvent(flatList, "onEndReached");

    // Assert.
    expect(onNewCount).toHaveBeenCalledWith(expectedNewCount);
  });

  describe("loading", () => {
    const onRenderItem = ({ item }: any) => <View key={item.key} />;

    it("is fetching new items > should render loading footer", () => {
      // Arrange.
      const initialCount = 1;
      const increment = 1;
      const onNewCount = jest.fn();

      const data = [{ title: "Item 1", key: "item-1" }];
      const updatedData = [...data, { title: "Item 2", key: "item-2" }];

      const { queryByTestId, rerender } = render(
        <InfiniteFlatList
          initialCount={initialCount}
          increment={increment}
          onNewCount={onNewCount}
          data={data}
          renderItem={onRenderItem}
        />
      );

      // Assert.
      expect(queryByTestId("infiniteFlatList__loading")).toBeNull();

      // Act.
      rerender(
        <InfiniteFlatList
          initialCount={initialCount}
          increment={increment}
          onNewCount={onNewCount}
          data={updatedData}
          renderItem={onRenderItem}
        />
      );

      // Assert.
      expect(queryByTestId("infiniteFlatList__loading")).not.toBeNull();
    });
  });
});
