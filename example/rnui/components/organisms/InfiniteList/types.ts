import IListCellItem from "../../../interfaces/IListCellItem";
import IListCellItemAction from "../../../interfaces/IListCellItemAction";

export interface InfiniteListProps {
    items: IListCellItem[];
    initialCount: number;
    increment: number;
    onNewCount: any;
    actions?: IListCellItemAction[];
}