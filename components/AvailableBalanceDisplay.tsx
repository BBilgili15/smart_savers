import {View, Text} from 'react-native'
import {useState} from 'react'
import React from 'react'

  type AvailableBalanceProps = {
    availableAmount: number;
  };

  const AvailableBalanceDisplay: React.FC<AvailableBalanceProps> = () => {
    const [availableAmount, setAvailableAmount] = useState<number>(0);
  
    const updateAvailableAmount = (amount: number) => {
      const newAmount: number = availableAmount + amount;
      setAvailableAmount(newAmount);
    }

  


  return (
    <View>
      <Text>Available Amount</Text>
      {/* Touch */}
    </View>
  )
}

export default AvailableBalanceDisplay