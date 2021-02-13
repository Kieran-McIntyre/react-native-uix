import React from "react";
import { shallow } from "enzyme";
import { ActionSheet } from ".";
import { IHeaderActionsMoreOptions } from "../../../interfaces/IHeaderActionsMoreOptions";

jest.mock("react-native-actionsheet");
jest.mock("../../../hooks/useStyle");

describe("Atoms - ActionSheet", () => {
  const mockPressFn = jest.fn();
  const mockActionFn = jest.fn();
  let options: IHeaderActionsMoreOptions[] = [];

  beforeEach(() => {
    mockPressFn.mockReset();
    mockActionFn.mockReset();

    options = [
      {
        label: "Option 1",
        onPress: () => mockPressFn(0),
      },
      {
        label: "Option 2",
        onPress: () => mockPressFn(1),
        isCancel: true,
      },
      {
        label: "Option 3",
        onPress: () => mockPressFn(2),
        isDestructive: true,
      },
    ];
  });

  it("should call onPress", () => {
    // Arrange.
    const wrapper = shallow(
      <ActionSheet 
        options={options}
        onAction={mockActionFn} 
      />
    );

    // Act.
    wrapper.props().onPress(0);

    // Assert.
    expect(mockPressFn).toHaveBeenCalledWith(0);
    expect(mockActionFn).toHaveBeenCalled();
  });

  it("should correctly set button indexes", () => {
    // Arrange.
    const wrapper = shallow(
      <ActionSheet 
        options={options}
        onAction={mockActionFn} 
      />
    );

    // Assert.
    expect(wrapper.props().cancelButtonIndex).toBe(1);
    expect(wrapper.props().destructiveButtonIndex).toBe(2);
  });

  it("should render title", () => {
    // Arrange.
    const title = "A title for the action sheet!";
    const wrapper = shallow(
      <ActionSheet 
        title={title}
        options={[]}
        onAction={mockActionFn} 
      />
    );

    // Assert.
    expect(wrapper.props().title).toBe(title);
  });
});
