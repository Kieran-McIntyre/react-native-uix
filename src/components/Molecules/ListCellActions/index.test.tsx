import React from "react";
import { ListCellActions } from ".";
import { fireEvent, render } from "@testing-library/react-native";
import { View } from "react-native";

jest.mock("../../../hooks/useStyle");
jest.mock("@fortawesome/react-native-fontawesome", () => ({
  FontAwesomeIcon: ({ icon }: any) => <View testID={`faIcon__${icon}`} />,
}));

describe("Molecules - ListCellActions", () => {
  const item = {
    id: "0",
    title: "A title",
    onPress: jest.fn(),
  };

  it("can click action", () => {
    // Arrange.
    const mockActionOnPressFn = jest.fn();
    const actions: any = [
      {
        id: "1",
        label: "ActionOne",
        iconName: "actionOneIcon",
        backgroundColor: "red",
        onPress: mockActionOnPressFn,
      },
    ];

    const { getByTestId } = render(
      <ListCellActions 
        item={item}
        actions={actions} 
      />
    );

    const actionElement = getByTestId("actionItem__wrapper-ActionOne");

    // Assert.
    expect(mockActionOnPressFn).not.toHaveBeenCalled();

    // Act.
    fireEvent.press(actionElement);

    // Assert.
    expect(mockActionOnPressFn).toHaveBeenCalledWith(item);
  });

  it("should apply background color", () => {
    const actions: any = [
      {
        id: "1",
        label: "ActionOne",
        iconName: "actionOneIcon",
        backgroundColor: "#366b99",
        onPress: jest.fn(),
      },
    ];

    const { getByTestId } = render(
      <ListCellActions 
        item={item}
        actions={actions} 
      />
    );

    const actionElement = getByTestId("actionItem__wrapper-ActionOne");

    // Assert.
    expect(actionElement.props.style).toEqual(
      expect.objectContaining({
        backgroundColor: "#366b99",
      })
    );
  });

  it("should render label", () => {
    const actions: any = [
      {
        id: "1",
        label: "ActionOne",
        iconName: "actionOneIcon",
        backgroundColor: "#366b99",
        onPress: jest.fn(),
      },
    ];

    const { getByTestId } = render(
      <ListCellActions 
        item={item}
        actions={actions} 
      />
    );

    const labelElement = getByTestId("actionItem__label-ActionOne");

    // Assert.
    expect(labelElement.props.children).toBe("ActionOne");
  });

  it("should render icon", () => {
    const actions: any = [
      {
        id: "1",
        label: "ActionOne",
        iconName: "actionOneIcon",
        backgroundColor: "red",
        onPress: jest.fn(),
      },
    ];

    const { queryByTestId } = render(
      <ListCellActions 
        item={item}
        actions={actions} 
      />
    );

    // Assert.
    expect(queryByTestId("faIcon__actionOneIcon")).not.toBeNull();
  });

  describe("actions style", () => {
    const actions: any = [
      {
        id: "A",
        label: "ActionStartA",
        iconName: "actionStartIconA",
        backgroundColor: "pink",
        onPress: jest.fn(),
        isStart: true,
      },
      {
        id: "B",
        label: "ActionStartB",
        iconName: "actionStartIconB",
        backgroundColor: "brown",
        onPress: jest.fn(),
        isStart: true,
      },
      {
        id: "C",
        label: "ActionEndC",
        iconName: "actionEndIconC",
        backgroundColor: "green",
        onPress: jest.fn(),
      },
      {
        id: "D",
        label: "ActionEndD",
        iconName: "actionEndIconD",
        backgroundColor: "orange",
        onPress: jest.fn(),
      },
    ];

    it("should apply correct styles", () => {
      // Arrange.
      const { getByTestId } = render(
        <ListCellActions 
          item={item}
          actions={actions} 
        />
      );

      const actionAWrapper = getByTestId("actionItem__wrapper-ActionStartA");
      const actionBWrapper = getByTestId("actionItem__wrapper-ActionStartB");
      const actionCWrapper = getByTestId("actionItem__wrapper-ActionEndC");
      const actionDWrapper = getByTestId("actionItem__wrapper-ActionEndD");

      // Assert.
      expect(actionAWrapper.props.style).toEqual(
        expect.objectContaining({
          backgroundColor: "pink",
          left: -0,
          width: 75,
          position: "absolute",
        })
      );
      expect(actionBWrapper.props.style).toEqual(
        expect.objectContaining({
          backgroundColor: "brown",
          left: -75,
          width: 75,
          position: "absolute",
        })
      );
      expect(actionCWrapper.props.style).toEqual(
        expect.objectContaining({
          backgroundColor: "green",
          right: 0,
          width: 75,
          position: "absolute",
        })
      );
      expect(actionDWrapper.props.style).toEqual(
        expect.objectContaining({
          backgroundColor: "orange",
          right: 75,
          width: 75,
          position: "absolute",
        })
      );
    });
  });
});
