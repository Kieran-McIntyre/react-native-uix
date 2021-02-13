import React from "react";
import { LayoutDetailScreen } from ".";
import { render } from "@testing-library/react-native";
import { View } from "react-native";

jest.mock("../../../hooks/useStyle");
jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: () => <View />,
}));

describe("Organisms - LayoutDetailScreen", () => {
  const title = "A title!";
  const navigation: any = {
    setOptions: jest.fn(),
  };

  beforeEach(() => {
    navigation.setOptions.mockReset();
  });

  it("should render title", () => {
    // Arrange.
    const { getByTestId } = render(
      <LayoutDetailScreen 
        navigation={navigation}
        title={title} 
      />
    );
    const titleElement = getByTestId("layoutDetail__title");

    // Assert.
    expect(titleElement.props.children).toBe(title);
  });

  describe("caption", () => {
    it("has caption > should render caption", () => {
      // Arrange.
      const caption = "A caption!";

      const { getByTestId } = render(
        <LayoutDetailScreen
          navigation={navigation}
          title={title}
          caption={caption}
        />
      );
      const captionElement = getByTestId("layoutDetail__caption");

      // Assert.
      expect(captionElement.props.children).toBe(caption);
    });

    it("does NOT have caption > should NOT render caption", () => {
      // Arrange.
      const { queryByTestId } = render(
        <LayoutDetailScreen 
          navigation={navigation}
          title={title}
        />
      );

      // Assert.
      expect(queryByTestId("layoutDetail__caption")).toBeNull();
    });
  });

  describe("meta", () => {
    it("has meta > should render meta", () => {
      // Arrange.
      const meta: any = [
        {
          id: 1,
          label: "Meta 1",
          icon: "metaIcon1",
        },
        {
          id: 2,
          label: "Meta 2",
          icon: "metaIcon2",
        },
      ];

      const { getAllByTestId, queryByTestId } = render(
        <LayoutDetailScreen 
          navigation={navigation}
          title={title}
          meta={meta}
        />
      );
      const metaElements = getAllByTestId("detailMeta");

      // Assert.
      expect(queryByTestId("layoutDetail__meta")).not.toBeNull();
      expect(metaElements.length).toBe(2);
    });

    it("does NOT have meta > should NOT render meta", () => {
      // Arrange.
      const { queryByTestId } = render(
        <LayoutDetailScreen 
          navigation={navigation}
          title={title}
        />
      );

      // Assert.
      expect(queryByTestId("layoutDetail__meta")).toBeNull();
    });
  });

  describe("tableItems", () => {
    it("has tableItems > should render table", () => {
      // Arrange.
      const tableItems: any = [
        {
          id: 1,
          label: "Table Row  1",
          icon: "tableRowIcon1",
        },
        {
          id: 2,
          label: "Table Row  2",
          icon: "tableRowIcon2",
        },
      ];

      const { getAllByTestId, queryByTestId } = render(
        <LayoutDetailScreen
          navigation={navigation}
          title={title}
          tableItems={tableItems}
        />
      );
      const tableRowElements = getAllByTestId("tableRow__wrapper");

      // Assert.
      expect(queryByTestId("layoutDetail__table")).not.toBeNull();
      expect(tableRowElements.length).toBe(2);
    });

    it("does NOT have tableItems > should NOT render table", () => {
      // Arrange.
      const { queryByTestId } = render(
        <LayoutDetailScreen 
          navigation={navigation}
          title={title} 
        />
      );

      // Assert.
      expect(queryByTestId("layoutDetail__table")).toBeNull();
    });
  });

  describe("primaryActions", () => {
    it("has primaryActions > should render actions", () => {
      // Arrange.
      const primaryActions = [
        {
          label: "Action 1",
          onPress: jest.fn(),
        },
        {
          label: "Action 2",
          onPress: jest.fn(),
        },
      ];

      const { getAllByTestId, queryByTestId } = render(
        <LayoutDetailScreen
          navigation={navigation}
          title={title}
          primaryActions={primaryActions}
        />
      );
      const actionElements = getAllByTestId("button__touchable");

      // Assert.
      expect(queryByTestId("layoutDetail__primaryActions")).not.toBeNull();
      expect(actionElements.length).toBe(2);
    });

    it("does NOT have primaryActions > should NOT render actions", () => {
      // Arrange.
      const { queryByTestId } = render(
        <LayoutDetailScreen
          navigation={navigation}
          title={title}
        />
      );

      // Assert.
      expect(queryByTestId("layoutDetail__primaryActions")).toBeNull();
    });
  });
});
