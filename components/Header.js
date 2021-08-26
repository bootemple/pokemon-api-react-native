import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Header = (props) => {
    console.log('props->', props)
    return (
        <>
            <View style={{height: `${props.height}%`,
                backgroundColor: props.color,
                justifyContent: 'flex-end',
                alignItems: props.alignment,
                padding: '3%',
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    {/*ICON*/}
                    {props.icon && (props.alignment === 'flex-start' || props.alignment === 'center') &&
                    (props.onPress ?
                        <TouchableOpacity onPress={props.onPress} style={{padding: '2%', marginRight: '2%'}}>
                            <FontAwesome5 name={props.icon} size={40} color={props.textColor}/>
                        </TouchableOpacity> : <View style={{padding: '2%', marginRight: '2%'}}>
                            <FontAwesome5 name={props.icon} size={40} color={props.textColor}/>
                        </View>)}
                    <View>
                        {/*SUBTEXT*/}
                        {props.subText && <Text style={{
                            fontWeight: 'bold',
                            textAlign: props.alignment === 'center' ? 'center' : props.alignment === 'flex-end' ? 'right' : 'left',
                            color: props.textColor,
                            letterSpacing: 2,
                        }}>{props.subText.toUpperCase()}</Text>}
                        {props.headerText && <Text style={{
                            fontWeight: 'bold',
                            fontSize: 30,
                            color: props.textColor,
                            letterSpacing: 1,
                            textAlign: props.alignment === 'center' ? 'center' : props.alignment === 'flex-end' ? 'right' : 'left',
                        }}>{props.headerText}</Text>}
                        {props.footerText && <Text style={{
                            fontWeight: 'bold',
                            textAlign: props.alignment === 'center' ? 'center' : props.alignment === 'flex-end' ? 'right' : 'left',
                            color: props.textColor,
                            letterSpacing: 2,
                        }}>{props.footerText.toUpperCase()}</Text>}
                    </View>
                    {props.alignment === 'flex-end' &&
                    <View style={{padding: '2%', marginRight: '2%'}}><FontAwesome5 name={props.icon}
                                                                                   size={props.iconSize}
                                                                                   color={props.textColor}
                    /></View>}
                </View>
            </View>
            <View style={{width: "100%", alignItems: props.alignment}}>
                {props.children}
            </View>
        </>
    )
}
// DEFAULTS
Header.defaultProps = {
    textColor: 'white',
    color: 'black',
    headerText: false,
    subText: false,
    height: '15%',
    icon: false,
    alignment: 'flex-start',
    onPress: false,
    footerText: false,
    iconSize: 30,
}
