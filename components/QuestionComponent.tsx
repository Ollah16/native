import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    question?: string
}

const QuestionComponent: React.FC<Props> = ({ question }) => {
    return (
        question && (
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>{question}</Text>
            </View>
        )
    )
}

export default QuestionComponent

const styles = StyleSheet.create({
    questionContainer: {
        marginBottom: 16,
        maxWidth: '80%',
    },
    questionText: {
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 8,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left'
    }
})