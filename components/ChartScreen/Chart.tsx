import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
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

type CategoryColors = {
  [category: string]: string;
};

const Chart: React.FC<ChartProps> = ({
  selectedTab,
  currentUser,
  userTransactions,
}) => {
  const [graphicData, setGraphicData] = useState<{ x: string; y: number }[]>([]);

  useEffect(() => {
    if (userTransactions) {
      const colorforcategories: CategoryColors = {
        EARNINGS: "#FFCD3C",
        POCKET_MONEY: "#FF9234",
        GIFT: "#35D0BA",
        OTHER_INCOME: "#F15C55",
        ENTERTAINMENT: "#8C52FF",
        FOOD: "#F15C55",
        TRANSPORT: "#FF9234",
        OTHER_SPEND: "#35D0BA",
        SHOPPING: "#FFCD3C",
      };

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
          transaction.category &&
          incomeCategories.includes(transaction.category.toUpperCase())
        );
      } else if (selectedTab === "outgoing") {
        filteredTransactions = userTransactions.filter((transaction) =>
          transaction.category &&
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

      // Convert aggregated data to required format, including category-specific colors
      const graphData = Object.entries(categoryAmounts).map(
        ([category, amount]) => ({
          x: category,
          y: amount,
          label: `£${amount.toFixed(2)}`,
          color: colorforcategories[category.toUpperCase()] || "#cccccc", // Default color if category color is not defined
        })
      );
      setGraphicData(graphData);
    }
  }, [selectedTab, userTransactions]);

  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <VictoryPie
          standalone={true}
          padAngle={({ datum }) => datum.y * 0.05}
          cornerRadius={({ datum }) => datum.y * 0.1}
          padding={60}
          width={350}
          height={350}
          colorScale={graphicData.map((datum) => datum.color)}
          animate={{ easing: "exp" }}
          data={graphicData}
          innerRadius={40}
          style={{
            data: {
              flex: 1,
              fillOpacity: 0.9,
              strokeWidth: 5,
            },
            labels: {
              fill: "purple",
              fontSize: 15,
            },
          }}
        />

        {selectedTab === "income" && (
          <View style={styles.imageContainer}>
            <Image
              style={styles.img}
              source={require("../../images/income_legend_720.png")}
            />
          </View>
        )}

        {selectedTab === "outgoing" && (
          <View style={styles.imageContainer}>
            <Image
              style={styles.img2}
              source={require("../../images/expenses_legend_720.png")}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 50,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90,
  },
  chartContainer: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  img2: {
    height: 110,
    width: "48%",
  },
  img: {
    height: 110,
    width: "48%",
  },
});
