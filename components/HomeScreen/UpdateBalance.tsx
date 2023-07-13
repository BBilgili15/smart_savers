import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {useState} from 'react'
import React from 'react'

  type UpdateBalanceProps = {
    currentUser: any
  };

  const UpdateBalance: React.FC<UpdateBalanceProps> = () => {
  
    // const updateAvailableAmount = (amount: number) => {
    //   const newAmount: number = availableAmount + amount;
    //   setAvailableAmount(newAmount);
    // }

  


  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Income</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Spend</Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightpink',
    flexDirection: 'row',
    width: 400,
    height: 100,
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'space-evenly',
  }, 
  text: {
    fontSize: 20,
  }, 
  button: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 15,
    backgroundColor: 'lightblue',
    height: 75,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  }
})

export default UpdateBalance