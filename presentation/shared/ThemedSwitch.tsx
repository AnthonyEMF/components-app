import { Platform, Pressable, Switch, View } from "react-native";
import ThemedText from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

interface Props {
  className?: string;
  value?: boolean;
  text?: string;
  onValueChange?: (value:boolean) => void;
}

const isAndroid = Platform.OS === "android";

const ThemedSwitch = ({ className, value, text, onValueChange } : Props) => {

  const switchActiveColor = useThemeColor({}, "primary");

  return (
    <Pressable 
      className={[
        className,
        "flex-row items-center justify-between active:opacity-70"
      ].join(" ")}
    >
      {text ? <ThemedText type="h2">{text}</ThemedText> : <View />}
      <Switch
        thumbColor={isAndroid ? switchActiveColor : ""}
        trackColor={{false: 'gray', true: switchActiveColor}}
        value={value}
        onValueChange={onValueChange}
      />
    </Pressable>
  );
};

export default ThemedSwitch;
