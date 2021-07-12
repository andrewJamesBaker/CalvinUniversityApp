import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { globalStyles } from '../components/globalStyle';
import Card from '../components/card';
import Bar from '../components/bar'
import Styler from '../components/styler'

// const calvinLogo = { uri: 'https://s3-us-west-2.amazonaws.com/asset.plexuss.com/college/logos/Calvin_College.png' }
// const calvinLogo = { uri: 'https://calvin.edu/global/images/calvin-university-1876.svg'}
// const calvinLogo = { uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Calvin_College_seal.svg/1200px-Calvin_College_seal.svg.png' }
const calvinLogo = { uri: 'https://calvin.edu/dotAsset/c223e958-2bec-4c04-8949-644591626f1c.png' }

export default function Home({ navigation }) {

    return (
        <Styler>
            <View style={{paddingTop: '25%', }}>


                <Bar>
                    {/* <Image source={calvinLogo} style={{ height: 150, width: 150, position: 'relative', alignSelf: 'center'}} /> */}
                    <Image source={calvinLogo} style={{ height: 104, width: '100%', position: 'relative', alignSelf: 'center'}} />
                    {/* <Text style={{fontWeight: 'bold', fontSize: 20}}>Calvin University</Text> */}
                </Bar>
            </View>
        </Styler>
    );
}
