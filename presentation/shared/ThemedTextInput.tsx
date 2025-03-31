import { TextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {
  className?: string;
}

const ThemedTextInput = ({ className, ...rest } : Props) => {
  return (
    <TextInput
      {...rest}
      className={[
        "py-4 px-2 text-black dark:text-white",
        className
      ].join(" ")}
      placeholderTextColor={"gray"}
    />
  );
};

export default ThemedTextInput;
