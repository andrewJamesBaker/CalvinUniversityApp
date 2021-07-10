import React, { useState, useEffect } from 'react';
import {WebView} from 'react-native-webview'

export default function Hekman({ navigation }) {


    return (
        <WebView
        source={{ uri: 'https://library.calvin.edu/' }}
      />
    );
}
