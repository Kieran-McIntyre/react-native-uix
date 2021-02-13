import React from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from ".";
import ReactNative from "react-native";
import ReactNavigation from "@react-navigation/native";

jest.mock("../../../theme");
jest.mock("@react-navigation/native", () => {
  return {
    NavigationContainer: ({ children, theme }: any) => {
      return (
        <ReactNative.View 
          testID="navigationContainer"
          style={theme}
        >
          {children}
        </ReactNative.View>
      );
    },
    DarkTheme: "dark",
    DefaultTheme: "default",
  };
});

describe("Atoms - ThemeProvider", () => {
  const child = <ReactNative.View testID={"child"} />;

  it("should render child", () => {
    // Arrange.
    ReactNative.useColorScheme = jest.fn();

    const { getByTestId } = render(<ThemeProvider>{child}</ThemeProvider>);
    const renderedChild = getByTestId("child");

    // Assert.
    expect(getByTestId("child")).toBe(renderedChild);
  });

  it("scheme is dark > uses navigation dark theme", () => {
    // Arrange.
    ReactNative.useColorScheme = jest.fn().mockReturnValue("dark");

    const { getByTestId } = render(<ThemeProvider>{child}</ThemeProvider>);
    const navigationWrapper = getByTestId("navigationContainer");

    // Assert.
    expect(navigationWrapper.props.style).toBe("dark");
  });

  it("scheme is light > uses navigation light theme", () => {
    // Arrange.
    ReactNative.useColorScheme = jest.fn().mockReturnValue("light");

    const { getByTestId } = render(<ThemeProvider>{child}</ThemeProvider>);
    const navigationWrapper = getByTestId("navigationContainer");

    // Assert.
    expect(navigationWrapper.props.style).toBe("default");
  });

  it("has tint > applies tint to navigation theme", () => {
    // Arrange.
    const tint = "#366bff";
    ReactNative.useColorScheme = jest.fn().mockReturnValue("light");
    ReactNavigation.DefaultTheme = {
      colors: {
        primary: "red",
      },
    } as any;

    const theme = {
      light: { tint },
    } as any;

    const expectedTheme = {
      colors: {
        primary: tint,
      },
    };

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>{child}</ThemeProvider>
    );
    const navigationWrapper = getByTestId("navigationContainer");

    // Assert.
    expect(navigationWrapper.props.style).toEqual(expectedTheme);
  });
});
