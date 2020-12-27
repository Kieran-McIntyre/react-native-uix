import React from "react";
import { Row } from ".";
import { render } from "@testing-library/react-native";

describe("Atoms - Row", () => {
  it("is centred > should apply centred style", () => {
    // Arrange.
    const expectedStyle = {
      justifyContent: "center",
    };

    const { getByTestId } = render(<Row centred />);
    const wrapper = getByTestId("row");

    // Assert.
    expect(wrapper.props.style).toContainEqual(expectedStyle);
  });

  it("is between > should apply between style", () => {
    // Arrange.
    const expectedStyle = {
      justifyContent: "space-between",
    };

    const { getByTestId } = render(<Row between />);
    const wrapper = getByTestId("row");

    // Assert.
    expect(wrapper.props.style).toContainEqual(expectedStyle);
  });

  it("is around > should apply around style", () => {
    // Arrange.
    const expectedStyle = {
      justifyContent: "space-around",
    };

    const { getByTestId } = render(<Row around />);
    const wrapper = getByTestId("row");

    // Assert.
    expect(wrapper.props.style).toContainEqual(expectedStyle);
  });
});
