import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
  TextInput,
} from "react-native";
import { useState } from "react";
import React from "react";
import { addTransaction } from "../../services/TransactionServices";
import { Picker } from "@react-native-picker/picker";

import SaveForGoal from "./SaveForGoal";
import { Background } from "victory-native";

type UpdateBalanceProps = {
  currentUser: any;
  userTransactions: any;
  setUserTransactions: (transaction: any) => void;
  setCurrentUser:(currentUser: any) => void;
  goals: any;
  setGoals: (goals: any) => void;
};

const UpdateBalance: React.FC<UpdateBalanceProps> = ({
  currentUser,
  userTransactions,
  setUserTransactions,
  setCurrentUser,
  goals,
  setGoals,

}) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [amount, setAmount] = useState<string>("");
  const [modalType, setModalType] = useState("");

  // 🎉🎉🎉🎉🎉-----------------------modal visibility for save button
  const [saveModalVisible, setSaveModalVisible] = useState(false);

  function startButtonHandler(modalType: string) {
    setSelectedCategory("");
    setAmount("");
    setModalType(modalType);
    setModalIsVisible(true);
    // 🎉🎉🎉🎉🎉-----------------save button related:
    if (modalType === "save") {
      setSaveModalVisible(true);
    } else {
      setSaveModalVisible(false);
    }
  }


  function endButtonHandler() {
    setModalIsVisible(false);
  
    const payload = {
      category: selectedCategory,
      amount: parseFloat(amount),
      user: currentUser,
    };
  
    if (payload.category && !isNaN(payload.amount)) {
      addTransaction(payload)
        .then((newTransaction) => {
          setUserTransactions([...userTransactions, newTransaction]);
          setCurrentUser(newTransaction.user)


        })
        .catch((error) => {
          console.log("Error adding transaction:", error);
        });
    }
  
    console.log("this is to test currentuser:", currentUser);
  }
  


  // 🎉🎉🎉🎉🎉---------------------------this is for save button: 

function startSaveForGoalHandler() {
  setSaveModalVisible(true);
}

function endSaveForGoalHandler(){
  setModalIsVisible(false)
}
  // -------



  //------- this is income button related
  // app needs value to show options, db need key to store info
  const incomeCategories: { [key: string]: string } = {
    EARNINGS: "Earnings",
    POCKET_MONEY: "Pocket Money",
    GIFT: "Gift",
    OTHER_INCOME: "Other",
  };

  const incomeCategoryOptions = Object.entries(incomeCategories).map(
    ([key, value]) => ({
      label: value,
      value: key,
    })
  );



  // ---------this is spending button related
  const spendingCategories: { [key: string]: string } = {
    ENTERTAINMENT: "Entertainment",
    SHOPPING: "Shopping",
    TRANSPORT: "Transport",
    FOOD: "Food",
    OTHER_SPEND: "Other",
  };

  const spendingCategoryOptions = Object.entries(spendingCategories).map(
    ([key, value]) => ({
      label: value,
      value: key,
    })
  );
  // -------------





  return (
    <>
    {/* ----------------these are 3 buttons  ----------------- */}
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => startButtonHandler("income")}
        >
          <Text style={styles.text}>Income</Text>
        </TouchableOpacity>

{/* 🎉🎉🎉🎉🎉--------------------------save button calls func to show modal: */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => startButtonHandler("save")}
        >
          <Text style={styles.text}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => startButtonHandler("spending")}
        >
          <Text style={styles.text}>Spend</Text>
        </TouchableOpacity>
      </View>



{/* 🎉🎉🎉🎉🎉---------------------------this is SaveForGoal Component */}
<SaveForGoal
setCurrentUser={setCurrentUser}
goals={goals}
setGoals={setGoals}
  saveModalVisible={saveModalVisible}
  currentUser={currentUser}
  endSaveForGoalHandler={endSaveForGoalHandler}
  setSaveModalVisible={setSaveModalVisible}
/>



{/* ------below is the modal------------- */}


      <Modal
        animationType="slide"
        visible={modalIsVisible}
        style={styles.modalContainer}
      >
        <View style={styles.incomeContainer}>
          {modalType === "income" ? (
            <>
              <Text style={styles.modalText}>Where did your money come from?</Text>
              <Picker
                selectedValue={selectedCategory}
                onValueChange={(itemValue: string) =>
                  setSelectedCategory(itemValue)
                }
                style={[styles.picker, { color: "white" }]}
              >
                 <Picker.Item color="#white" label="" value="" /> 
                {incomeCategoryOptions.map((incomeCategoryOption, index) => (
                  <Picker.Item color="#white"
                    key={index}
                    label={incomeCategoryOption.label}
                    value={incomeCategoryOption.value}
                    
                  />
                ))}
              </Picker>
              <Text style={styles.modalText}>What was the amount you received?</Text>
            </>
          ) : (
            <>
              <Text style={styles.modalText}>What did you spend money on?</Text>
              <Picker
                selectedValue={selectedCategory}
                onValueChange={(itemValue: string) =>
                  setSelectedCategory(itemValue)
                }
                style={[styles.picker, { color: "white" }]}
              >
                 <Picker.Item label="" value="" /> 
                {spendingCategoryOptions.map(
                  (spendingCategoryOption, index) => (
                    <Picker.Item 
                      key={index}
                      label={spendingCategoryOption.label}
                      value={spendingCategoryOption.value}
                      style={{ color: "white" }}
                    />
                  )
                )}
              </Picker>
              <Text style={styles.modalText}>What was the amount spent?</Text>
            </>
          )}

          <TextInput
            style={styles.inputField}
            value={amount}
            onChangeText={(text) => setAmount(text)}
            placeholder="£"
            keyboardType="numeric"
          />
          <View style={styles.savebutton}>
          <Button title="Submit" onPress={() => endButtonHandler()} color="pink" />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default UpdateBalance;





const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 400,
    height: 100,
    alignSelf: "center",
    alignItems: "center",
    margin: 30,
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    fontFamily: 'OpenDyslexic-Regular',
  },
  button: {
    padding: 15,
    backgroundColor: "#ff4949",
    height: 60,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  incomeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#fe5454"
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
    fontFamily: 'OpenDyslexic-Regular',
    color: 'white',
  },
  modalContainer: {
    height: 80,
    
  },
  inputField: {
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 1,
    padding: 10,
    width: 200,
    marginBottom: 10,
    fontFamily: 'OpenDyslexic-Regular',
  },
  picker: {
    width: 200,
    marginBottom: 10,
  },
  pickerText: {
    color: "white",
  },
  savebutton:{
    width:'30%',
    marginHorizontal:8
    
  }, 
  
});


// https://reactnative.dev/docs/0.65/picker