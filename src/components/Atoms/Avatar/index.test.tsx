import React from "react";
import { Avatar } from ".";
import { render } from "@testing-library/react-native";

describe("Atoms - Avatar", () => {
  describe("image type", () => {
    it("has url > should render image type", () => {
      // Arrange.
      const url = "a mock url";
      const { getByTestId, queryByTestId } = render(<Avatar url={url} />);
      const wrapper = getByTestId("typeImage");

      // Assert.
      expect(queryByTestId("typeImage")).toBe(wrapper);
      expect(queryByTestId("typeInitials")).toBeNull();
    });
  });

  describe("initials type", () => {
    const firstName = "John";
    const lastName = "Smith";

    it("has NO url > should render initials type", () => {
      // Arrange.
      const { getByTestId, queryByTestId } = render(
        <Avatar firstName={firstName} lastName={lastName} />
      );
      const wrapper = getByTestId("typeInitials");

      // Assert.
      expect(queryByTestId("typeInitials")).toBe(wrapper);
      expect(queryByTestId("typeImage")).toBeNull();
    });

    it("should display initials", () => {
      // Arrange.
      const expectedInitials = "JS";

      const { getByTestId } = render(
        <Avatar firstName={firstName} lastName={lastName} />
      );
      const textWrapper = getByTestId("typeInitials__text");

      // Assert.
      expect(textWrapper.props.children).toBe(expectedInitials);
    });

    it("has provided background color > should use background color", () => {
      // Arrange.
      const backgroundColor = "#366bff";

      const { getByTestId } = render(
        <Avatar
          firstName={firstName}
          lastName={lastName}
          backgroundColor={backgroundColor}
        />
      );
      const wrapper = getByTestId("typeInitials");

      // Assert.
      expect(wrapper.props.style).toContainEqual({
        backgroundColor: "#366bff",
      });
    });

    it("has NOT provided background color > should use default background color", () => {
      // Arrange.
      const defaultBackgroundColor = "red";

      const { getByTestId } = render(
        <Avatar firstName={firstName} lastName={lastName} />
      );
      const wrapper = getByTestId("typeInitials");

      // Assert.
      expect(wrapper.props.style).toContainEqual({
        backgroundColor: defaultBackgroundColor,
      });
    });
  });
});
