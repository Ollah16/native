import { StyleSheet, View } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton';

interface Props {
    currentQuestion?: McqContent;
    handleAnswer: (userAnswer: string) => Promise<void>
}

interface McqContent {
    id?: string;
    options?: Array<{ answer: string, id: string }>;
    question?: string;
    image?: any;
    playlist?: string;
    user?: any;
    description?: any;
    userAnswer?: string;
    correctAnswer?: string;
    isAnswerClicked?: boolean
}

const ButtonContainerComp: React.FC<Props> = ({ currentQuestion, handleAnswer }) => {
    return (
        <View style={styles.buttonContainer}>
            {currentQuestion?.options?.map((item, index) => {

                const correctAnswerId = currentQuestion.correctAnswer
                const userAnswerId = currentQuestion.userAnswer
                const isUserCorrect = correctAnswerId !== '' && userAnswerId != '' && correctAnswerId === userAnswerId;
                const isButtonCorrect = correctAnswerId === item.id;
                const isButtonWrong = !isUserCorrect && userAnswerId === item.id;

                return (
                    <CustomButton
                        key={index}
                        title={item.answer}
                        handlePress={() => handleAnswer(item.id)}
                        isButtonCorrect={isButtonCorrect}
                        isUserCorrect={isUserCorrect}
                        isButtonWrong={isButtonWrong}
                    />
                );
            })}
        </View>
    )
}

export default ButtonContainerComp

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'space-between',
        marginBottom: 10,
    }
})