import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useState, useEffect } from "react";

// Import Screens
import ChallengeDashboardScreen from "../screens/ChallengeDashboardScreen";
import ChallengeScreen from "../screens/ChallengeScreen";
import ChartsScreen from "../screens/ChartsScreen";
import HomeScreen from "../screens/HomeScreen";
import PocketsScreen from "../screens/PocketsScreen";

import { getUser } from "../services/UserServices";
import { getTransactionsByUserId } from "../services/TransactionServices";

// Creating the stacks
const Stack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

// Creating the component for inside stack layout
function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen
        name="bottomTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </InsideStack.Navigator>
  );
}

// Creating the bottom tab navigator & view functions
const Tab = createBottomTabNavigator();

function TabNavigator() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userTransactions, setUserTransactions] = useState([]);

  // useEffect
  useEffect(() => {
    getUser(1).then((newUser) => setCurrentUser(newUser));
  }, []);

  useEffect(() => {
    if (currentUser) {
      getTransactionsByUserId(1)
        // getTransactionsByUserId(currentUser.id) error: Property 'id' does not exist on type 'never'.ts(2339)
        .then((transactions) => setUserTransactions(transactions))
        .catch((error) => {
          console.log("Error fetching transactions:", error);
        });
    }
  }, [currentUser]);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HO"
        component={Home}
        options={{
          tabBarLabel: "HOME",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "purple",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="DC"
        component={GamesHub}
        options={{
          tabBarLabel: "GAME",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="gamepad" color={color} size={size} />
          ),
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "purple",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="HT"
        component={Habits}
        options={{
          tabBarLabel: "CHART",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="barschart" color={color} size={size} />
          ),
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "purple",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SG"
        component={Pockets}
        options={{
          tabBarLabel: "POCKETS",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wallet" color={color} size={size} />
          ),
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "purple",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

// View Functions (Bottom Bar Tabs)
function GamesHub() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChallengeDashBoardScreen"
        component={ChallengeDashboardScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChallengeScreen"
        component={ChallengeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function Habits() {
  return (
    <ChartsScreen
      currentUser={currentUser}
      userTransactions={userTransactions}
    />
  );
}

function Pockets() {
  return <PocketsScreen />;
}

function Home() {
  const [availableAmount, setAvailableAmount] = useState<number>(0);

  return (
    <HomeScreen
      currentUser={currentUser}
      setCurrentUser={setCurrentUser}
      availableAmount={availableAmount}
      setAvailableAmount={setAvailableAmount}
    />
  );
}

export { InsideLayout, LoginStack };
