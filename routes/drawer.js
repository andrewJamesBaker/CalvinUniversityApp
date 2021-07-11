import * as React from 'react';
import { Button, View, SectionList, Text, Linking } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../components/header';

import Home from '../routes/homeStack';
import About from '../routes/aboutStack';
import Contacts from '../routes/contactsStack';
import {WebView} from 'react-native-webview'

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const list = [
    {
        name: "Calendar",
        site: "https://calvin.edu/calendar/"
    },
    {
        name: "Map",
        site: "https://calvin.edu/map/"
    },
    {
        name: "Calvin Athletics",
        site: "https://www.calvinknights.com/landing/index"
    },
    {
        name: "Hekman Library",
        site: "https://library.calvin.edu/"
    },
    {
        name: "Menus",
        site: "https://calvin.edu/offices-services/dining-services/agenda.html"
    },
    {
        name: "Chimes",
        site: "https://calvinchimes.org/"
    },
    {
        name: "Box Office",
        site: "https://calvin.universitytickets.com/"
    },
    {
        name: "Web Links",
        site: "https://calvin.edu/students/"
    },
    // {
    //     name: "Order a Sack Lunch",
    //     site: ""
    // },
]


export default function App() {
    return (
        < Drawer.Navigator initialRouteName="Home" drawerStyle={{ backgroundColor: 'lightgrey' }} drawerContentOptions={{ activeTintColor: 'maroon' }}>
            
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name={list[0].name} component={Stacks} initialParams={list[0]}/>
            <Drawer.Screen name={list[1].name} component={Stacks} initialParams={list[1]}/>
            <Drawer.Screen name={list[2].name} component={Stacks} initialParams={list[2]}/>
            <Drawer.Screen name={list[3].name} component={Stacks} initialParams={list[3]}/>
            <Drawer.Screen name={list[4].name} component={Stacks} initialParams={list[4]}/>
            <Drawer.Screen name={list[5].name} component={Stacks} initialParams={list[5]}/>
            <Drawer.Screen name={list[6].name} component={Stacks} initialParams={list[6]}/>
            <Drawer.Screen name={list[7].name} component={Stacks} initialParams={list[7]}/>
            {/* <Drawer.Screen name={list[8].name} component={Stacks} initialParams={list[8]}/> */}
            <Drawer.Screen name="Contacts" component={Contacts} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator >

    );
};

function Stacks( {route, navigation} ) {
    // console.log(route.params)
    let site = route.params.site
    // console.log(site)
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'maroon'}
        }}>
            <Stack.Screen
                name= {route.params.name}
                component={Web}
                initialParams={{site: site}}
                options={{
                    headerLeft: () =>  <Header navigation={navigation} />
                }}
            />
        </Stack.Navigator>
    );
};

function Web({route}) {
    // console.log(route)
    return (
        <WebView source={{ uri: route.params.site}} />
    );
}