import React from "react";
import { Section } from ".";
import { render } from "@testing-library/react-native";
import { View } from "react-native";

jest.mock("../../../hooks/useStyle");

describe("Molecules - Section", () => {
  describe("title", () => {
    it("has title > should render title", () => {
      // Arrange.
      const title = "A title for a section";
      const { getByTestId } = render(<Section title={title} />);
      const titleElement = getByTestId("section__title");

      // Assert.
      expect(titleElement.props.children).toBe(title);
    });

    it("does NOT have title > should NOT render title", () => {
      // Arrange.
      const { queryByTestId } = render(<Section />);
      const titleElement = queryByTestId("section__title");

      // Assert.
      expect(titleElement).toBeNull();
    });
  });

  describe("empty state", () => {
    const emptyStateMessage = "An empty state message";

    it("does NOT have emptyStateMessage AND shouldShowEmptyState is true > should NOT render", () => {
      // Arrange.
      const child = <View testID={"child"} />;

      const { queryByTestId, getByTestId } = render(
        <Section shouldShowEmptyState={true}>{child}</Section>
      );
      const emptyStateElement = queryByTestId("section__emptyState");
      const contentElement = queryByTestId("section__content");
      const renderedChild = getByTestId("child");

      // Assert.
      expect(emptyStateElement).toBeNull();
      expect(contentElement).not.toBeNull();

      expect(getByTestId("child")).toBe(renderedChild);
    });

    it("has emptyStateMessage AND shouldShowEmptyState is false > should NOT render", () => {
      // Arrange.
      const child = <View testID={"child"} />;

      const { queryByTestId, getByTestId } = render(
        <Section
          emptyStateMessage={emptyStateMessage}
          shouldShowEmptyState={false}
        >
          {child}
        </Section>
      );

      const emptyStateElement = queryByTestId("section__emptyState");
      const contentElement = queryByTestId("section__content");
      const renderedChild = getByTestId("child");

      // Assert.
      expect(emptyStateElement).toBeNull();
      expect(contentElement).not.toBeNull();

      expect(getByTestId("child")).toBe(renderedChild);
    });

    it("has emptyStateMessage AND shouldShowEmptyState is true > should render", () => {
      // Arrange.
      const child = <View testID={"child"} />;

      const { queryByTestId, getByTestId } = render(
        <Section
          emptyStateMessage={emptyStateMessage}
          shouldShowEmptyState={true}
        >
          {child}
        </Section>
      );

      const emptyStateElement = queryByTestId("section__emptyState");
      const contentElement = queryByTestId("section__content");
      const emptyStateMessageElement = getByTestId(
        "section__emptyState-message"
      );

      // Assert.
      expect(emptyStateElement).not.toBeNull();
      expect(contentElement).toBeNull();

      expect(queryByTestId("child")).toBeNull();
      expect(emptyStateMessageElement.props.children).toBe(emptyStateMessage);
    });
  });
});
