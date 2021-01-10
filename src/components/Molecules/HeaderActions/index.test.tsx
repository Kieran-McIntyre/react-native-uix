import React from "react";
import { HeaderActions } from ".";
import { render, fireEvent } from "@testing-library/react-native";
import { View } from "react-native";

jest.mock("../../../hooks/useStyle");
jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: () => <View />,
}));
jest.mock("../../atoms/ActionSheet", () => ({
  ActionSheet: () => <View testID="actionSheet" />,
}));

describe("Molecules - HeaderActions", () => {
  describe("more options", () => {
    it("has more options > should render more options button", () => {
      // Arrange.
      const moreOptions = [
        {
          label: "Option 1",
          onPress: jest.fn(),
        },
      ];

      const { getByTestId, queryByTestId } = render(
        <HeaderActions moreOptions={moreOptions} />
      );

      // Assert.
      const moreOptionsElement = getByTestId("moreOptionsButton");
      expect(queryByTestId("moreOptionsButton")).toBe(moreOptionsElement);
    });

    it("does NOT have more options > should NOT render more options button", () => {
      // Arrange.
      const { queryByTestId } = render(<HeaderActions />);

      // Assert.
      expect(queryByTestId("moreOptionsButton")).toBeNull();
    });

    it("onClick > should show actionsheet", () => {
      // Arrange.
      const moreOptions = [
        {
          label: "Option 1",
          onPress: jest.fn(),
        },
        {
          label: "Option 2",
          onPress: jest.fn(),
        },
      ];

      const { getByTestId, queryByTestId } = render(
        <HeaderActions moreOptions={moreOptions} />
      );

      const button = getByTestId("moreOptionsButton");

      // Assert.
      expect(queryByTestId("actionSheet")).toBeNull();

      // Act.
      fireEvent.press(button);

      // Assert.
      const actionSheetElement = getByTestId("actionSheet");
      expect(queryByTestId("actionSheet")).toBe(actionSheetElement);
    });
  });

  describe("onAdd", () => {
    it("has onAdd > should render onAdd button", () => {
      // Arrange.
      const mockOnAddFn = jest.fn();

      const { getByTestId, queryByTestId } = render(
        <HeaderActions onAdd={mockOnAddFn} />
      );

      // Assert.
      const addButtonElement = getByTestId("addButton");
      expect(queryByTestId("addButton")).toBe(addButtonElement);
    });

    it("does NOT have onAdd > should NOT render onAdd button", () => {
      // Arrange.
      const { queryByTestId } = render(<HeaderActions />);

      // Assert.
      expect(queryByTestId("addButton")).toBeNull();
    });

    it("can click button", () => {
      // Arrange.
      const mockOnAddFn = jest.fn();

      const { getByTestId } = render(<HeaderActions onAdd={mockOnAddFn} />);
      const button = getByTestId("addButton");

      // Assert.
      expect(mockOnAddFn).not.toHaveBeenCalled();

      // Act.
      fireEvent.press(button);

      // Assert.
      expect(mockOnAddFn).toHaveBeenCalled();
    });
  });

  describe("onEdit", () => {
    it("has onEdit > should render onEdit button", () => {
      // Arrange.
      const mockOnEditFn = jest.fn();

      const { getByTestId, queryByTestId } = render(
        <HeaderActions onEdit={mockOnEditFn} />
      );

      // Assert.
      const editButtonElement = getByTestId("editButton");
      expect(queryByTestId("editButton")).toBe(editButtonElement);
    });

    it("does NOT have onEdit > should NOT render onEdit button", () => {
      // Arrange.
      const { queryByTestId } = render(<HeaderActions />);

      // Assert.
      expect(queryByTestId("editButton")).toBeNull();
    });

    it("can click button", () => {
      // Arrange.
      const mockOnEditFn = jest.fn();

      const { getByTestId } = render(<HeaderActions onEdit={mockOnEditFn} />);
      const button = getByTestId("editButton");

      // Assert.
      expect(mockOnEditFn).not.toHaveBeenCalled();

      // Act.
      fireEvent.press(button);

      // Assert.
      expect(mockOnEditFn).toHaveBeenCalled();
    });
  });

  describe("custom actions", () => {
    it("should render children", () => {
      // Arrange.
      const child = <View testID={"child"} />;
      const { getByTestId } = render(<HeaderActions>{child}</HeaderActions>);
      const renderedChild = getByTestId("child");

      // Assert.
      expect(getByTestId("child")).toBe(renderedChild);
    });
  });
});
