import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

interface Props {
    isButtonWrong?: boolean;
    isButtonCorrect?: boolean;
    isUserCorrect?: boolean
}


const AnswerGif: React.FC<Props> = ({ isButtonWrong, isButtonCorrect, isUserCorrect }) => {

    return (
        <View style={styles.imageContainer}>
            {isButtonWrong && (
                <Image
                    style={styles.imageStyleWrong}
                    source={require('@/assets/images/wrong.gif')}
                    resizeMode='cover'
                />)}
            {isUserCorrect && isButtonCorrect && (
                <Image
                    style={styles.imageStyleCorrect}
                    source={require('@/assets/images/correct.gif')}
                    resizeMode='cover'
                />
            )}
        </View>
    );
};

export default AnswerGif;

const styles = StyleSheet.create({
    imageContainer: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ rotateY: '180deg' }],
    },
    imageStyleWrong: {
        width: '100%',
        height: '100%',
        transform: [{ rotateX: '180deg' }, { translateY: -10 }],
    },
    imageStyleCorrect: {
        width: '100%',
        height: '100%',
    },
});
