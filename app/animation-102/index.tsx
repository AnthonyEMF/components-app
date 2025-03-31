import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ],{useNativeDriver: false}),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 justify-center items-center'>
        <Animated.View
          // className="bg-dark-primary w-100 h-100 rounded-3xl"
          {...panResponder.panHandlers}
          style={[pan.getLayout(), styles.box]}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#61dafb',
    width: 140,
    height: 140,
    borderRadius: 25,
  },
});

export default Animation102Screen;