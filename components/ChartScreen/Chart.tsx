import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getTransactions } from "../../services/TransactionServices";
type ChartProps = {
  currentUser: {
    id: number;
    userName: string;
    parentEmail: string;
    points: number;
    level: any;
    balance: number;
  } | null;
  userTransactions:{
    id: number,
    category: any,
    amount: number,
    // user:object
  }[] | null;
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
};
const Chart: React.FC<ChartProps> = ({ selectedTab, currentUser,userTransactions }) => {
console.log("Current user:", currentUser);
console.log("Current transaction", userTransactions);
  return (
    <View>
      {selectedTab === "income" ? (
        <>
          <Text>currentUser:{currentUser?.userName}</Text>
          <Text>currentUser's balance:{currentUser?.balance}</Text>
          <Text>currentUser's transaction: {userTransactions && userTransactions[3] && userTransactions[3]?.amount}</Text>
        </>
      ) : (
        <View>
          <Text>Outgoing contents</Text>
        </View>
      )}
    </View>
  );
};
export default Chart;
