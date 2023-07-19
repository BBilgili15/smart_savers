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


  const progressPercentage = (currentUser.points / maxPoints) * 100;
  const foregroundWidth = Math.max((350 * progressPercentage) / 100, 0.1 * 350); // minimum width is now 10%

  
    return (
      <View style={styles.mainContainer}>
        <Text style={{fontFamily: 'OpenDyslexic-Regular',}}>{currentUser ? currentUser.points : null}</Text>
        <View style={styles.savingBarBackground}>
        <View style={[styles.savingBarForeground, { width: `${progressPercentage}%` }]}></View>
        </View>
        <Text style={{fontFamily: 'OpenDyslexic-Regular',}}>{maxPoints}</Text>
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
    // marginBottom: 10,
  }, 
  mainContainer: {
    // backgroundColor: 'lightblue',
    width: 500,
    height: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 30,
    flexDirection: 'row',
  }, 
  savingBarBackground: {
    width: 300,
    height: 20,
    backgroundColor: '#FFDFDF',
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  savingBarForeground: {
    height: 20,
    backgroundColor: '#FF4D4D',
    borderRadius: 10,
  },
})

export default LevelProgressBar