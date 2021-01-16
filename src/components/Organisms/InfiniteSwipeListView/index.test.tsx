import React from "react";
import { InfiniteSwipeListView } from ".";
import { render, fireEvent } from "@testing-library/react-native";
import { View } from "react-native";

jest.mock("../../../hooks/useStyle");
jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: () => <View />,
}));

describe("Organisms - InfiniteSwipeListView", () => {
  describe("render", () => {
    const initialCount = 20;
    const increment = 5;
    const onNewCount = jest.fn();

    it("has items > should render", () => {
      // Arrange.
      const items = [{ id: "item-1", title: "Item 1", onPress: jest.fn() }];

      const { queryByTestId } = render(
        <InfiniteSwipeListView
          initialCount={initialCount}
          increment={increment}
          onNewCount={onNewCount}
          items={items}
        />
      );

      const element = queryByTestId("swipeListView");

      // Assert.
      expect(element).not.toBeNull();
    });

    it("does NOT have items > should NOT render", () => {
      // Arrange.
      const items: any = [];

      const { queryByTestId } = render(
        <InfiniteSwipeListView
          initialCount={initialCount}
          increment={increment}
          onNewCount={onNewCount}
          items={items}
        />
      );

      const element = queryByTestId("swipeListView");

      // Assert.
      expect(element).toBeNull();
    });
  });

  it("onEndReached > should call onNewCount", () => {
    // Arrange.
    const initialCount = 20;
    const increment = 5;
    const expectedNewCount = 25;

    const onNewCount = jest.fn();
    const items = [{ id: "item-1", title: "Item 1", onPress: jest.fn() }];

    const { getByTestId } = render(
      <InfiniteSwipeListView
        initialCount={initialCount}
        increment={increment}
        onNewCount={onNewCount}
        items={items}
      />
    );

    const swipeListElement = getByTestId("swipeListView");

    // Act.
    fireEvent(swipeListElement, "onEndReached");

    // Assert.
    expect(onNewCount).toHaveBeenCalledWith(expectedNewCount);
  });

  describe("loading", () => {
    it("is fetching new items > should render loading footer", () => {
      // Arrange.
      const initialCount = 1;
      const increment = 1;
      const onNewCount = jest.fn();

      const items = [{ id: "item-1", title: "Item 1", onPress: jest.fn() }];
      const updatedItems = [
        ...items,
        { id: "item2", title: "Item 2", onPress: jest.fn() },
      ];

      const { queryByTestId, rerender } = render(
        <InfiniteSwipeListView
          initialCount={initialCount}
          increment={increment}
          onNewCount={onNewCount}
          items={items}
        />
      );

      // Assert.
      expect(queryByTestId("swipeListView__loading")).toBeNull();

      // Act.
      rerender(
        <InfiniteSwipeListView
          initialCount={initialCount}
          increment={increment}
          onNewCount={onNewCount}
          items={updatedItems}
        />
      );

      // Assert.
      expect(queryByTestId("swipeListView__loading")).not.toBeNull();
    });
  });
});
