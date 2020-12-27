import { ITheme } from "../../../interfaces/IThemeSchema";

export interface ThemeProviderProps {
    children: React.ReactChild;
    theme?: ITheme;
}