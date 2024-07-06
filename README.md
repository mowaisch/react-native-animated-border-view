# React Native Animated Border View

React Native Animated Border View is a customizable component that allows you to wrap any component with an animated border. This component uses `react-native-linear-gradient` for smooth gradient animations.

## Installation

First, install the library using yarn or npm:

```sh
yarn add react-native-animated-border-view react-native-linear-gradient
```

or

```sh
npm install react-native-animated-border-view react-native-linear-gradient
```

Make sure to link the `react-native-linear-gradient` library if you're using React Native version below 0.60:

```sh
react-native link react-native-linear-gradient
```

## Usage

Import the `AnimatedBorderView` component and use it to wrap your desired components. Below is an example:

```jsx
import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import AnimatedBorderView from 'react-native-animated-border-view';

const AnimatedBorderViewExample = () => {
  const variants = [
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
      sliderColor: '#FFD700', // Gold
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
      sliderColor: '#32CD32', // Lime Green
      innerContainerColor: '#00FF00', // Lime
      text: 'Variant 5',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {variants.map((variant, index) => (
        <View key={index} style={styles.variantContainer}>
          <AnimatedBorderView {...variant}>
            <View style={styles.view}>
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
```

## Demo Video

Watch the demo video below:

<iframe  src="https://www.youtube.com/watch?v=skfxbTF4bZ8"  ></iframe>

## Props

The `AnimatedBorderView` component accepts the following optional props:

- `width`: Width of the border view.
- `height`: Height of the border view.
- `borderRadius`: Border radius of the view.
- `sliderWidth`: Width of the slider used in the animation.
- `sliderHeight`: Height of the slider used in the animation.
- `delayInAnimation`: Delay in milliseconds for the animation to start.
- `pathColor`: Color of the path of the animation.
- `sliderColor`: Color of the slider used in the animation.
- `innerContainerColor`: Background color of the inner container.

## Troubleshooting

If the component does not work as expected, try cleaning your React Native project. This can often resolve issues related to build artifacts or outdated dependencies.

To clean your React Native project, follow these steps:

1. Clear the npm cache:

   ```sh
   npm cache clean --force
   ```

2. Delete the `node_modules` directory:

   ```sh
   rm -rf node_modules
   ```

3. Reinstall the dependencies:

   ```sh
   npm install
   ```

4. If you are using CocoaPods for iOS dependencies, also clean and reinstall the pods:

   ```sh
   cd ios
   pod deintegrate
   pod install
   cd ..
   ```

5. Reset the Metro bundler cache:

   ```sh
   npm start -- --reset-cache
   ```

By performing these steps, you should resolve most common issues. If the problem persists, consider checking for open issues on the GitHub repository or opening a new issue for help.

## Contributing

Feel free to open issues or submit pull requests for any features or bugs you find.

## License

This project is licensed under the MIT License.
