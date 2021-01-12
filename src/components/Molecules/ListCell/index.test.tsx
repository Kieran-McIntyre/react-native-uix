import React from "react";
import { ListCell } from ".";
import { fireEvent, render } from "@testing-library/react-native";
import { View } from "react-native";

jest.mock("../../../hooks/useStyle");

describe("Molecules - ListCell", () => {
  let item: any = {};
  const title = "a title!";

  beforeEach(() => {
    item = {
      id: "0",
      title,
      onPress: jest.fn(),
    };
  });

  it("should render title", () => {
    // Arrange.
    const { getByTestId } = render(<ListCell index={0} item={item} />);
    const buttonLabel = getByTestId("listCell__title");

    // Assert.
    expect(buttonLabel.props.children).toBe(title);
  });

  it("can click cell", () => {
    // Arrange.
    const { getByTestId } = render(<ListCell index={0} item={item} />);
    const buttonWrapper = getByTestId("listCell__wrapper");

    // Assert.
    expect(item.onPress).not.toHaveBeenCalled();

    // Act.
    fireEvent.press(buttonWrapper);

    // Assert.
    expect(item.onPress).toHaveBeenCalled();
  });

  describe("index", () => {
    it("index is zero > should NOT render seperator line", () => {
      // Arrange.
      const { queryByTestId } = render(<ListCell index={0} item={item} />);

      // Assert.
      expect(queryByTestId("listCell__separatorLine")).toBeNull();
    });

    it("index is greater than zero > should render seperator line", () => {
      // Arrange.
      const { queryByTestId } = render(<ListCell index={1} item={item} />);

      // Assert.
      expect(queryByTestId("listCell__separatorLine")).not.toBeNull();
    });
  });

  describe("renderItemStart", () => {
    it("has renderItemStart > should render content", () => {
      // Arrange.
      const newItem = {
        ...item,
        renderItemStart: <View testID="itemStart" />,
      };

      const { queryByTestId } = render(<ListCell index={0} item={newItem} />);

      // Assert.
      expect(queryByTestId("itemStart")).not.toBeNull();
    });

    it("does NOT have renderItemStart > should NOT render content", () => {
      // Arrange.
      const newItem = {
        ...item,
        renderItemStart: null,
      };

      const { queryByTestId } = render(<ListCell index={0} item={newItem} />);

      // Assert.
      expect(queryByTestId("itemStart")).toBeNull();
    });
  });

  describe("heading", () => {
    it("has heading > should render heading", () => {
      // Arrange.
      const heading = "A heading for the list cell";
      const newItem = {
        ...item,
        heading,
      };

      const { getByTestId, queryByTestId } = render(
        <ListCell index={0} item={newItem} />
      );
      const headerElement = getByTestId("listCell__heading");

      // Assert.
      expect(queryByTestId("listCell__heading")).not.toBeNull();
      expect(headerElement.props.children).toBe(heading);
    });

    it("does NOT have heading > should NOT render heading", () => {
      // Arrange.
      const newItem = {
        ...item,
        heading: null,
      };

      const { queryByTestId } = render(<ListCell index={0} item={newItem} />);

      // Assert.
      expect(queryByTestId("listCell__heading")).toBeNull();
    });
  });

  describe("description", () => {
    it("has description > should render description", () => {
      // Arrange.
      const description = "A description for the list cell";
      const newItem = {
        ...item,
        description,
      };

      const { getByTestId, queryByTestId } = render(
        <ListCell index={0} item={newItem} />
      );
      const headerElement = getByTestId("listCell__description");

      // Assert.
      expect(queryByTestId("listCell__description")).not.toBeNull();
      expect(headerElement.props.children).toBe(description);
    });

    it("does NOT have description > should NOT render description", () => {
      // Arrange.
      const newItem = {
        ...item,
        description: null,
      };

      const { queryByTestId } = render(<ListCell index={0} item={newItem} />);

      // Assert.
      expect(queryByTestId("listCell__description")).toBeNull();
    });
  });

  describe("detail", () => {
    it("has detail > should render detail", () => {
      // Arrange.
      const detail = "A detail for the list cell";
      const newItem = {
        ...item,
        detail,
      };

      const { getByTestId, queryByTestId } = render(
        <ListCell index={0} item={newItem} />
      );
      const headerElement = getByTestId("listCell__detail");

      // Assert.
      expect(queryByTestId("listCell__detail")).not.toBeNull();
      expect(headerElement.props.children).toBe(detail);
    });

    it("does NOT have detail > should NOT render detail", () => {
      // Arrange.
      const newItem = {
        ...item,
        detail: null,
      };

      const { queryByTestId } = render(<ListCell index={0} item={newItem} />);

      // Assert.
      expect(queryByTestId("listCell__detail")).toBeNull();
    });
  });
});
