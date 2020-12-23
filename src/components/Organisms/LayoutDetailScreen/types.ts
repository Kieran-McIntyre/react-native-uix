import { IHeaderActionsMoreOptions } from "../../../interfaces/IHeaderActionsMoreOptions";
import { IDetailMeta } from "../../../interfaces/IDetailMeta";
import { IGroupedTableItem } from "../../../interfaces/IGroupedTableItem";

export interface LayoutDetailScreenProps {
    navigation: any;
    children?: any;
    onEdit?: any;
    onAdd?: any;
    moreOptions?: IHeaderActionsMoreOptions[];

    caption?: string;
    title: string;
    meta?: IDetailMeta[];
    tableItems?: IGroupedTableItem[];
}