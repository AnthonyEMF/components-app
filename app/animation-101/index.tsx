import { useAnimation } from "@/hooks/useAnimation";
import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Animated, Easing } from "react-native";

const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  return (
    <ThemedView margin className="flex-1 items-center justify-center">
      {/* Animación */}
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-3xl"
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [{ translateY: animatedTop }],
        }}
      />

      {/* Boton de mostrar */}
      <ThemedButton
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            easing: Easing.bounce,
          });
        }}
        className="my-4"
      >
        Fade In
      </ThemedButton>

      {/* Boton de ocultar */}
      <ThemedButton
        onPress={() => {
          fadeOut({});
        }}
      >
        Fade Out
      </ThemedButton>
    </ThemedView>
  );
};

export default Animation101Screen;
