import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import {useState} from 'react'
import React from 'react'

// Import Components
import ChallengeCard from './ChallengeCard';

  type ChallengeContainerProps = {
  };

  const ChallengeContainer: React.FC<ChallengeContainerProps> = () => {

    const [completedDailyChallenge, setCompletedDailyChallenge] = useState(false);
    const [completedDailyChallenge1, setCompletedDailyChallenge1] = useState(false);
    const [completedDailyChallenge2, setCompletedDailyChallenge2] = useState(false);
  

    return (
      <ScrollView style={styles.container}>
      <View style={styles.gridContainer}>
        <ChallengeCard
          color="#FDE9B1"
          completedDailyChallenge={completedDailyChallenge}
          setCompletedDailyChallenge={() => setCompletedDailyChallenge(!completedDailyChallenge)}
        />
        <ChallengeCard
          color="#ffcde2"
          completedDailyChallenge={completedDailyChallenge1}
          setCompletedDailyChallenge={() => setCompletedDailyChallenge1(!completedDailyChallenge1)}
        />
        <ChallengeCard
          color="#c6ffd5"
          completedDailyChallenge={completedDailyChallenge2}
          setCompletedDailyChallenge={() => setCompletedDailyChallenge2(!completedDailyChallenge2)}
        />
        <ChallengeCard
          color="#c6ccff"
          completedDailyChallenge={completedDailyChallenge2}
          setCompletedDailyChallenge={() => setCompletedDailyChallenge2(!completedDailyChallenge2)}
        />
        <ChallengeCard
          color="#c6ffff"
          completedDailyChallenge={completedDailyChallenge2}
          setCompletedDailyChallenge={() => setCompletedDailyChallenge2(!completedDailyChallenge2)}
        />
        <ChallengeCard
          color="#ffc6c6"
          completedDailyChallenge={completedDailyChallenge2}
          setCompletedDailyChallenge={() => setCompletedDailyChallenge2(!completedDailyChallenge2)}
        />
      </View>
    </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      // backgroundColor: 'lightblue',
      width: 400,
      height: 900,
      alignSelf: 'center',
      margin: 10,
    },
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
  });
  
  export default ChallengeContainer;