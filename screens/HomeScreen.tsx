import {View, Text, ProgressBarAndroidComponent} from 'react-native'
import {useState, useEffect} from 'react'
import React from 'react'

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
  };

  const HomeScreen: React.FC<HomeScreenProps> = ({availableAmount, setAvailableAmount,currentUser, setCurrentUser,userTransactions,setUserTransactions}) => {
    
  
 


    return (
      <View>
        <UserProfile currentUser={currentUser} />
        <LevelProgressBar currentUser={currentUser} />
        <AvailableBalanceDisplay currentUser={currentUser} />
        <UpdateBalance currentUser={currentUser} userTransactions={userTransactions} setUserTransactions={setUserTransactions}  setCurrentUser={setCurrentUser}/>
      </View>
    );
}

export default HomeScreen


//  {
//     "category": "FOOD",
//     "amount": 90.0,
//     "user": {
//       "id": 1,
//       "userName": "Ben",
//       "parentEmail": "parent@test.com",
//       "points": 0,
//       "level": "ONE",
//       "balance": 85.0
//     }
//   }