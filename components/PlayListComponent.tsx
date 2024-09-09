import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ChevronRightIcon, PlaylistIcon } from '@/constants/icons'

const PlayListComponent = ({ playlist }: { playlist?: string }) => {
    return (
        playlist && (
            <View style={styles.playlistContainer}>
                <View style={styles.playlistViewInner}>
                    <PlaylistIcon color='white' />

                    <Text style={styles.playlistText}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Playlist</Text>{' '}
                        <Text>Unit 5</Text>: {playlist}
                    </Text>
                </View>
                <ChevronRightIcon color='white' />
            </View>
        )
    )
}

export default PlayListComponent

const styles = StyleSheet.create({

    playlistContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingVertical: 5,
        paddingHorizontal: 16,
        marginHorizontal: -16,
        marginBottom: -16,
        color: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    playlistViewInner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    playlistText: {
        color: 'white',
        marginLeft: 5
    }
})