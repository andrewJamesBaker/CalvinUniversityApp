import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../components/header';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import { color } from 'react-native-reanimated';

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
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{title: 'Review Details'}}
            />
        </Stack.Navigator>
    );
};
