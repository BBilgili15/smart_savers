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

type PocketInformationContainerProps = {
  currentUser: any;
  handleButtonClick: () => void;
};

const PocketInformationContainer: React.FC<PocketInformationContainerProps> = ({
  handleButtonClick,
  currentUser,
}) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState<string[]>([]);
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [enteredAmount, setEnteredAmount] = useState<number | null>(null);
  const [totalBalance, setTotalBalance] = useState(0); // Add a state for total balance

  useEffect(() => {
    // Calculate and set the total balance whenever the currentUser.goals array changes
    const calculateTotalBalance = () => {
      const balance = currentUser.goals.reduce(
        (total: number, goal: any) => total + goal.amountSaved,
        0
      );
      setTotalBalance(balance);
    };

    calculateTotalBalance();
  }, [currentUser.goals]);




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

  const saveGoal=()=>{
    const newGoal={
      goalName:enteredGoalText,
      targetAmount:enteredAmount,
      user:currentUser
    }
    addGoal(newGoal)
    console.log("NEWGOAL HERE___> ", newGoal)
    endAddGoalHandler()
    handleButtonClick()
  }
  
  

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
    backgroundColor: "#f1f1f1",
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
  },
  balanceAmount: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0F907B",
    textAlign: "center",
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
    color:"blace",
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:"#ffffff",

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
  }
});

export default PocketInformationContainer;
