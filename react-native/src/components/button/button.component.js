import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../utils';

export const CalcBtn = ({ onPress, styleContainer, disabled, title }) => {
    const _style = disabled
        ? {
            ...styleContainer,
            backgroundColor: colors.GREY,
        }
        : styleContainer;

    return (
        <TouchableOpacity
            onPress={disabled ? () => {
            } : onPress}
            style={_style}
            activeOpacity={disabled ? 1 : 0.5}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    );
};

