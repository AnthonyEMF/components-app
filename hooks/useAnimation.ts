import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  // mostrar
  const fadeIn = ({
    duration = 1000,
    toValue = 1,
    useNativeDriver = true,
    callBack = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
    }).start(callBack);
  };

  // ocultar
  const fadeOut = ({
    duration = 700,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.ease,
    callBack = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
      easing: easing,
      // }).start(() => animatedTop.setValue(-100));
    }).start(callBack);
  };

  const startMovingTopPosition = ({
    initialPosition = -100,
    duration = 700,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.linear,
    callBack = () => {},
  }) => {

    animatedTop.setValue(initialPosition);

    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
      // easing: Easing.elastic(2),
      easing: easing,
    }).start(callBack);
  }

  return {
    // properties
    animatedOpacity,
    animatedTop,

    // methods
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
};
