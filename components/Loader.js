import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator, Image} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {BlurView} from 'expo-blur';

export const Loader = (props) => {

    const LoaderBody = () => {
        return (
            <View style={{
                position: props.fullscreen ? 'absolute' : 'relative',
                height: props.fullscreen ? '100%' : '30%',
                width: props.fullscreen ? '100%' : '60%',
                borderRadius: !props.fullscreen ? '20px' : '0px',
                backgroundColor: props.blur && props.fullscreen ? null : props.backgroundColor,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <ActivityIndicator
                    size={props.size}
                    color={props.indicatorColor}
                    position={props.position}
                >
                </ActivityIndicator>
                {props.text && <Text
                    style={{
                        marginTop: 30,
                        fontWeight: 'bold', color: props.indicatorColor
                    }}
                >{props.text}</Text>
                }
            </View>
        )
    }
    return (
        props.blur ? (<BlurView
                intensity={100}
                tint={props.tint}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    position: 'absolute',
                    height: '100%',
                    width: "100%",
                }}
            ><LoaderBody/></BlurView>) :
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                    position: 'absolute',
                    height: '100%',
                    width: "100%",
                }}
            ><LoaderBody/>
            </View>
    )
}

Loader.defaultProps =
    {
        flex: 1,
        justifyContent
:
'center',
    backgroundColor
:
'black',
    size
:
'large',
    animate
:
'true',
    indicatorColor
:
'white',
    position
:
'absolute',
    fullscreen
:
true,
    text
:
false,
    tint
:
'dark'
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems
:
'center',
    justifyContent
:
'center',
}
,
blurredImage: {
    width: 192,
        height
:
    192,
}
,
nonBlurredContent: {
    alignItems: 'center',
        justifyContent
:
    'center',
}
,
}
)
;
