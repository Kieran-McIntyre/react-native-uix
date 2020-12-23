import React from "react";
import { render } from '@testing-library/react-native';
import { Screen } from ".";
import { View } from "react-native";

jest.mock("../../../hooks/useStyle")

describe("Atoms - Screen", () => {
    it("should render child", () => {
        // Arrange.
        const child = <View testID={"child"} />
        const { getByTestId } = render(<Screen>{child}</Screen>)
        const renderedChild = getByTestId('child')

        // Assert.
        expect(getByTestId('child')).toBe(renderedChild);
    });

    it("should apply styles", () => {
        // Arrange.
        const propStyle = {
            backgroundColor: "green",
            paddingHorizontal: 20,
            paddingVertical: 40,
        };

        const { getByTestId } = render(<Screen style={propStyle} />)
        const wrapper = getByTestId('screen')

        // Assert.
        expect(wrapper.props.style).toContainEqual(propStyle)
    });
});
