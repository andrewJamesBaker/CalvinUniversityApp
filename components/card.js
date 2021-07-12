import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * Card constructs different styles of cards 
 * @author Andrew Baker (andrewJamesBaker)
 * @param {any} props
 * @return {View} card content for either circle or regular card, adapted from the habit buddy application, which was adapted from net ninja react native tutorials.
 */
export default function Card(props) {

    return (
        //props.style allows you to pass in custom styles
        <View style={[(props.type === 'circle' ? styles.circleCard : styles.card), props.style]}>
                <View style={styles.cardContent}>
                    { props.children }
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        elevation: 3,
        backgroundColor: 'gold',                 //#6699ff is a light blue color
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        flex: 1,
        opacity: 0.75                                //Optional
    },
    circleCard: {
        borderRadius: 75,
        backgroundColor: "#6699ff",                 //#6699ff is a light blue color
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
        justifyContent:'center',
        alignItems: 'center'
    },
});
