import {View, Text, ProgressBarAndroidComponent, ScrollView} from 'react-native'
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
    goals: any;
    setGoals: (goals: any) => void;
  };

  const HomeScreen: React.FC<HomeScreenProps> = ({availableAmount, setAvailableAmount,currentUser, setCurrentUser,userTransactions,setUserTransactions, goals, setGoals}) => {
    
    return (
      <ScrollView>
        <UserProfile currentUser={currentUser} />
        <LevelProgressBar currentUser={currentUser} />
        <AvailableBalanceDisplay currentUser={currentUser} />
        <UpdateBalance currentUser={currentUser} userTransactions={userTransactions} setUserTransactions={setUserTransactions}  setCurrentUser={setCurrentUser} goals={goals} setGoals={setGoals}/>
      </ScrollView>
    );
}

export default HomeScreen