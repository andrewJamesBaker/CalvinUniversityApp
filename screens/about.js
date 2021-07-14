import React from 'react';
import { Text, TouchableOpacity, Linking } from 'react-native';
import { globalStyles } from '../components/globalStyle';
import Card from '../components/card'
import Styler from '../components/styler'

export default function About() {
    return (
        <Styler>
            <Card>
                <Text style={globalStyles.titleText}>
                    Calvin University App
                </Text>
                <Text style={globalStyles.subtitleText}>
                    Built by Andrew Baker as part of Calvin Lifework.
                </Text>
                <Text style={globalStyles.subtitleText}>
                    The Calvin University App is intended to bring many of the current features of the student portion of the MyCalvinUniversity app, while changing the user interface design to look more like the original Calvin College mobile application.
                </Text>
                <Text style={globalStyles.subtitleText}>
                    React Native and Expo were used in building this application. Several functions were borrowed from other apps built by the developer.
                </Text>
            </Card>
            <Card>
                <Text style={globalStyles.titleText}>Contact Info</Text>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:' + "ajb247@students.calvin.edu")}>
                    <Text style={globalStyles.linkText}>ajb247@students.calvin.edu</Text>
                </TouchableOpacity>
            </Card>
        </Styler>
    );
};
