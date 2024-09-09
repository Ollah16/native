import React from 'react';
import { Pressable, Text, StyleSheet, GestureResponderEvent, View, Image } from 'react-native';
import ResponseAnimatedEffect from './ResponseAnimatedEffect';
import AnswerGif from './AnswerGif';

interface CustomButtonProps {
    title: string;
    handlePress: (event: GestureResponderEvent) => void;
    isButtonWrong?: boolean;
    isButtonCorrect?: boolean;
    isUserCorrect?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ isButtonWrong,
    isButtonCorrect,
    isUserCorrect,
    title,
    handlePress }) => {

    return (
        <Pressable
            style={styles.button}
            onPress={handlePress}
        >
            {/* Animation Effect */}
            <ResponseAnimatedEffect isButtonWrong={isButtonWrong} isButtonCorrect={isButtonCorrect} />

            {/* Button Text */}
            <View style={styles.textContainer}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>

            {/* Gif effect */}
            <AnswerGif isButtonWrong={isButtonWrong} isButtonCorrect={isButtonCorrect} isUserCorrect={isUserCorrect} />

        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        borderRadius: 8,
        marginVertical: 2,
        position: 'relative',
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        backgroundColor: 'rgba(128, 128, 128, 0.8)',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textContainer: {
        height: '100%',
        width: '90%',
        justifyContent: 'center',
        zIndex: 1,
        paddingHorizontal: 6,
        paddingVertical: 5,
        flex: 1
    },
});

export default CustomButton;
