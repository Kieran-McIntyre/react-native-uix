export interface ModalProps {
    visible: boolean;
    startButtonLabel?: string;
    startButtonOnPress?: any;
    headerTitle?: string;
    endButtonLabel?: string;
    endButtonOnPress?: any;
    children?: any;
    onDismiss: any;
    presentationStyle?: "fullScreen" | "formSheet";
    visualStyle?: "default" | "form";
}
