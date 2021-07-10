import * as React from 'react';
import { Button, View, SectionList, Text, Linking } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../components/header';

import Home from '../routes/homeStack';
import About from '../routes/aboutStack';
// import Hekman from '../routes/hekmanStack'
import {WebView} from 'react-native-webview'

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const list = [

    {
        name: "Hekman Library",
        site: "https://library.calvin.edu/"
    },
    {
        name: "Menus",
        site: "https://calvin.edu/offices-services/dining-services/agenda.html"
    },
    {
        name: "Map",
        site: "https://calvin.edu/map/"
    },
    {
        name: "Calendar",
        site: "https://calvin.edu/calendar/"
    },
    {
        name: "Chimes",
        site: "https://calvinchimes.org/"
    },
]

let counter = -1

// function CustomDrawerContent(props) {
//     return (
//       <DrawerContentScrollView {...props}>
//         <DrawerItemList {...props} />
//         <DrawerItem
//           label="Chimes"
//           onPress={() => <WebView source={{ uri: 'https://library.calvin.edu/' }}/>}
//         />
//         <DrawerItem
//           label="Library"
//           component = {HekmanStack}
//         //   onPress={() => navigation.navigate(HekmanStack)}
//         />
//       </DrawerContentScrollView>
//     );
//   }

export default function App() {
    return (
        < Drawer.Navigator initialRouteName="Home" drawerStyle={{ backgroundColor: 'lightgrey' }} drawerContentOptions={{ activeTintColor: 'maroon' }}>
            
            <Drawer.Screen name="Home" component={Home} />
            {/* <Drawer.Screen name="Hekman" component={HekmanStack} /> */}
            <Drawer.Screen name="About" component={About} />
            <Drawer.Screen name={list[0].name} component={Stacks} />
            <Drawer.Screen name={list[1].name} component={Stacks} />
            <Drawer.Screen name={list[2].name} component={Stacks} />
            <Drawer.Screen name={list[3].name} component={Stacks} />
            <Drawer.Screen name={list[4].name} component={Stacks} />
        </Drawer.Navigator >

    );
};

function HekmanStack( {navigation} ) {
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

function Stacks( {navigation} ) {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'maroon'}
        }}>
            <Stack.Screen
                name= {list[counter].name}
                component={Web}
                options={{
                    headerLeft: () =>  <Header navigation={navigation} />
                }}
            />
        </Stack.Navigator>
    );
};

function Hekman() {
    return (
        <WebView
        source={{ uri: 'https://library.calvin.edu/' }}
      />
    );
}
function Web() {
    return (
        // <View>
        // <Text>num</Text>
        <WebView source={{ uri: list[counter].site}} />
        // </View>
    );
}