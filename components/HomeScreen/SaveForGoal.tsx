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
import { addGoal, getGoals, updateGoalAmountSaved } from "../../services/GoalServices";
import { updateUser } from "../../services/UserServices";

type SaveForGoalProps = {
  setCurrentUser:(currentUser: any) => void;
  currentUser: any;
  saveModalVisible: boolean;
  endSaveForGoalHandler: any;
  setSaveModalVisible: any;
  goals: any;
  setGoals: any;
};

const SaveForGoal: React.FC<SaveForGoalProps> = ({
  setCurrentUser,
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
  
console.log("this is for goals: ", goals)
 
    // const currentBalance=currentUser.balance
  

  const reduceBalanceAddToPocket = () => {
    // convert original type to numbers
    
    const idToSend=Number(selectedItem)
    const amountToSave=Number(amount)
    const newBalance=currentUser.balance-amountToSave

    const payload={
      amountSaved:amountToSave
      
    }
    const updatedUser = {
      ...currentUser,
      balance:newBalance
  };

    const goalsToUpdate = goals.filter((goal: any) => {
      return goal.id == idToSend
    })
    

    const goalToUpdate = goalsToUpdate[0]
    const copyGoalToUpdate = {...goalToUpdate};
    copyGoalToUpdate.amountSaved += amountToSave;
    const copyGoals = [...goals];

    const newListOfGoals = copyGoals.filter((goal) => {
      return goal.id != idToSend;
    })

    const newGoalsWithUpdate = [...newListOfGoals, copyGoalToUpdate];
    setGoals(newGoalsWithUpdate);
    updateUser(updatedUser, currentUser.id)
    .then(() => {
      setCurrentUser(updatedUser);
    })
    .catch(error => {
      console.error("Failed to update user: ", error);
    })

    updateGoalAmountSaved(payload, idToSend)
    updateUser
    setSaveModalVisible(false);
    endSaveForGoalHandler(); 
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
            onValueChange={(itemValue: string) => setSelectedItem(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="select a pocket" value="" />
            {goals.map((goal: any, index: number) => (
              <Picker.Item
                key={index}
                label={goal.goalName}
                value={goal.id}
              />
            ))}
          </Picker>
          {/* <Text style={styles.modalText}>Enter amount to pocket:</Text> */}
          
          <TextInput
            style={styles.inputField}
            value={amount}
            onChangeText={(text) => setAmount(text)}
            placeholder="Enter amount to pocket:"
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
    marginBottom: 150
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