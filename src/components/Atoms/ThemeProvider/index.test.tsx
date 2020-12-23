import React from "react";
import { render } from '@testing-library/react-native';
import { ThemeProvider } from ".";
import ReactNative from "react-native";
import ReactNavigation from "@react-navigation/native";

const mockFn = jest.fn().mockImplementation(({ children }: any) => {
    return <ReactNative.View>{children}</ReactNative.View>
})

jest.mock("../../../theme")
jest.mock("@react-navigation/native", () => {
    return {
        NavigationContainer: mockFn,
        DarkTheme: jest.fn(),
        DefaultTheme: jest.fn(),
    };
});

describe("Atoms - ThemeProvider", () => {
    const child = <ReactNative.View testID={"child"} />

    it("should render child", () => {
        // Arrange.
        ReactNative.useColorScheme = jest.fn()

        const { getByTestId } = render(<ThemeProvider>{child}</ThemeProvider>)
        const renderedChild = getByTestId('child')

        // Assert.
        expect(getByTestId('child')).toBe(renderedChild);
    });

    it('scheme is dark > uses navigation dark theme', () => {
        // Arrange.
        ReactNative.useColorScheme = jest.fn().mockReturnValue('dark')

        render(<ThemeProvider>{child}</ThemeProvider>)

        // Assert.
        expect(ReactNavigation.NavigationContainer).toHaveBeenCalled()
    })

    it('scheme is light > uses navigation light theme', () => { })

    it('has tint > applies tint to navigation theme', () => { })
});
