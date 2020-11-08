import ISegmentedControlOption from "../../../interfaces/ISegmentedControlOption";
import IHeaderActionsMoreOptions from "../../../interfaces/IHeaderActionsMoreOptions";

export interface StaticHeaderProps {
    title: string;
    navigation: any;
    children?: any;
    outerChildren?: any;
    onSearch?: any;
    segmentedControlOptions?: ISegmentedControlOption[];
    onEdit?: any;
    onAdd?: any;
    moreOptions?: IHeaderActionsMoreOptions[];
}