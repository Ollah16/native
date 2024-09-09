import { ImageBackground, NativeScrollEvent, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComponent from './HeaderComponent'
import QuestionComponent from './QuestionComponent'
import ButtonContainerComp from './ButtonContainerComp'
import DescriptionComponent from './DescriptionComponent'
import QuickAccess from './QuickAccess'
import PlayListComponent from './PlayListComponent'

interface Props {
    currentQuestion: McqContent;
    handleAnswer: (userAnswer: string) => Promise<void>;
    handleScroll: (event: NativeScrollEvent) => void;
    displayTime: string;
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

const CurrentScreen: React.FC<Props> = ({ currentQuestion, handleAnswer, handleScroll, displayTime }) => {

    const { question, image, playlist, user, description } = currentQuestion;

    return (
        <ImageBackground
            source={{ uri: image }}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                onScroll={({ nativeEvent }) => handleScroll(nativeEvent)}
                scrollEventThrottle={400}
            >
                <View style={styles.viewsContainer}>
                    <View>
                        {/* Header with display time */}
                        <HeaderComponent displayTime={displayTime} />
                        {/* Question section */}
                        <QuestionComponent question={question} />
                    </View>

                    <View>
                        {/* Bottom section with buttons and description */}

                        <View style={styles.bottomSection}>
                            <View style={styles.bottomContent}>
                                <ButtonContainerComp currentQuestion={currentQuestion} handleAnswer={handleAnswer} />
                                <DescriptionComponent description={description} user={user} />
                            </View>
                            <QuickAccess />
                        </View>

                        {/* Playlist component */}
                        <PlayListComponent playlist={playlist} />
                    </View>
                </View>
            </ScrollView>
        </ImageBackground >

    )
}

export default CurrentScreen

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
    },
    scrollView: {
        flex: 1,
        height: '100%'
    },
    scrollContent: {
        flexGrow: 1,
    },
    viewsContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'space-between'
    },
    bottomSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        gap: 5,
        marginBottom: 8
    },
    bottomContent: {
        width: '90%'
    }
})