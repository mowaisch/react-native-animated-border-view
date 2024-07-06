import React, { ReactNode } from 'react';
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
declare const AnimatedBorderView: React.FC<AnimatedBorderViewProps>;
export default AnimatedBorderView;
