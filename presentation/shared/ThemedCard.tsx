import { View, Text, ViewProps } from "react-native";

interface Props extends ViewProps {
  className?: string;
}

const ThemedCard = ({ className, children, ...rest } : Props) => {
  return (
    <View
      {...rest}
      className={[
        className,
        "bg-white dark:bg-black/10 rounded-xl p-2 shadow shadow-black/5",
      ].join(" ")}
    >
      {children}
    </View>
  );
};

export default ThemedCard;
