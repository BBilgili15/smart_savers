import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type ChallengeCardProps = {
  completedDailyChallenge: boolean;
  setCompletedDailyChallenge: (prop: any) => void;
};

const ChallengeCard: React.FC<ChallengeCardProps> = ({ completedDailyChallenge, setCompletedDailyChallenge }) => {
  const navigation = useNavigation();

  const launchDailyChallenge = () => {
    if (!completedDailyChallenge) {
      navigation.navigate('ChallengeScreen' as never);
      setCompletedDailyChallenge(true);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => launchDailyChallenge()}>
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
    width: 400,
    height: 75,
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
    flexDirection: 'row',
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderColor: '#FFD700',
    borderWidth: 2,
  },
  image: {
    height: 40,
    width: 40,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    // color: '#FFD700',
  },
});

export default ChallengeCard;
