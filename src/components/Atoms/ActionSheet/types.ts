import { IHeaderActionsMoreOptions } from "../../../interfaces/IHeaderActionsMoreOptions";

export interface ActionSheetProps {
    title?: string;
    options: IHeaderActionsMoreOptions[];
    onAction: () => void;
}