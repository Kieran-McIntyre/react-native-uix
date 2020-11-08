import IListCellItem from "../../../interfaces/IListCellItem";
import IListCellItemAction from "../../../interfaces/IListCellItemAction";

export interface ListCellActionsProps {
    item: IListCellItem;
    actions: IListCellItemAction[];
}

export interface ActionItemProps {
    isStart?: boolean;
    item: IListCellItem;
    action: IListCellItemAction;
    index: number;
}