import React from "react";
import { shallow } from "enzyme";
import { Label } from ".";
import toJson from "enzyme-to-json";

jest.mock("../../../hooks/useStyle")

describe("Atoms - Title", () => {
    it("should render content", () => {
        // Arrange.
        const expectedText = "Hello World!";
        const wrapper = shallow(<Label>{expectedText}</Label>);

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

        const wrapper = shallow(<Label style={propStyle} />);

        // Assert.
        expect(wrapper.props().style).toContain(propStyle);
    });
});
