import { Animated, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'

interface CustomButtonProps {
    isButtonWrong?: boolean;
    isButtonCorrect?: boolean;
}

const ResponseAnimatedEffect: React.FC<CustomButtonProps> = ({ isButtonCorrect, isButtonWrong }) => {

    const widthAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {

        Animated.timing(widthAnim, {
            toValue: isButtonCorrect || isButtonWrong ? 1 : 0,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, [isButtonWrong, isButtonCorrect]);

    return (
        <Animated.View
            style={[
                styles.before,
                {
                    width: widthAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0%', '150%'],
                    })
                },
                isButtonWrong && styles.answerWrong,
                isButtonCorrect && styles.answerCorrect,
                !isButtonWrong && !isButtonCorrect && styles.answerNeutral
            ]}
        />
    )
}

export default ResponseAnimatedEffect

const styles = StyleSheet.create({
    before: {
        position: 'absolute',
        height: 100,
        borderRadius: 5,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
    },
    answerCorrect: {
        backgroundColor: 'rgba(41, 144, 14, .8)',
    },
    answerWrong: {
        backgroundColor: 'rgba(255,0,0,.40)',
    },
    answerNeutral: {
        backgroundColor: 'transparent'
    }
})