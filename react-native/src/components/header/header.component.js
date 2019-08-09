import * as React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from '../shared.style';

export const Header = ({allOp, result, currentNumber, isHex}) => {

    const _allOperations = [];
    allOp.map(item => {
        if ( item.type === 10 ) {
            _allOperations.push(item.val);
        } else if ( item.type === 16 ) {
            _allOperations.push(`0x${item.val}`);
        }
    });

    const resAllOperations = _allOperations.join(' + ');

    return (
        <View>
            <Text style={styles.textStyle}>Result:</Text>
            <TextInput
                style={styles.inputStyle}
                value={result}
            />
            <Text style={styles.textStyle}>All operaions:</Text>
            <TextInput
                style={styles.inputStyle}
                value={resAllOperations}
            />
            <Text style={styles.textStyle}>Current number:</Text>
            <TextInput
                style={styles.inputStyle}
                value={isHex
                    ? `0x${currentNumber}`
                    : currentNumber
                }
            />
        </View>
    )
};
