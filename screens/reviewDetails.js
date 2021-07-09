import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../components/globalStyle';

import Card from '../components/card';

export default function ReviewDetails({ route, navigation }) {
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{ route.params.id }</Text>
                <Text>{ route.params.email }</Text>
                <Text>{ route.params.name }</Text>
            </Card>
        </View>
    );
}
