import * as React from 'react';
import { Button, View, SectionList, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../routes/homeStack';
import About from '../routes/aboutStack';
import { color } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

const screens = [
    {
        title: "Campus Resources",
        data: ["Calendar", "Map", "Hekman", "Menus"]
    },
    {
        title: "My Services",
        data: ["Courses", "Grades", "Order Lunch"]
    },
    {
        title: "Calvin",
        data: ["Athletics", "Chimes", "App Feedback"]
    },
    {
        title: "Actions",
        data: ["Home", "About", "Sign Out"]
    }
];

export default function App() {
    return (
        //  <SectionList
        //     sections={screens}
        //     keyExtractor={(item, index) => item + index}
        //     renderItem={({ item }) => <Item title={item} />}
        //     renderSectionHeader={({ section: { title } }) => (
        //         <Text>{title}</Text>
        //     )}
        // />
        < Drawer.Navigator initialRouteName = "Home" drawerStyle = {{ backgroundColor: 'lightgrey' }
}>
            <Drawer.Screen name="Home" component={Home} />
            {/* <Drawer.Screen name="Also Nope"/> */}
            
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator >
    );
};
