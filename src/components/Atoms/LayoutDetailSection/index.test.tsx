import React from "react";
import { LayoutDetailSection } from ".";
import { render } from "@testing-library/react-native";
import { View } from "react-native";

jest.mock("../../../hooks/useStyle");

describe("Atoms - LayoutDetailSection", () => {
  it("has title > should render title", () => {
    // Arrange.
    const title = "A title for the componenent";
    const { getByTestId, queryByTestId } = render(
      <LayoutDetailSection title={title} />
    );

    const titleElement = getByTestId("layoutDetailSection__label");

    // Assert.
    expect(queryByTestId("layoutDetailSection__label")).not.toBeNull();
    expect(titleElement.props.children).toBe(title);
  });

  it("does NOT have title > should NOT render title", () => {
    // Arrange.
    const { queryByTestId } = render(<LayoutDetailSection />);

    // Assert.
    expect(queryByTestId("layoutDetailSection__label")).toBeNull();
  });

  it("should render content", () => {
    // Arrange.
    const child = <View testID={"child"} />;
    const { getByTestId } = render(
      <LayoutDetailSection>{child}</LayoutDetailSection>
    );
    const renderedChild = getByTestId("child");

    // Assert.
    expect(getByTestId("child")).toBe(renderedChild);
  });
});
