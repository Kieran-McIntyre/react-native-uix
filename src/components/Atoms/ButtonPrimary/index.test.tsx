import React from "react";
import { ButtonPrimary } from ".";
import { render, fireEvent } from "@testing-library/react-native";

jest.mock("../../../hooks/useStyle");

describe("Atoms - ButtonPrimary", () => {
  const label = "a label for the button";

  it("renders label", () => {
    // Arrange.
    const { getByTestId } = render(<ButtonPrimary label={label} />);
    const buttonLabel = getByTestId("button__label");

    // Assert.
    expect(buttonLabel.props.children).toBe(label);
  });

  it("can click button", () => {
    // Arrange.
    const mockOnPressFn = jest.fn();

    const { getByTestId } = render(
      <ButtonPrimary label={label} onPress={mockOnPressFn} />
    );
    const touchable = getByTestId("button__touchable");

    // Act.
    fireEvent.press(touchable);

    // Assert.
    expect(mockOnPressFn).toHaveBeenCalled();
  });

  it("applies correct style spacing", () => {
    // Arrange.
    const numberOfButtons = 2;
    const index = 0;

    const { getByTestId } = render(
      <ButtonPrimary
        label={label}
        index={index}
        numberOfButtons={numberOfButtons}
      />
    );

    const buttonWrapper = getByTestId("button");

    // Assert.
    expect(buttonWrapper.props.style).toEqual([
      { flex: 1 },
      { marginLeft: 0, marginRight: 8 },
    ]);
  });
});
