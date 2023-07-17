import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { VictoryPie } from "victory-native";
type ChartProps = {
  currentUser: {
    id: number;
    userName: string;
    parentEmail: string;
    points: number;
    level: any;
    balance: number;
  } | null;
  userTransactions: {
    id: number;
    category: any;
    amount: number;
    user: object;
  }[] | null;
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
};


const Chart: React.FC<ChartProps> = ({
  selectedTab,
  currentUser,
  userTransactions,
}) => {
  const [graphicData, setGraphicData] = useState<{ x: string; y: number }[]>([]);
  
  useEffect(() => {
    if (userTransactions) {
      const incomeCategories = [
        "EARNINGS",
        "POCKET_MONEY",
        "GIFT",
        "OTHER_INCOME",
      ];
      const outgoingCategories = [
        "ENTERTAINMENT",
        "FOOD",
        "TRANSPORT",
        "OTHER_SPEND",
        "SHOPPING",
      ];
      let filteredTransactions: {
        id: number;
        category: any;
        amount: number;
        user: object;
      }[] = [];


      if (selectedTab === "income") {
        filteredTransactions = userTransactions.filter((transaction) =>
          incomeCategories.includes(transaction.category.toUpperCase())
        );
      } else if (selectedTab === "outgoing") {
        filteredTransactions = userTransactions.filter((transaction) =>
          outgoingCategories.includes(transaction.category.toUpperCase())
        );
      }

      // Aggregate amounts by category
      const categoryAmounts: { [category: string]: number } = {};
      filteredTransactions.forEach((transaction) => {
        const category = transaction.category.toLowerCase();
        if (category in categoryAmounts) {
          categoryAmounts[category] += transaction.amount;
        } else {
          categoryAmounts[category] = transaction.amount;
        }
      });
      // Convert aggregated data to required format
      const graphData = Object.entries(categoryAmounts).map(
        ([category, amount]) => ({
          x: category,
          y: amount,
        })
      );
      setGraphicData(graphData);
    }
  }, [selectedTab, userTransactions]);
  return (
    <View style={{ justifyContent: "center", marginLeft: 15, marginTop: 90 }}>
      <VictoryPie
        padAngle={({ datum }) => datum.y * 0.05}
        cornerRadius={({ datum }) => datum.y * 0.1}
        padding={60}
        width={350}
        height={350}
        colorScale={["tomato", "orange", "gold", "cyan", "purple"]}
        animate={{ easing: "exp" }}
        data={graphicData}
        innerRadius={40}
        style={{
          data: {
            fillOpacity: 0.9,
            strokeWidth: 5,
          },
          labels: {
            fill: "purple",
            fontSize: 15,
          },
        }}
      />
      <View>
        {graphicData.map((data) => (
          <View key={data.x}>
            <Text>
             <Text>{data.x}: </Text>
              <Text>£ {data.y}</Text>
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};
export default Chart;







