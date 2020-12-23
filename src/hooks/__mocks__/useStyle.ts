import { DEFAULT_THEMES } from "../../theme"

export const useStyle = jest.fn().mockImplementation((dynamicStyles) => {
    const styles = dynamicStyles(DEFAULT_THEMES.light)

    return {
        styles,
        colorScheme: "light",
        themeSet: DEFAULT_THEMES
    }
})