import React from "react";
import { GroupedTable } from ".";
import { render } from "@testing-library/react-native";
import { View } from "react-native";

jest.mock("../../../hooks/useStyle");
jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: () => <View />,
}));

describe("Organisms - GroupedTable", () => {
  const title = "A title for a section";
  const items: any = [
    {
      id: 1,
      label: "A label for row 1",
      icon: "tableRowIcon1",
      iconBackgroundColor: "#ff3955",
      onPress: jest.fn(),
    },
    {
      id: 2,
      label: "A label for row 2",
      icon: "tableRowIcon2",
      iconBackgroundColor: "#369956",
      onPress: jest.fn(),
    },
    {
      id: 3,
      label: "A label for row 3",
      icon: "tableRowIcon3",
      iconBackgroundColor: "#245699",
      onPress: jest.fn(),
    },
  ];

  it("renders title", () => {
    // Arrange.
    const { getByTestId } = render(
      <GroupedTable title={title} items={items} />
    );

    const titleElement = getByTestId("section__title");

    // Assert.
    expect(titleElement.props.children).toBe(title);
  });

  it("renders all table rows", () => {
    // Arrange.
    const { getAllByTestId } = render(
      <GroupedTable title={title} items={items} />
    );

    const tableRows = getAllByTestId("tableRow__wrapper");

    // Assert.
    expect(tableRows.length).toBe(3);
  });
});
