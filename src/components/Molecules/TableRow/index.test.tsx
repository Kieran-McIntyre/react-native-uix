import React from "react";
import { TableRow } from ".";
import { fireEvent, render } from "@testing-library/react-native";
import { View } from "react-native";

jest.mock("../../../hooks/useStyle");
jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: ({ icon }: any) => <View testID={`faIcon__${icon}`} />,
}));

describe("Molecules - TableRow", () => {
  const mockOnPressFn = jest.fn();
  const item: any = {
    id: 1,
    label: "A label",
    icon: "tableRowIcon",
    count: 2,
    iconBackgroundColor: "#ff3955",
    onPress: mockOnPressFn,
  };

  beforeEach(() => {
    mockOnPressFn.mockReset();
  });

  it("can click row", () => {
    // Arrange.
    const index = 0;

    const { getByTestId } = render(<TableRow index={index} item={item} />);
    const wrapperElement = getByTestId("tableRow__wrapper");

    // Assert.
    expect(mockOnPressFn).not.toHaveBeenCalled();

    // Act.
    fireEvent.press(wrapperElement);

    // Assert.
    expect(mockOnPressFn).toHaveBeenCalled();
  });

  describe("count", () => {
    const index = 0;

    it("count is greater than zero > should render count", () => {
      // Arrange.
      const count = 82;
      const newItem = {
        ...item,
        count,
      };

      const { getByTestId } = render(<TableRow index={index} item={newItem} />);
      const countElement = getByTestId("tableRow__count");

      // Assert.
      expect(countElement.props.children).toBe(count);
    });

    it("count is zero > should render count", () => {
      // Arrange.
      const count = 0;
      const newItem = {
        ...item,
        count,
      };

      const { getByTestId } = render(<TableRow index={index} item={newItem} />);
      const countElement = getByTestId("tableRow__count");

      // Assert.
      expect(countElement.props.children).toBe(count);
    });

    it("count is null > should NOT render count", () => {
      // Arrange.
      const count = null;
      const newItem = {
        ...item,
        count,
      };

      const { queryByTestId } = render(
        <TableRow index={index} item={newItem} />
      );
      const countElement = queryByTestId("tableRow__count");

      // Assert.
      expect(countElement).toBeNull();
    });
  });

  describe("index", () => {
    it("index is zero > should NOT render seperator line", () => {
      // Arrange.
      const index = 0;

      const { queryByTestId } = render(<TableRow index={index} item={item} />);
      const seperatorElement = queryByTestId("tableRow__separatorLine");

      // Assert.
      expect(seperatorElement).toBeNull();
    });

    it("index is greater than zero > should render seperator line", () => {
      // Arrange.
      const index = 1;

      const { queryByTestId } = render(<TableRow index={index} item={item} />);
      const seperatorElement = queryByTestId("tableRow__separatorLine");

      // Assert.
      expect(seperatorElement).not.toBeNull();
    });
  });
});
