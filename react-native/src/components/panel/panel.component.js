import * as React from 'react';
import { ScrollView, Switch, View } from 'react-native';
import { CalcBtn } from '../button/button.component';
import { buttonStyle } from '../button/button.style';
import { panelStyles } from './panel.style';

import { buttons } from '../button.const';

export const Panel = ({ hex, add, switchHandler, summarize, addToCurrentNumber, clear }) => {
    return (
        <ScrollView contentContainerStyle={buttonStyle.buttonsContainer}>
            <View style={panelStyles.rowButtonContainer}>
                <CalcBtn
                    onPress={clear}
                    title={'AC'}
                    styleContainer={{
                        ...buttonStyle.button,
                        backgroundColor: '#83CBFF',
                    }}
                />
                <CalcBtn
                    onPress={summarize}
                    title={'='}
                    styleContainer={{
                        ...buttonStyle.button,
                        backgroundColor: '#FFF9C0',
                    }}
                />
                <Switch
                    value={hex}
                    onValueChange={(val) => switchHandler(val)}
                />
            </View>
            <View style={panelStyles.rowButtonContainer}>
                {buttons.map((btnGroup) => {
                    if ( btnGroup.type == 'operation' ) {
                        return (
                            btnGroup.val.map((btn) => {
                                    return (
                                        <CalcBtn
                                            onPress={() => add(btn)}
                                            title={btn}
                                            styleContainer={buttonStyle.button}
                                            key={btn}
                                        />
                                    );
                                },
                            )
                        );
                    }
                })}
            </View>
            <View>
                {buttons.map((btnGroup) => {
                    if ( btnGroup.type == 'number' ) {
                        return (
                            btnGroup.val.map((btnSubgroup) => {
                                    return (
                                        <View style={panelStyles.rowButtonContainer} key={btnSubgroup}>
                                            {btnSubgroup.map((btn) => {
                                                return (
                                                    <CalcBtn
                                                        onPress={() => addToCurrentNumber(btn)}
                                                        title={btn}
                                                        styleContainer={buttonStyle.button}
                                                        disabled={typeof btn === 'string' && hex}
                                                        key={btn}
                                                    />
                                                );
                                            })}
                                        </View>
                                    );
                                },
                            )
                        );
                    }
                })}
            </View>
        </ScrollView>
    );
};
