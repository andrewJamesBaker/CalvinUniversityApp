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
// const background = {uri: 'https://s3-us-west-2.amazonaws.com/asset.plexuss.com/college/logos/Calvin_College.png' }

export default function Styler(props) {

    return (
        //styling for the background screen, optional blurRadius not channged.
        <View style={[{flex: 1}, props.style]}>
            <ImageBackground source={background} style={globalStyles.background} blurRadius = {0}>
                {props.children}
            </ImageBackground>
        </View>
    );
}
