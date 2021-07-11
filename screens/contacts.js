import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../components/globalStyle';
import Card from '../components/card';
import Styler from '../components/styler'

export default function Contacts({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    return (
        <Styler>

        </Styler>
        
    );
}
