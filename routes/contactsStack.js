import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../components/header';
import Contacts from '../screens/contacts';

const Stack = createStackNavigator();
export default function HomeStack( {navigation} ) {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'maroon'}
        }}>
            <Stack.Screen
                name="Contacts"
                component={Contacts}
                options={{
                    headerLeft: () =>  <Header navigation={navigation} />
                }}
            />
        </Stack.Navigator>
    );
};
