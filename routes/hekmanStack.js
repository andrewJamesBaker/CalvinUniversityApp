import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../components/header';
import Hekman from '../screens/hekman';

const Stack = createStackNavigator();
export default function HekmanStack( {navigation} ) {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'maroon'}
        }}>
            <Stack.Screen
                name="Hekman Library"
                component={Hekman}
                options={{
                    headerLeft: () =>  <Header navigation={navigation} />
                }}
            />
        </Stack.Navigator>
    );
};
