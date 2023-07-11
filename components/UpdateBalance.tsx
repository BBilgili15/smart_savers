import {View, Text, TouchableOpacity} from 'react-native'
import {useState} from 'react'
import React from 'react'

  type UpdateBalanceProps = {
    availableAmount: number;
    setAvailableAmount: (amount:number) => void;
  };

  const UpdateBalance: React.FC<UpdateBalanceProps> = ({availableAmount, setAvailableAmount}) => {
  
    const updateAvailableAmount = (amount: number) => {
      const newAmount: number = availableAmount + amount;
      setAvailableAmount(newAmount);
    }

  


  return (
    <View>
        <TouchableOpacity>
            <Text>Income</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>Saving</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>Spending</Text>
        </TouchableOpacity>
    </View>
  )
}

export default UpdateBalance