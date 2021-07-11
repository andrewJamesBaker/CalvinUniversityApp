import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../components/header';
import Home from '../screens/home';

const Stack = createStackNavigator();
export default function HomeStack( {navigation} ) {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'maroon'}
        }}>
            <Stack.Screen
                name="Calvin University"
                component={Home}
                options={{
                    headerLeft: () =>  <Header navigation={navigation} />
                }}
            />
        </Stack.Navigator>
    );
};
