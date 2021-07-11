import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../components/globalStyle';
import Card from '../components/card';
import Bar from '../components/bar'
import Styler from '../components/styler'

export default function Home({ navigation }) {

    return (
        <Styler>
            <View style={{flexDirection: 'column'}}>
                <Bar>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>Calvin University</Text>
                </Bar>
            </View>
        </Styler>
    );
}
