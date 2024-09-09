import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import { AccesBookmarkIcon, AddIcon, CommentIcon, HeartIcon, ShareIcon } from '@/constants/icons';

const QuickAccess = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconWrapper}>
                <AddIcon color='white' />
            </View>
            <View style={styles.iconWrapper}>
                <HeartIcon color='white' />
                <Text style={styles.lowerText}>87</Text>
            </View>
            <View style={styles.iconWrapper}>
                <CommentIcon color='white' />
                <Text style={styles.lowerText}>2</Text>
            </View>
            <View style={styles.iconWrapper}>
                <AccesBookmarkIcon color='white' />
                <Text style={styles.lowerText}>203</Text>
            </View>
            <View style={styles.iconWrapper}>
                <ShareIcon color='white' />
                <Text style={styles.lowerText}>17</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 5,
        marginTop: -33,
        gap: 20
    },
    iconWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30
    },
    lowerText: {
        color: 'white',
        fontSize: 12,
        marginTop: 2,
    }
});

export default QuickAccess;
