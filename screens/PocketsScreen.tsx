import {View, Text} from 'react-native'
import {useState} from 'react'
import React from 'react'
import LottieView from 'lottie-react-native';

// Import Components
import PocketCard from '../components/PocketsScreen/PocketCard';
import PocketContainer from '../components/PocketsScreen/PocketContainer';
import PocketInformationContainer from '../components/PocketsScreen/PocketInformationContainer';

  type PocketsScreenProps = {
    currentUser:any
  };

  const PocketsScreen: React.FC<PocketsScreenProps> = ({currentUser}) => {
    
  const [showAnimation, setShowAnimation] = useState(false);

  const handleButtonClick = () => {
    setShowAnimation(true);
  };

  const onAnimationFinish = () => {
    setShowAnimation(false);
  };
 
   


  return (
    <View>
        {showAnimation && (
        <LottieView
          source={require('../animations/success.json')}
          autoPlay
          loop={false}
          onAnimationFinish={onAnimationFinish}
          style={{zIndex: 1}}
        />
      )}
        
        <PocketInformationContainer handleButtonClick={handleButtonClick} currentUser={currentUser}/>
        <PocketContainer/>
    </View>
  )
}

export default PocketsScreen