import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
type ToggleProps = {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
};
const Toggle: React.FC<ToggleProps> = ({ selectedTab, setSelectedTab }) => {
  return (
    <View style={styles.toggleContainer}>
      <TouchableOpacity
        style={[
          styles.tabButton,
          selectedTab === "income" && styles.selectedTabButton,
        ]}
        onPress={() => setSelectedTab("income")}
      >
        <Text
          style={[
            styles.tabText,
            selectedTab === "income" && styles.selectedTabText,
          ]}
        >
          INCOME
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.tabButton,
          selectedTab === "outgoing" && styles.selectedTabButton,
        ]}
        onPress={() => setSelectedTab("outgoing")}
      >
        <Text
          style={[
            styles.tabText,
            selectedTab === "outgoing" && styles.selectedTabText,
          ]}
        >
          SPENDING
        </Text>
      </TouchableOpacity>
    </View>
  );
};
// const styles = StyleSheet.create({
//   toggleContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     height: 45,
//     borderWidth: 1,
//     borderRadius: 30,
//     borderColor: "#ccc",
//     marginVertical: 10,
//   },
//   tabButton: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingVertical: 10,
//   },
//   selectedTabButton: {
//     backgroundColor: "pink",
//     borderRadius:30,
//     marginLeft:2,
//     marginRight:2
//   },
//   tabText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#7D7D7D",
//   },
//   selectedTabText: {
//     color: "#0F907B",
//   },
// });


// Alternative Style Option

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    borderRadius: 30,
    borderColor: "#E0E0E0",
    marginVertical: 10,
    backgroundColor: "#F8F8F8",
    overflow: "hidden",
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  selectedTabButton: {
    backgroundColor: "#FF8C8C",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#7D7D7D",
  },
  selectedTabText: {
    color: "#FFF",
  },
});


export default Toggle;