import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import {useState} from 'react'
import React from 'react'

// Import Components
import ChallengeCard from './ChallengeCard';
import { dailyChallenges } from '../ChallengeScreen/DailyChallenges';

  type ChallengeContainerProps = {
  };

  const ChallengeContainer: React.FC<ChallengeContainerProps> = () => {

    const [completedChallenges, setCompletedChallenges] = useState<boolean[]>(
      new Array(dailyChallenges.length).fill(false)
    );

    const handleChallengeCompletion = (index: number) => {
      const newCompletedChallenges = [...completedChallenges];
      newCompletedChallenges[index] = true;
      setCompletedChallenges(newCompletedChallenges);
    };

    const cardColors = ['#35d0ba', '#ffcd3c', '#ff9234', '#ff7770', '#35d0ba', '#ffcd3c'];

    const challengeComponents = dailyChallenges.map((challenge, index) => (
      <ChallengeCard
        key={index}
        color={cardColors[index % cardColors.length]}
        completedDailyChallenge={completedChallenges[index]}
        setCompletedDailyChallenge={() => handleChallengeCompletion(index)}
        challengeIndex={index}
        challenges={dailyChallenges}
      />
    ))
  

    return (
      <ScrollView style={styles.container}>
      <View style={styles.gridContainer}>
        {challengeComponents}
        {/* <ChallengeCard
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
          setCompletedDailyChallenge={() => setCompletedDailyChallenge(!completedDailyChallenge)}
        />
        <ChallengeCard
          color="#35d0ba"
          completedDailyChallenge={completedDailyChallenge2}
          setCompletedDailyChallenge={() => setCompletedDailyChallenge1(!completedDailyChallenge1)}
        />
        <ChallengeCard
          color="#ffcd3c"
          completedDailyChallenge={completedDailyChallenge2}
          setCompletedDailyChallenge={() => setCompletedDailyChallenge2(!completedDailyChallenge2)}
        /> */}
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