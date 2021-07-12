import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Linking } from 'react-native';
import { globalStyles } from '../components/globalStyle';
import Card from '../components/card';
import Styler from '../components/styler'
import Bar from '../components/bar'

export default function Contacts({ navigation }) {

    const [contacts] = useState([
        { key: 1, title: 'Career Center', phone: "(616) 526-6485", email: 'career@calvin.edu' },
        { key: 2, title: 'Center for Student Success', phone: '(616) 526-6155', email: 'successcenter@calvin.edu' },
        { key: 3, title: 'Residence Life', phone: '(616) 526-6120', email: 'housing@calvin.edu' },
        { key: 4, title: 'Financial Aid Office', phone: '(616) 526-6134', email: 'finaid@calvin.edu' },
        { key: 5, title: 'Financial Services - Student Accounts', phone: '(616) 526-6127', email: 'studentaccounts@calvin.edu' },
        { key: 6, title: 'Financial Services - Payroll', phone: '(616) 526-6129', email: 'payroll@calvin.edu' },
        { key: 7, title: 'Health Services', phone: '(616) 526-6187', email: 'health@calvin.edu' },
        { key: 8, title: 'Human Services', phone: '(616) 526-6495', email: 'humanresources@calvin.edu' },
        { key: 9, title: 'Campus Safety - Emergency', phone: '(616) 526-3333', email: '' },
        { key: 10, title: 'Campus Safety - 24 Hour Dispatch', phone: '(616) 526-6452', email: '' },
        { key: 11, title: 'Campus Safety - Front Desk', phone: '(616) 526-6451', email: 'safety@calvin.edu' },
        { key: 12, title: 'Mail Services', phone: '(616) 526-6154', email: 'mailservices@calvin.edu' },
        // { key: , title: '', phone: '(616) 526-', email: '' },
    ])

    return (
        <Styler>
            <FlatList style={globalStyles.list} data={contacts} renderItem={({ item }) => (
                <Card>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('tel:' + item.phone)}>
                        <Text style={globalStyles.linkText}>{item.phone}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('mailto:' + item.email)}>
                        <Text style={globalStyles.linkText}>{item.email}</Text>
                    </TouchableOpacity>
                </Card>
            )} />
        </Styler>

    );
}
