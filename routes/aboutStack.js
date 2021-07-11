import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../components/header';
import About from '../screens/about';

const Stack = createStackNavigator();

export default function AboutStack( {navigation} ) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="About"
                component={About}
                options={{
                    headerLeft: () =>  <Header navigation={navigation} />
                }}
            />
        </Stack.Navigator>
    );
};