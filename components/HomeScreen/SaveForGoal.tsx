import React, { useState , useEffect} from "react";
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { addGoal, getGoals } from "../../services/GoalServices";
import { updateGoal } from "../../services/GoalServices";

type SaveForGoalProps = {
  currentUser: any;
  saveModalVisible: boolean;
  endSaveForGoalHandler: any;
  setSaveModalVisible: any;
  goals: any;
  setGoals: any;
};

const SaveForGoal: React.FC<SaveForGoalProps> = ({
  currentUser,
  saveModalVisible,
  endSaveForGoalHandler,
  setSaveModalVisible,
  goals,
  setGoals
}) => {
  const [amount, setAmount] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState("");
  const [enteredGoalAmount, setEnteredGoalAmount] = useState("");
  
  const reduceBalanceAddToPocket = () => {
    // const currentBalance=currentUser.balance
    // const newBalance=currentBalance-amount
    const payload={
      amountSaved:amount
      
    }
    console.log("this is payload",payload)
    updateGoal(payload, selectedItem)
    setSaveModalVisible(false);
    endSaveForGoalHandler(); 

    console.log("this is selected item,", selectedItem)
  };

  // useEffect(() => {
  //   // Fetch goals and update state
  //   getGoals()
  //     .then((fetchedGoals) => {
  //       setGoals(fetchedGoals);
  //     })
  //     .catch((error) => {
  //       console.log('Error fetching goals:', error);
  //     });
  // }, []);




  const endSaveForGoalHandler2 = () => {
    setSaveModalVisible(false);
    endSaveForGoalHandler(); 
  };

  const saveAmountHandler = (enteredAmount: string) => {
    // setEnteredGoalAmount(Number(enteredAmount));
  };


  return (
    <>
      <Modal
         animationType="slide"
         visible={saveModalVisible}
        // style={styles.modalContainer}
      >
        <View style={styles.container}>
          <Picker
            selectedValue={selectedItem}
            onValueChange={(itemValue: number) => setSelectedItem(itemValue)}
            style={styles.picker}
          >

            <Picker.Item label="Select A Pocket" value="" />
            {/* {goals.map((goal: any, index: number) => (
              <Picker.Item
                key={index}
                label={goal.goalName}
                value={String(goal.id)}
              />
            ))} */}
          </Picker>
          <Text style={styles.modalText}>Enter income:</Text>
         
          <TextInput
            style={styles.inputField}
            value={amount}
            onChangeText={(text) => setAmount(text)}
            placeholder="Amount"
            keyboardType="numeric"
          />
          <Button title="Save" onPress={() => reduceBalanceAddToPocket()} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    width: "100%",
    height: 100,
    marginBottom: 150,
  },
  inputField: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default SaveForGoal;