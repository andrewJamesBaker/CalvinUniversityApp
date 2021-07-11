import React from 'react';
import { View, ImageBackground } from 'react-native';
import { globalStyles } from '../components/globalStyle'

/**
 * Card constructs different styles of cards 
 * @author Andrew Baker (andrewJamesBaker)
 * @param {any} props
 * @return {View} wrapper for screens to easily add backgrounds
 */

  const background = {uri: 'https://www.thoughtco.com/thmb/VMD_dfFUSs13oGYzBlr2GRvYZyY=/3156x2105/filters:no_upscale():max_bytes(150000):strip_icc()/Calvin_College_1-53c3e236d6624d6d80e488bdf1c272ac.jpg'}


export default function Card(props) {

    return (
        //styling for the background screen, optional blurRadius not channged.
        <View style={{flex: 1}}>
            <ImageBackground source={background} style={globalStyles.background} blurRadius = {0}>
                {props.children}
            </ImageBackground>
        </View>
    );
}
