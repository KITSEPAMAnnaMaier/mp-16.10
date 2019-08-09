import { StyleSheet } from 'react-native';
import { colors } from '../utils';

export const buttonStyle = StyleSheet.create({
    buttonsContainer: {
        borderColor: colors.BLACK,
        borderWidth: 1,
    },
    button: {
        width: 60,
        height: 60,
        borderColor: colors.BLACK,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.BUTTON_BG,
    },
});
