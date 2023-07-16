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

  const cardBackgroundColor = isPressed ? 'lightblue' : backgroundColor; // Use the prop for background color

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: cardBackgroundColor }]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handleButtonClick}
    >
      <Text>{answerText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 175,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: 'gray',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 5,
    shadowRadius: 4,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
  },
});

export default AnswerCard;
