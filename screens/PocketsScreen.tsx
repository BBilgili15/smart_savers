import {View, Text, StyleSheet} from 'react-native'
import {useState} from 'react'
import React from 'react'
import LottieView from 'lottie-react-native';

// Import Components
import PocketCard from '../components/PocketsScreen/PocketCard';
import PocketContainer from '../components/PocketsScreen/PocketContainer';
import PocketInformationContainer from '../components/PocketsScreen/PocketInformationContainer';

  type PocketsScreenProps = {
    currentUser:any
    goals: any
    setGoals: (param: any) => void;
  };

  const PocketsScreen: React.FC<PocketsScreenProps> = ({currentUser, goals, setGoals}) => {
    
 



  // Animation Functions
  const [showAnimation, setShowAnimation] = useState(false);

  const handleButtonClick = () => {
    setShowAnimation(true);
  };

  const onAnimationFinish = () => {
    setShowAnimation(false);
  };
 
   


  return (
    <View style={styles.container}>
        {showAnimation && (
        <LottieView
          source={require('../animations/success.json')}
          autoPlay
          loop={false}
          onAnimationFinish={onAnimationFinish}
          style={{zIndex: 1}}
        />
      )}
        
        <PocketInformationContainer handleButtonClick={handleButtonClick} currentUser={currentUser} goals={goals} setGoals={setGoals}/>
        <PocketContainer currentUser={currentUser} goals={goals} setGoals={setGoals}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9'
  },
});

export default PocketsScreen