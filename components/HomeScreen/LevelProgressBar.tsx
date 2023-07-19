import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {useState, useEffect} from 'react'
import React from 'react'

  type LevelProgressBarProps = {
    currentUser: any
  };

  const levelPointsLookup = {
    ONE: { maxPoints: 50, nextLevel: 'TWO' },
    TWO: { maxPoints: 100, nextLevel: 'THREE' },
    THREE: { maxPoints: 200, nextLevel: 'FOUR' },
  };


  // COPY PROGRESS BAR IN POCKETS

  const LevelProgressBar: React.FC<LevelProgressBarProps> = ({currentUser}) => {
    
    const [maxPoints, setMaxPoints] = useState(0);
    const [nextLevel, setNextLevel] = useState('');
  
    useEffect(() => {
      if (currentUser && currentUser.level) {
        const { maxPoints, nextLevel } = levelPointsLookup[currentUser.level];
        setMaxPoints(maxPoints);
        setNextLevel(nextLevel);
      }
    }, [currentUser]);
  
    return (
      <View style={styles.container}>
        <Text>
          {currentUser ? currentUser.points : null} points / {maxPoints} points
        </Text>
      </View>
    );
  };


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    width: 300,
    height: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
  }
})

export default LevelProgressBar