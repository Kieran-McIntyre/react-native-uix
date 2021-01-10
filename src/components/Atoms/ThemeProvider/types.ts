import { ITheme } from "../../../interfaces/IThemeSchema";

export interface ThemeProviderProps {
  children: JSX.Element;
  theme?: ITheme;
}
