import React, {useRef, useEffect, ReactNode} from 'react';
import {View, Animated, Easing, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export type AnimatedBorderViewProps = {
  width?: number;
  height?: number;
  borderRadius?: number;
  sliderWidth?: number;
  sliderHeight?: number;
  delayInAnimation?: number;
  pathColor?: string;
  sliderColor?: string;
  innerContainerColor?: string;
  children?: ReactNode;
};

const AnimatedBorderView: React.FC<AnimatedBorderViewProps> = ({
  width = 180,
  height = 50,
  borderRadius = 50,
  sliderWidth = 80,
  sliderHeight = 5,
  delayInAnimation = 3000, // Total duration in milliseconds for one full loop, adjust as needed
  pathColor = '#A684E4',
  sliderColor = '#FFDA47',
  innerContainerColor = '#854CF0',
  children,
}) => {
  const isCircle = width === height && borderRadius >= width / 2;
  const diagonal = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: delayInAnimation,
        easing: Easing.linear, // Use linear easing for smooth animation
        useNativeDriver: true,
      }),
    ).start();
  }, [animatedValue, delayInAnimation]);

  const translateXInterpolation = animatedValue.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: isCircle
      ? [0, 0, 0, 0, 0] // No movement for circle, only rotate
      : [
          -width / 2 + borderRadius, // Start from the left
          width / 2 - borderRadius, // Move to the right
          width / 2 - borderRadius, // Stay at the right edge
          -width / 2 + borderRadius, // Move back to the left edge
          -width / 2 + borderRadius, // Repeat the cycle
        ],
  });

  const rotateInterpolation = animatedValue.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ['0deg', '90deg', '180deg', '270deg', '360deg'],
  });

  return (
    <View
      style={[
        styles.pathContainer,
        {width, height, borderRadius, backgroundColor: pathColor},
      ]}>
      <Animated.View
        style={[
          styles.animatedView,
          {
            transform: [
              {translateX: translateXInterpolation},
              {rotate: rotateInterpolation},
            ],
            height: diagonal,
            width: sliderWidth,
          },
        ]}>
        <LinearGradient
          colors={[
            `${sliderColor}02`,
            `${sliderColor}60`,
            sliderColor,
            `${sliderColor}60`,
            `${sliderColor}02`,
          ]}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={{flex: 1}}
        />
        <View style={{flex: 1, backgroundColor: pathColor}}></View>
      </Animated.View>
      <View
        style={[
          styles.innerContainer,
          {
            borderRadius: borderRadius - 2,
            margin: sliderHeight,
            backgroundColor: innerContainerColor,
          },
        ]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pathContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  animatedView: {
    position: 'absolute',
  },
  innerContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#854CF0',
    overflow: 'hidden',
  },
});

export default AnimatedBorderView;
