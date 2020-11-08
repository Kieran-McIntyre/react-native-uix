export interface ButtonProps {
    title: string;
    onPress: any;
    disabled?: boolean;
    type?: "default" | "submit";
    style?: any;
}
