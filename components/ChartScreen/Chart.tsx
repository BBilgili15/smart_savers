import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getTransactions } from "../../services/TransactionServices";

type ChartProps = {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
};

const Chart: React.FC<ChartProps> = ({ selectedTab }) => {
  const [currentTransaction, setCurrentTransaction] = useState<{
    id: number;
    amount: number;
    category: any;
  } | null>(null);

  useEffect(() => {
    getTransactions().then((newTransactions) =>
      setCurrentTransaction(newTransactions[0])
    );
  }, []);

  console.log("Current Transaction:", currentTransaction);

  return (
    <View>
      {selectedTab === "income" ? (
        <>
          <Text>Transactions</Text>
          <Text>{currentTransaction ? currentTransaction.amount : null}</Text>
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
