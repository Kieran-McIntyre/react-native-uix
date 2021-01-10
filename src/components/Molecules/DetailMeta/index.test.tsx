import React from "react";
import { DetailMeta } from ".";
import { render } from "@testing-library/react-native";
import { Text } from "react-native";

jest.mock("../../../hooks/useStyle");
jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: ({ icon }: any) => <Text testID="icon">{icon}</Text>,
}));

describe("Molecules - DetailMeta", () => {
  // set type any to bypass type FontAwesome IconProp
  const meta: any = {
    id: 0,
    icon: "some-icon",
    label: "a label",
  };

  it("should render label", () => {
    // Arrange.
    const { getByTestId } = render(<DetailMeta meta={meta} />);
    const labelElement = getByTestId("label");

    // Assert.
    expect(labelElement.props.children).toBe("a label");
  });

  it("should render icon", () => {
    // Arrange.
    const { getByTestId } = render(<DetailMeta meta={meta} />);
    const iconElement = getByTestId("icon");

    // Assert.
    expect(iconElement.props.children).toBe("some-icon");
  });
});
