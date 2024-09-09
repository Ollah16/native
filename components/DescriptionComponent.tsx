import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DescriptionComponent = ({ description, user }: { description?: string, user?: { name?: string } }) => {
    return (
        <View>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, marginBottom: 1 }}>{user?.name}</Text>
            <Text style={{ color: 'white', fontSize: 16 }}>{description}</Text>
        </View>
    )
}

export default DescriptionComponent

const styles = StyleSheet.create({})