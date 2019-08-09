import React, { useState } from 'react';
import {
    Alert,
    View,
    StyleSheet,
} from 'react-native';
import { Header } from './src/components/header/header.component';
import { colors } from './src/components/utils';
import { Panel } from './src/components/panel/panel.component';

const btnTypes = {
    number: {
        style: 1, // TODO: move to const,
        onPress: () => {
        },
    },
};

const initState = {
    // btns
    buttons: [
        {
            title: '1',
            // disabled: false,
            type: btnTypes.number,
        },
        {
            title: '2',
            // disabled: false,
            type: btnTypes.number,
        },
        {
            title: '3',
            // disabled: false,
            type: btnTypes.number,
        },
        {
            title: '4',
            // disabled: false,
            type: btnTypes.number,
        },
        {
            title: '5',
            // disabled: false,
            type: btnTypes.number,
        },
        {
            title: '6',
            // disabled: false,
            type: btnTypes.number,
        },
        {
            title: '7',
            // disabled: false,
            type: btnTypes.number,
        },
        {
            title: '8',
            // disabled: false,
            type: btnTypes.number,
        },
        {
            title: '9',
            // disabled: false,
            type: btnTypes.number,
        },
        {
            title: '0',
            // disabled: false,
            type: btnTypes.number,
        },
        {
            title: 'A',
            // disabled: false,
            type: btnTypes.number,
        },
        {
            title: 'B',
            // disabled: false,
            type: btnTypes.number,
        },
        {
            title: 'C',
            // disabled: false,
            type: btnTypes.number,
        },
        {
            title: 'D',
            // disabled: false,
            type: btnTypes.number,
        },
        {
            title: 'E',
            // disabled: false,
            type: btnTypes.number,
        },
        {
            title: 'F',
            // disabled: false,
            type: btnTypes.number,
        },
    ],
};

export const App = () => {
    const [result, setResult] = useState(0);
    const [allOperations, setAllOperations] = useState([]);
    const [currentNumber, setCurrentNumber] = useState(0);
    const [hex, setHex] = useState(true);

    const switchHandler = (val) => {
        if ( result ) {
            setResult(val ? result.toString(16) : parseInt(result, 16));
        }
        setHex(val);
        setCurrentNumber(0);
    };

    const addToCurrentNumber = (val) => {
        setCurrentNumber(`${currentNumber ? currentNumber : ''}${val}`);
    };

    const add = (op, cb) => {
        const tempArray = [];
        allOperations.push({
            type: hex ? 16 : 10,
            val: currentNumber,
        });
        if ( op ) {
            tempArray.push({
                type: 'op',
                val: op,
            });
        }
        setAllOperations([...allOperations, ...tempArray]);
        setCurrentNumber(0);
    };

    const clear = () => {
        setAllOperations([]);
        setCurrentNumber(0);
        setResult(0);
    };

    const summarize = () => {
        add();
        let tempResult = allOperations.map((item) => item.type !== 'op' ? parseInt(item.val, item.type === 16 ? 16 : 10) : item.val).join('');
        tempResult = eval(tempResult);

        if ( hex ) {
            tempResult = tempResult.toString(16);
        }
        setResult(tempResult);
        setAllOperations(allOperations);
    };


    return (
        <View style={styles.container}>
            <Header allOp={allOperations} currentNumber={currentNumber.toString()} result={result.toString()}
                    isHex={hex}/>
            <Panel hex={hex} add={add} switchHandler={switchHandler} summarize={summarize}
                   addToCurrentNumber={addToCurrentNumber} clear={clear}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.CONTAINER_MAIN,
        padding: 8,
        paddingTop: 25,
    },
});
