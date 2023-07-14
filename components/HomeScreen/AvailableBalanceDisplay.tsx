import {View, Text, StyleSheet} from 'react-native'
import {useState} from 'react'
import React from 'react'

  type AvailableBalanceProps = {
    currentUser: any
  };

  const AvailableBalanceDisplay: React.FC<AvailableBalanceProps> = ({currentUser}) => {
    
    // const [availableAmount, setAvailableAmount] = useState<number>(0);
  
    // const updateAvailableAmount = (amount: number) => {
    //   const newAmount: number = availableAmount + amount;
    //   setAvailableAmount(newAmount);
    // }

  


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Balance: {currentUser ? '£' + currentUser.balance : null}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightpink',
    width: 300,
    height: 100,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderColor: 'black',
    borderWidth: 2,
  }, 
  text: {
    fontSize: 30,
  }
})

export default AvailableBalanceDisplay