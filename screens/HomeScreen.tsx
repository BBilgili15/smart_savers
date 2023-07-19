import {View, Text, ProgressBarAndroidComponent, ScrollView, StyleSheet } from 'react-native'
import {useState, useEffect} from 'react'
import React from 'react'
import LottieView from 'lottie-react-native';

import { getUser } from '../services/UserServices';

// import components
import AvailableBalanceDisplay from '../components/HomeScreen/AvailableBalanceDisplay';
import UpdateBalance from '../components/HomeScreen/UpdateBalance';
import UserProfile from '../components/HomeScreen/UserProfile';
import LevelProgressBar from '../components/HomeScreen/LevelProgressBar';

  type HomeScreenProps = { 
    availableAmount: number;
    setAvailableAmount: (amount:number) => void;
    currentUser: any;
    setCurrentUser: (user:any) => void;
    userTransactions:any;
    setUserTransactions:(transaction:any)=>void;
    goals: any;
    setGoals: (goals: any) => void;
  };

  const HomeScreen: React.FC<HomeScreenProps> = ({availableAmount, setAvailableAmount,currentUser, setCurrentUser,userTransactions,setUserTransactions, goals, setGoals}) => {
    
    // Right Animation
    const [showCorrectAnimation, setShowCorrectAnimation] = useState(false);

    const handleRightAnswer = () => {
      setShowCorrectAnimation(true);
    };

    const onRightAnimationFinish = () => {
      setShowCorrectAnimation(false);
    }

    useEffect(() => {
      handleRightAnswer();
    }, []);

    return (
      <ScrollView style={styles.container}>
        {showCorrectAnimation && (
          <LottieView
            source={require('../animations/celebrate.json')}
            autoPlay
            loop={false}
            onAnimationFinish={onRightAnimationFinish}
            style={{zIndex: 1}}
          />)}
        <UserProfile currentUser={currentUser} />
        <LevelProgressBar currentUser={currentUser} />
        <AvailableBalanceDisplay currentUser={currentUser} />
        <UpdateBalance currentUser={currentUser} userTransactions={userTransactions} setUserTransactions={setUserTransactions}  setCurrentUser={setCurrentUser} goals={goals} setGoals={setGoals}/>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white'
    fontFamily: 'OpenDyslexic-Regular',
  },
});




export default HomeScreen;

