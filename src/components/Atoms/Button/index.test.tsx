import React from "react";
import { Button } from ".";
import { render, fireEvent } from "@testing-library/react-native";

jest.mock("../../../hooks/useStyle");

describe("Atoms - Button", () => {
  const title = "A button title";
  const mockPressFn = jest.fn();

  beforeEach(() => {
    mockPressFn.mockReset();
  });

  it("should render title", () => {
    // Arrange.
    const { getByTestId } = render(
      <Button 
        title={title}
        onPress={mockPressFn} 
      />
    );
    const wrapper = getByTestId("button__label");

    // Assert.
    expect(wrapper.props.children).toBe(title);
  });

  it("should be pressable", () => {
    // Arrange.
    const { getByTestId } = render(
      <Button 
        title={title}
        onPress={mockPressFn} 
      />
    );
    const label = getByTestId("button__label");

    // Act.
    fireEvent.press(label);

    // Assert.
    expect(mockPressFn).toHaveBeenCalled();
  });

  it("is disabled > should be disabled", () => {
    // Arrange.
    const { getByTestId } = render(
      <Button 
        title={title}
        onPress={mockPressFn}
        disabled={true}
      />
    );
    const label = getByTestId("button__label");

    // Act.
    fireEvent.press(label);

    // Assert.
    expect(mockPressFn).not.toHaveBeenCalled();
    expect(label.props.style).toContainEqual({ opacity: 0.5 });
  });

  it("is submit type > should be submit type", () => {
    // Arrange.
    const { getByTestId } = render(
      <Button 
        title={title}
        onPress={mockPressFn}
        submit={true}
      />
    );
    const label = getByTestId("button__label");

    // Assert.
    expect(label.props.style).toContainEqual({ fontWeight: "500" });
  });
});
