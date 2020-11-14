import React from "react";
import { shallow } from "enzyme";
import { H1 } from ".";
import toJson from "enzyme-to-json";

describe("Atoms - H1", () => {
  it("should render content", () => {
    // Arrange.
    const expectedText = "Hello World!";
    const wrapper = shallow(<H1>{expectedText}</H1>);

    // Assert.
    const actualText = wrapper.children();
    expect(toJson(actualText)).toBe(expectedText);
  });

  it("should apply styles", () => {
    // Arrange.
    const propStyle = {
      backgroundColor: "red",
      paddingHorizontal: 20,
      paddingVertical: 40,
    };

    const wrapper = shallow(<H1 style={propStyle} />);

    // Assert.
    expect(wrapper.props().style).toContain(propStyle);
  });
});
