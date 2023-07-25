import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type ChallengeCardProps = {
  color: string;
  completedDailyChallenge: boolean;
  setCompletedDailyChallenge: () => void;
  challengeIndex: number;
  challenges: Array<any>;
};

const ChallengeCard: React.FC<ChallengeCardProps> = ({ color, completedDailyChallenge, setCompletedDailyChallenge, challengeIndex, challenges }) => {
  const navigation = useNavigation();

  const launchDailyChallenge = () => {
    if (!completedDailyChallenge) {
      navigation.navigate('ChallengeScreen', {
        challenge: challenges[challengeIndex],
      });
      setCompletedDailyChallenge();
    }
  };

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]} onPress={() => launchDailyChallenge()}>
      <Text style={styles.text}>Daily Challenge</Text>
      <Image
        source={completedDailyChallenge ? require('../../images/check.png') : require('../../images/unchecked.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDE9B1',
    width: 180,
    height: 200,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderColor: '#fcfcfc',
    borderWidth: 2,
  },
  image: {
    height: 40,
    width: 40,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'OpenDyslexic-Regular',
  },
});

export default ChallengeCard;
