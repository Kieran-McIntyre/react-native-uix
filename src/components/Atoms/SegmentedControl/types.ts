import ISegmentedControlOption from "../../../interfaces/ISegmentedControlOption";

export interface SegmentedControlProps {
    options: ISegmentedControlOption[];
    style?: any;
    selectedIndex?: number;
}