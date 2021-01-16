import { useStyle, DynamicStyles } from "./useStyle";
import { renderHook } from "@testing-library/react-hooks";
import { IThemeSchema } from "../interfaces/IThemeSchema";
import ReactNative from "react-native";
import { DEFAULT_THEMES } from "../theme";

describe("Hooks - useStyle", () => {
  it("provides dynamicStyles > should return correct data", () => {
    // Arrange.
    ReactNative.useColorScheme = jest.fn().mockReturnValue("dark");
    DEFAULT_THEMES.dark.systemBackground = "blue";

    const dynamicStyles: DynamicStyles = (theme: IThemeSchema) => ({
      container: {
        backgroundColor: theme.systemBackground,
      },
    });

    const { result } = renderHook(() => useStyle(dynamicStyles));

    // Assert.
    expect(result.current).toEqual({
      colorScheme: "dark",
      themeSet: DEFAULT_THEMES.dark,
      styles: {
        container: {
          backgroundColor: "blue",
        },
      },
    });
  });

  it("does NOT provide dynamicStyles > should return correct data", () => {
    // Arrange.
    ReactNative.useColorScheme = jest.fn().mockReturnValue(undefined);
    const { result } = renderHook(() => useStyle());

    // Assert.
    expect(result.current).toEqual({
      colorScheme: "light",
      themeSet: DEFAULT_THEMES.light,
      styles: {},
    });
  });
});
