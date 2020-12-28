import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { LayoutTopLevelScreen } from ".";
import ReactNative from "react-native";

jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: () => <ReactNative.View />,
}));

jest.mock("../../../hooks/useStyle");
jest.mock("../../atoms/SegmentedControl", () => {
  return {
    SegmentedControl: () => <ReactNative.View />,
  };
});

describe("Organisms - LayoutTopLevelScreen", () => {
  const title = "A title";
  const navigation: any = {
    setOptions: jest.fn(),
  };

  beforeEach(() => {
    navigation.setOptions.mockReset();
  });

  it("should render", () => {
    // Arrange.
    const { getByTestId } = render(
      <LayoutTopLevelScreen title={title} navigation={navigation} />
    );

    const sectionListElement = getByTestId("sectionList");

    // Assert.
    expect(getByTestId("sectionList")).toBe(sectionListElement);
  });

  describe("onMounted", () => {
    it("should set header title", () => {
      // Arrange.
      const { getByTestId } = render(
        <LayoutTopLevelScreen title={title} navigation={navigation} />
      );

      const titleElement = getByTestId("title");

      // Assert.
      expect(titleElement.props.children).toBe(title);
    });

    it("should set header options", () => {
      // Arrange.
      render(<LayoutTopLevelScreen title={title} navigation={navigation} />);

      const expectedNthCallOne = expect.objectContaining({
        headerRight: expect.any(Function),
      });

      const expectedNthCallTwo = expect.objectContaining({
        headerTitle: expect.any(Function),
        headerStyle: expect.objectContaining({
          backgroundColor: expect.any(Object),
          shadowColor: "transparent",
        }),
      });

      // Assert.
      expect(navigation.setOptions).toHaveBeenCalledTimes(2);

      expect(navigation.setOptions).toHaveBeenNthCalledWith(
        1,
        expectedNthCallOne
      );

      expect(navigation.setOptions).toHaveBeenNthCalledWith(
        2,
        expectedNthCallTwo
      );
    });
  });

  describe("onScroll", () => {
    it("should update header style", () => {
      // Arrange.
      const { getByTestId } = render(
        <LayoutTopLevelScreen title={title} navigation={navigation} />
      );

      const eventData = {
        nativeEvent: {
          contentOffset: {
            y: 500,
          },
          contentSize: {
            // Dimensions of the scrollable content
            height: 500,
            width: 100,
          },
          layoutMeasurement: {
            // Dimensions of the device
            height: 100,
            width: 100,
          },
        },
      };

      // Assert.
      expect(navigation.setOptions).toHaveBeenCalledTimes(2);

      // Act.
      fireEvent.scroll(getByTestId("sectionList"), eventData);

      // Assert.
      expect(navigation.setOptions).toHaveBeenCalledTimes(3);
    });
  });

  it("has provided onSearch > should render search bar", () => {});

  it("has NOT provided onSearch > should NOT render search bar", () => {});

  it("has provided control options > should render segmented control ", () => {});

  it("has NOT provided control options > should NOT render segmented control ", () => {});
});
