import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import AnimatedBorderView, {
  AnimatedBorderViewProps,
} from '../src/AnimatedBorderView';

type AnimatedBorderViewExampleProps = {text: string} & AnimatedBorderViewProps;

const variants: AnimatedBorderViewExampleProps[] = [
  {
    width: 150,
    height: 150,
    borderRadius: 75,
    sliderWidth: 60,
    sliderHeight: 6,
    delayInAnimation: 5000,
    pathColor: '#B0E0E6', // Light Steel Blue
    sliderColor: '#FF4500', // Deep Sky Blue
    innerContainerColor: '#4682B4', // Steel Blue
    text: 'Variant 0',
  },
  {
    text: 'Variant 1',
  },
  {
    width: 180,
    height: 50,
    borderRadius: 25,
    sliderWidth: 80,
    sliderHeight: 5,
    delayInAnimation: 3000,
    pathColor: '#DDA0DD', // Plum
    sliderColor: '#DA70D6', // Orchid
    innerContainerColor: '#9370DB', // Medium Purple
    text: 'Variant 2',
  },
  {
    width: 200,
    height: 60,
    borderRadius: 30,
    sliderWidth: 100,
    sliderHeight: 8,
    delayInAnimation: 4000,
    pathColor: '#FFB6C1', // Light Pink
    sliderColor: '#FF1493', // Deep Pink
    innerContainerColor: '#CD5C5C', // Indian Red
    text: 'Variant 3',
  },
  {
    width: 300,
    height: 100,
    borderRadius: 10,
    sliderWidth: 100,
    sliderHeight: 5,
    delayInAnimation: 3500,
    pathColor: '#F0E68C', // Khaki
    sliderColor: '#854CF0', // Gold
    innerContainerColor: '#9ACD32', // Yellow Green
    text: 'Variant 4',
  },
  {
    width: 300,
    height: 100,
    borderRadius: 50,
    sliderWidth: 120,
    sliderHeight: 10,
    delayInAnimation: 6000,
    pathColor: '#90EE90', // Light Green
    sliderColor: '#FF4500', // Lime
    innerContainerColor: '#32CD32', // Lime Green
    text: 'Variant 5',
  },
];

const AnimatedBorderViewExample: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {variants.map((variant, index) => (
        <View key={index} style={styles.variantContainer}>
          <AnimatedBorderView {...variant}>
            <View style={[styles.view]}>
              <Text style={styles.text}>{variant.text}</Text>
            </View>
          </AnimatedBorderView>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  variantContainer: {
    marginVertical: 10,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
  },
});

export default AnimatedBorderViewExample;
