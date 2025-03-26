import { useThemeColor } from "@/hooks/useThemeColor";
import { View, Text, ViewProps, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends ViewProps {
  className?: string;
  margin?: boolean;
  safe?: boolean;
  bgColor?: string;
}

const ThemedView = ({
  className,
  margin = false,
  safe = false,
  bgColor,
  style,
  children,
}: Props) => {

  const safeArea = useSafeAreaInsets();
  const defaultBgColor = useThemeColor({}, "background");

  const backgroundColor = bgColor ?? defaultBgColor;

  return (
    <View
      style={[
        {
          backgroundColor,
          flex: 1,
          paddingTop: safe ? (safeArea.top || StatusBar.currentHeight || 0) : 0,
          marginHorizontal: margin ? 10 : 0,
        },
        style,
      ]}
      className={className}
    >
      {children}
    </View>
  );
};

export default ThemedView;
