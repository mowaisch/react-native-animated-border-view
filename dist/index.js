"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_linear_gradient_1 = __importDefault(require("react-native-linear-gradient"));
var AnimatedBorderView = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 180 : _b, _c = _a.height, height = _c === void 0 ? 50 : _c, _d = _a.borderRadius, borderRadius = _d === void 0 ? 50 : _d, _e = _a.sliderWidth, sliderWidth = _e === void 0 ? 80 : _e, _f = _a.sliderHeight, sliderHeight = _f === void 0 ? 5 : _f, _g = _a.delayInAnimation, delayInAnimation = _g === void 0 ? 3000 : _g, // Total duration in milliseconds for one full loop, adjust as needed
    _h = _a.pathColor, // Total duration in milliseconds for one full loop, adjust as needed
    pathColor = _h === void 0 ? '#A684E4' : _h, _j = _a.sliderColor, sliderColor = _j === void 0 ? '#FFDA47' : _j, _k = _a.innerContainerColor, innerContainerColor = _k === void 0 ? '#854CF0' : _k, children = _a.children;
    var isCircle = width === height && borderRadius >= width / 2;
    var diagonal = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
    var animatedValue = (0, react_1.useRef)(new react_native_1.Animated.Value(0)).current;
    (0, react_1.useEffect)(function () {
        react_native_1.Animated.loop(react_native_1.Animated.timing(animatedValue, {
            toValue: 1,
            duration: delayInAnimation,
            easing: react_native_1.Easing.linear, // Use linear easing for smooth animation
            useNativeDriver: true,
        })).start();
    }, [animatedValue, delayInAnimation]);
    var translateXInterpolation = animatedValue.interpolate({
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
    var rotateInterpolation = animatedValue.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: ['0deg', '90deg', '180deg', '270deg', '360deg'],
    });
    return (react_1.default.createElement(react_native_1.View, { style: [
            styles.pathContainer,
            { width: width, height: height, borderRadius: borderRadius, backgroundColor: pathColor },
        ] },
        react_1.default.createElement(react_native_1.Animated.View, { style: [
                styles.animatedView,
                {
                    transform: [
                        { translateX: translateXInterpolation },
                        { rotate: rotateInterpolation },
                    ],
                    height: diagonal,
                    width: sliderWidth,
                },
            ] },
            react_1.default.createElement(react_native_linear_gradient_1.default, { colors: [
                    "".concat(sliderColor, "02"),
                    "".concat(sliderColor, "60"),
                    sliderColor,
                    "".concat(sliderColor, "60"),
                    "".concat(sliderColor, "02"),
                ], start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 }, style: { flex: 1 } }),
            react_1.default.createElement(react_native_1.View, { style: { flex: 1, backgroundColor: pathColor } })),
        react_1.default.createElement(react_native_1.View, { style: [
                styles.innerContainer,
                {
                    borderRadius: borderRadius - 2,
                    margin: sliderHeight,
                    backgroundColor: innerContainerColor,
                },
            ] }, children)));
};
var styles = react_native_1.StyleSheet.create({
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
exports.default = AnimatedBorderView;
