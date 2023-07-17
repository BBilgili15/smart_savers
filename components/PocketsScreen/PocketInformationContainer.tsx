import {
  Button,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
} from "react-native";
import { useState } from "react";
import React from "react";
import {addGoal} from '../../services/GoalServices';
import { Picker } from "@react-native-picker/picker";

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
  }
  
  

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.balanceText}>Total Pocket Balance:</Text>
        <Text style={styles.balanceAmount}>£67.98</Text>
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
          {/* <Text>Add Goal:</Text> */}
          <TextInput
            style={styles.TextInput}
            placeholder="Enter goal"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          {/* <Text>Add Amount:</Text> */}
          <TextInput
            style={styles.TextInput}
            placeholder="Enter amount"
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
    backgroundColor:"#311b6b"
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
    backgroundColor:"#e4d0ff",

    width: "90%",
    height: 35,
    marginRight: 3,
    paddingLeft: 10,
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop:16

  },
  savebutton:{
    width:'30%',
    marginHorizontal:8
  }
});

export default PocketInformationContainer;
