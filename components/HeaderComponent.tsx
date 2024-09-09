import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIcon, SearchIcon } from '@/constants/icons'

interface Props {
    displayTime: string
}

const HeaderComponent: React.FC<Props> = ({ displayTime }) => {
    return (
        <View style={styles.header}>
            <View style={styles.timeSpent}>
                <ActivityIcon color='white' />
                <Text style={styles.timeText}>{displayTime}</Text>
            </View>
            <View style={styles.headingTextView}>
                <Text style={styles.headerText}>For You</Text>
                <View style={styles.afterHeading} />
            </View>
            <View style={styles.searchStyle}>
                <SearchIcon color='white' />
            </View>
        </View>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        fontWeight: 'bold',
    },
    timeSpent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headingTextView: {
        alignItems: 'center',
        gap: 2,
    },
    afterHeading: {
        backgroundColor: 'white',
        height: 3,
        width: '60%',
    },
    timeText: {
        color: 'white',
    },
    headerText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
})