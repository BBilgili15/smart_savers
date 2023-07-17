import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import React from 'react';

type AnswerCardProps = {
  answerText: string;
  handleButtonClick: () => void;
  backgroundColor: string; // New prop for background color
};

const AnswerCard: React.FC<AnswerCardProps> = ({ answerText, handleButtonClick, backgroundColor }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const cardBackgroundColor = isPressed ? 'white' : backgroundColor; // Use the prop for background color

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: cardBackgroundColor }]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handleButtonClick}
    >
      <Text style={styles.answerText}>{answerText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 175,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  answerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default AnswerCard;
