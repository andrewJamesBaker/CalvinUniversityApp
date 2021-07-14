import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../components/header';

import Home from '../routes/homeStack';
import About from '../routes/aboutStack';
import Contacts from '../routes/contactsStack';
import {WebView} from 'react-native-webview'

// Drawer Navigator for the Calvin App
// Creates screen items within the drawer and contains the basic code for the webview based screens

// Creates the stack navigator for the whole application
const Stack = createStackNavigator();

// Creates the actual drawer navigator
const Drawer = createDrawerNavigator();

// List of the webview screens and the corresponding websites to be rendered by the app
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
        name: "Dining Menus",
        site: "https://calvin.edu/offices-services/dining-services/agenda.html"
    },
    {
        name: "Chimes",
        site: "https://calvinchimes.org/"
    },
    {
        name: "Hekman Library",
        site: "https://library.calvin.edu/"
    },
    {
        name: "Calvin Athletics",
        site: "https://www.calvinknights.com/landing/index"
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
            {/* RENDERING OF THE SCREENS WITHIN THE DRAWER NAVIGATOR */}
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

// Function creates a mini stack for the webview screens, throws to the actual screen renderer function "Web"
function Stacks( {route, navigation} ) {
    let site = route.params.site
    // console.log(route.params)
    // console.log(site)
    return (
        // Creates the header of each webview screen
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'maroon'}
        }}>
            <Stack.Screen
                name= {route.params.name}
                // The name of the screen within the list
                component={Web}
                initialParams={{site: site}}
                // Throws the website for each screen to the screen renderer
                options={{
                    headerLeft: () =>  <Header navigation={navigation} />
                }}
            />
        </Stack.Navigator>
    );
};

// Webview screen renderer
function Web({route}) {
    // console.log(route)
    return (
        <WebView source={{ uri: route.params.site}} />
    );
}
