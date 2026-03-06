import { useThemeColor } from "@/hooks/use-theme-color";
import { Button, ButtonProps } from "react-native";

export type ThemedButtonProps = ButtonProps & {
    lightColor?: string;
    darkColor?: string;
}

function ThemedButton({lightColor, darkColor, ...props}: ThemedButtonProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'tint');

    return (
        <Button {...props} 
            color={backgroundColor}
        />
    );
}

export default ThemedButton;