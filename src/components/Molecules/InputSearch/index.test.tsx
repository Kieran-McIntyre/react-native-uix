import React from "react";
import { InputSearch } from ".";
import { render, fireEvent } from "@testing-library/react-native";
import { View } from "react-native";
import { timeTravel, setupTimeTravel } from "../../../test/timeTravel";

jest.mock("../../../hooks/useStyle");
jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: () => <View />,
}));

describe("Molecules - InputSearch", () => {
  const BUTTON_WIDTH = 100;
  const ANIMATION_DURATION = 300;

  it("can set placeholder", () => {
    // Arrange.
    const placeholder = "text for a placeholder";

    const { getByTestId } = render(<InputSearch placeholder={placeholder} />);
    const textInput = getByTestId("textInput");

    // Assert.
    expect(textInput.props.placeholder).toBe(placeholder);
  });

  describe("clear", () => {
    it("input does NOT have value > should NOT render clear icon", () => {
      // Arrange.
      const { queryByTestId } = render(<InputSearch />);

      // Assert.
      expect(queryByTestId("buttonClear")).toBeNull();
    });

    it("input has value > should render clear icon", () => {
      // Arrange.
      const { getByTestId, queryByTestId } = render(<InputSearch />);
      const textInput = getByTestId("textInput");

      // Act.
      fireEvent.changeText(textInput, "a value");

      // Assert.
      expect(queryByTestId("buttonClear")).not.toBeNull();
    });

    it("can click clear icon to clear input", () => {
      // Arrange.
      const valueToType = "a value to type";

      const mockOnChangeTextFn = jest.fn();
      const { getByTestId } = render(
        <InputSearch onChangeText={mockOnChangeTextFn} />
      );

      // Act. // type input value
      const textInput = getByTestId("textInput");
      fireEvent.changeText(textInput, valueToType);

      // Assert.
      expect(mockOnChangeTextFn).toHaveBeenLastCalledWith(valueToType);

      // Act. // click clear button
      const buttonClear = getByTestId("buttonClear");
      fireEvent.press(buttonClear);

      // Assert.
      expect(mockOnChangeTextFn).toHaveBeenLastCalledWith("");
    });
  });

  describe("cancel", () => {
    it("can click input to focus input > cancel button shows", () => {
      // Arrange.
      setupTimeTravel();

      const mockOnFocusFn = jest.fn();
      const { getByTestId } = render(<InputSearch onFocus={mockOnFocusFn} />);

      const textInput = getByTestId("textInput");
      const cancelButton = getByTestId("buttonCancelWrapper");

      // mock layout event
      fireEvent(cancelButton, "layout", {
        nativeEvent: { layout: { width: BUTTON_WIDTH } },
      });

      // Assert.
      expect(mockOnFocusFn).not.toHaveBeenCalled();
      expect(cancelButton.props.style).toEqual({
        position: "absolute",
        right: -1 * BUTTON_WIDTH,
        opacity: 0,
      });

      // Act.
      fireEvent(textInput, "focus");

      // Assert.
      timeTravel(ANIMATION_DURATION); // wait until animation has completed

      expect(mockOnFocusFn).toHaveBeenCalled();
      expect(cancelButton.props.style).toEqual({
        position: "absolute",
        right: 0,
        opacity: 1,
      });
    });

    it("can click cancel button to end session", () => {
      // Arrange.
      const mockOnChangeTextFn = jest.fn();

      const { getByTestId } = render(
        <InputSearch onChangeText={mockOnChangeTextFn} />
      );

      // Act.
      const cancelButton = getByTestId("buttonCancel");
      fireEvent.press(cancelButton);

      // Assert.
      expect(mockOnChangeTextFn).toHaveBeenLastCalledWith("");
    });
  });

  describe("blur", () => {
    it("input has value > blur > does NOT end session", () => {
      // Arrange.
      setupTimeTravel();

      const valueToType = "a value to type";
      const mockOnChangeTextFn = jest.fn();

      const { getByTestId } = render(
        <InputSearch onChangeText={mockOnChangeTextFn} />
      );

      const cancelButton = getByTestId("buttonCancelWrapper");
      const searchBar = getByTestId("searchBarWrapper");
      const textInput = getByTestId("textInput");

      // mock layout event
      fireEvent(cancelButton, "layout", {
        nativeEvent: { layout: { width: BUTTON_WIDTH } },
      });

      // Act.
      // focus and type input value
      fireEvent(textInput, "focus");
      fireEvent.changeText(textInput, valueToType);

      // blur input
      fireEvent(textInput, "blur");

      // Assert.
      // wait until animation has completed
      timeTravel(ANIMATION_DURATION);

      expect(searchBar.props.style).toEqual(
        expect.objectContaining({ marginRight: BUTTON_WIDTH })
      );

      expect(mockOnChangeTextFn).toHaveBeenLastCalledWith(valueToType);
    });

    it("input does NOT have value > blur > should end session", () => {
      // Arrange.
      setupTimeTravel();
      const mockOnChangeTextFn = jest.fn();

      const { getByTestId } = render(
        <InputSearch onChangeText={mockOnChangeTextFn} />
      );

      const cancelButton = getByTestId("buttonCancelWrapper");
      const searchBar = getByTestId("searchBarWrapper");
      const textInput = getByTestId("textInput");

      // mock layout event
      fireEvent(cancelButton, "layout", {
        nativeEvent: { layout: { width: BUTTON_WIDTH } },
      });

      // Act.
      // focus input
      fireEvent(textInput, "focus");

      // blur input
      fireEvent(textInput, "blur");

      // Assert.
      // wait until animation has completed
      timeTravel(ANIMATION_DURATION);

      expect(searchBar.props.style).toEqual(
        expect.objectContaining({ marginRight: 0 })
      );
    });
  });
});
