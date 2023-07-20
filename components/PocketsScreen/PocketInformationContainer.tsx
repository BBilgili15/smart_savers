import {
  Button,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import {addGoal} from '../../services/GoalServices';
import { Picker } from "@react-native-picker/picker";
import { getGoalsByUserId } from "../../services/GoalServices";
import { useNavigation } from '@react-navigation/native';

type PocketInformationContainerProps = {
  currentUser: any;
  handleButtonClick: () => void;
  goals: any
  setGoals: (param: any) => void;
};

const PocketInformationContainer: React.FC<PocketInformationContainerProps> = ({
  handleButtonClick,
  currentUser,
  goals,
  setGoals
}) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [enteredAmount, setEnteredAmount] = useState<number | null>(null);
  const [totalBalance, setTotalBalance] = useState(0); // Add a state for total balance

  const navigation = useNavigation();


  useEffect(() => {
    // Calculate and set the total balance whenever the currentUser.goals array changes
    const calculateTotalBalance = () => {
      if (currentUser && currentUser.goals) {
        const balance = goals.reduce(
          (total: number, goal: any) => total + goal.amountSaved,
          0
        );
        setTotalBalance(balance);
      }
    };
  
    calculateTotalBalance();
  }, [currentUser?.goals, currentUser, goals]);




  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const goalAmountHandler = (enteredAmount: string) => {
    setEnteredAmount(Number(enteredAmount));
  };

  const saveGoal = async () => {
    endAddGoalHandler();
    const newGoal = {
      goalName: enteredGoalText,
      amountSaved: 0.00,
      targetAmount: enteredAmount,
      user: currentUser,
    };
  
    console.log("NEWGOAL: ", newGoal);
  
    try {
      // Call the addGoal function and wait for the response
      const newGoalRes = await addGoal(newGoal);
      console.log("NewGoalRes: ", newGoalRes);
  
      if (newGoalRes) {
        // Update the state only after receiving the response
        const updatedGoals = [...goals, newGoalRes];
        setGoals(updatedGoals);
        handleButtonClick();
      }
    } catch (error) {
      console.error("Error saving goal:", error);
    }
  };
  
    
    // const newGoalRes = await addGoal(newGoal);

    // console.log("NewGoalRes: ", newGoalRes)
    
  //   const newGoals = [...goals, newGoal]; 
  //   setGoals(newGoals);
  //   handleButtonClick();
  
  // };
  
  

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.balanceText}>Total Pocket Balance:</Text>
        <Text style={styles.balanceAmount}>£{totalBalance.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={startAddGoalHandler}
        >
          <Text style={styles.buttonText}>New Pocket +</Text>
        </TouchableOpacity>
      </View>

      {/* modal below----- */}
      <Modal visible={modalIsVisible} animationType="slide">
        <View style={styles.inputContainer}>
          <Text style={styles.text}>New Saving Pocket:</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="What are you saving for?"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          {/* <Text>Add Amount:</Text> */}
          <TextInput
            style={styles.TextInput}
            placeholder="How much does it cost?"
            onChangeText={goalAmountHandler}
            value={enteredAmount ? enteredAmount.toString() : ""}
            keyboardType="numeric"
          />

          {/* buttons  */}
          <View style={styles.buttonContainer}>
            <View style={styles.savebutton}>
              <Button title="Save" onPress={saveGoal} color="pink" />
            </View>

            <View style={styles.savebutton}>
              <Button title="Cancel" onPress={endAddGoalHandler} color="pink" />
            </View>
          </View>
        </View>
      </Modal>
</>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f7",
    width: 400,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 20,
  },
  balanceText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
    fontFamily: 'OpenDyslexic-Regular',
  },
  balanceAmount: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0F907B",
    textAlign: "center",
    fontFamily: 'OpenDyslexic-Regular',
  },
  button: {
    backgroundColor: "lightpink",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontFamily: 'OpenDyslexic-Regular',
  },
  inputContainer: {
    flex: 1,
    // flexDirection: "column",
    padding:16,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "blue",
    backgroundColor:"#fe5454"
  },
  image:{
    width:100,
    height:100,
    margin:20
  },
  TextInput: {
    color:"black",
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:"#ffffff",
    fontFamily: 'OpenDyslexic-Regular',

    width: "75%",
    height: 45,
    marginRight: 3,
    paddingLeft: 10,
    marginBottom: 10,
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop:16

  },
  savebutton:{
    width:'30%',
    marginHorizontal:8
    
  }, 
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    fontFamily: 'OpenDyslexic-Regular',
  }
});

export default PocketInformationContainer;
