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
          color="#35d0ba"
          completedDailyChallenge={completedDailyChallenge}
          setCompletedDailyChallenge={() => setCompletedDailyChallenge(!completedDailyChallenge)}
        />
        <ChallengeCard
          color="#ffcd3c"
          completedDailyChallenge={completedDailyChallenge1}
          setCompletedDailyChallenge={() => setCompletedDailyChallenge1(!completedDailyChallenge1)}
        />
        <ChallengeCard
          color="#ff9234"
          completedDailyChallenge={completedDailyChallenge2}
          setCompletedDailyChallenge={() => setCompletedDailyChallenge2(!completedDailyChallenge2)}
        />
        <ChallengeCard
          color="#ff7770"
          completedDailyChallenge={completedDailyChallenge2}
          setCompletedDailyChallenge={() => setCompletedDailyChallenge2(!completedDailyChallenge2)}
        />
        <ChallengeCard
          color="#35d0ba"
          completedDailyChallenge={completedDailyChallenge2}
          setCompletedDailyChallenge={() => setCompletedDailyChallenge2(!completedDailyChallenge2)}
        />
        <ChallengeCard
          color="#ffcd3c"
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