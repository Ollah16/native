import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, NativeScrollEvent } from 'react-native';
import { getAnswer, getQuestion } from '@/lib/axios';
import CurrentScreen from '@/components/CurrentScroll';

interface AnswerOption {
    id: string;
    answer: string;
}

interface McqContent {
    id?: string;
    options?: Array<{ answer: string; id: string }>;
    question?: string;
    image?: any;
    playlist?: string;
    user?: any;
    description?: any;
    userAnswer?: string;
    correctAnswer?: string;
    isAnswerClicked?: boolean;
}

const LandingPage = () => {
    const [elapsedSeconds, setElapsedSeconds] = useState(0);
    const [formattedTime, setFormattedTime] = useState('0s');
    const [previousQuestions, setPreviousQuestions] = useState<McqContent[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<McqContent>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [lastScrollPosition, setLastScrollPosition] = useState<number>(0);
    const [hasScrolledUp, setHasScrolledUp] = useState(false);

    const { id } = currentQuestion;

    // Fetch a new question when the component mounts
    useEffect(() => {
        fetchNewQuestion();
    }, []);

    // Track the elapsed time in seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setElapsedSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Format the elapsed time for display
    useEffect(() => {
        const hours = Math.floor(elapsedSeconds / 3600);
        const minutes = Math.floor((elapsedSeconds % 3600) / 60);
        const seconds = elapsedSeconds % 60;

        setFormattedTime(
            hours > 0 ? `${hours}h ${minutes}m` :
                minutes > 0 ? `${minutes}m` :
                    `${seconds}s`
        );
    }, [elapsedSeconds]);

    // Fetch a new question from the API
    const fetchNewQuestion = async () => {
        if (isLoading) return;

        setIsLoading(true);
        try {
            const response = await getQuestion();
            setCurrentQuestion({ ...response, userAnswer: "", correctAnswer: "", isAnswerClicked: false });
        } catch (error) {
            console.error('Failed to fetch question:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle user's answer selection
    const handleAnswerSelection = async (userAnswer: string) => {
        if (currentQuestion.isAnswerClicked) return;

        try {
            const response = await getAnswer(id);
            const { correct_options }: { correct_options: AnswerOption[] } = response;

            const correctAnswer = correct_options.find(option => option.id);
            if (!correctAnswer) {
                console.error('Correct answer not found');
                return;
            }

            setCurrentQuestion(prev => ({
                ...prev,
                userAnswer,
                correctAnswer: correctAnswer.id,
                isAnswerClicked: true,
            }));

            if (previousQuestions.some(prev => prev.id === id)) {
                const updatedQuestions = previousQuestions.map(prev =>
                    prev.id === id
                        ? { ...prev, userAnswer, correctAnswer: correctAnswer.id, isAnswerClicked: true }
                        : prev
                );
                setPreviousQuestions(updatedQuestions);
            }
        } catch (error) {
            console.error('Error fetching the answer:', error);
        }
    };

    // Handle scroll events to load new questions or navigate back
    const handleScroll = (event: NativeScrollEvent) => {
        const { contentOffset, contentSize, layoutMeasurement } = event;
        const currentScrollPosition = contentOffset.y;

        const isScrollingDown = currentScrollPosition > lastScrollPosition;
        const isScrollingUp = currentScrollPosition < lastScrollPosition;

        setLastScrollPosition(currentScrollPosition);
        setHasScrolledUp(false);

        if (isScrollingDown && !isLoading) {
            if (currentScrollPosition >= contentSize.height - layoutMeasurement.height - 100 && currentScrollPosition > 10) {
                if (!previousQuestions.some(prev => prev.id === id)) {
                    setPreviousQuestions(prev => [...prev, currentQuestion]);
                }
                fetchNewQuestion();
            }
        }

        if (isScrollingUp && !isLoading && !hasScrolledUp) {
            if (currentScrollPosition < contentSize.height - layoutMeasurement.height) {
                const previousContent = previousQuestions.pop();
                if (previousContent) {
                    setPreviousQuestions(prev => [previousContent, ...prev]);
                    setCurrentQuestion(previousContent);
                }
                setHasScrolledUp(true);
            }
        } else if (isScrollingDown) {
            setHasScrolledUp(false);
        }
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <CurrentScreen
                currentQuestion={currentQuestion}
                handleAnswer={handleAnswerSelection}
                displayTime={formattedTime}
                handleScroll={handleScroll}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
});

export default LandingPage;
