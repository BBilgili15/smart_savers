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

type UpdateBalanceProps = {
  currentUser: any;
  userTransactions: any;
  setUserTransactions: (transaction: any) => void;
  setCurrentUser:(currentUser: any) => void;
};

const UpdateBalance: React.FC<UpdateBalanceProps> = ({
  currentUser,
  userTransactions,
  setUserTransactions,
  setCurrentUser
}) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [amount, setAmount] = useState<string>("");
  const [modalType, setModalType] = useState("");



  function startButtonHandler(modalType: string) {
    setSelectedCategory("");
    setAmount("");
    setModalType(modalType); // Set the modal based on the button clicked(income and spend)
    setModalIsVisible(true);
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
          // ---------to be refactored 

        })
        .catch((error) => {
          console.log("Error adding transaction:", error);
        });
    }
  
    console.log("this is to test currentuser:", currentUser);
  }
  
  





  //------- this is income button related
  // app needs value to show options, db need key to store info
  const incomeCategories: { [key: string]: string } = {
    EARNINGS: "earnings",
    POCKET_MONEY: "pocket money",
    GIFT: "GIFT",
    OTHER_INCOME: "other",
  };

  const incomeCategoryOptions = Object.entries(incomeCategories).map(
    ([key, value]) => ({
      label: value,
      value: key,
    })
  );

  // ---------this is spending button related
  const spendingCategories: { [key: string]: string } = {
    ENTERTAINMENT: "entertainment",
    SHOPPING: "shopping",
    TRANSPORT: "transport",
    FOOD: "food",
    OTHER_SPEND: "other",
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

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => startButtonHandler("spending")}
        >
          <Text style={styles.text}>Spend</Text>
        </TouchableOpacity>
      </View>








{/* ------below is the modal------------- */}
      <Modal
        animationType="slide"
        visible={modalIsVisible}
        style={styles.modalContainer}
      >
        <View style={styles.incomeContainer}>
          {modalType === "income" ? (
            <>
              <Text style={styles.modalText}>Where is the income from?</Text>
              <Picker
                selectedValue={selectedCategory}
                onValueChange={(itemValue: string) =>
                  setSelectedCategory(itemValue)
                }
                style={styles.picker}
              >
                 <Picker.Item label="" value="" /> 
                {incomeCategoryOptions.map((incomeCategoryOption, index) => (
                  <Picker.Item
                    key={index}
                    label={incomeCategoryOption.label}
                    value={incomeCategoryOption.value}
                  />
                ))}
              </Picker>
              <Text style={styles.modalText}>Enter income:</Text>
            </>
          ) : (
            <>
              <Text style={styles.modalText}>Where does it spend on?</Text>
              <Picker
                selectedValue={selectedCategory}
                onValueChange={(itemValue: string) =>
                  setSelectedCategory(itemValue)
                }
                style={styles.picker}
              >
                 <Picker.Item label="" value="" /> 
                {spendingCategoryOptions.map(
                  (spendingCategoryOption, index) => (
                    <Picker.Item
                      key={index}
                      label={spendingCategoryOption.label}
                      value={spendingCategoryOption.value}
                    />
                  )
                )}
              </Picker>
              <Text style={styles.modalText}>Enter spending:</Text>
            </>
          )}

          <TextInput
            style={styles.inputField}
            value={amount}
            onChangeText={(text) => setAmount(text)}
            placeholder="Amount"
            keyboardType="numeric"
          />
          <Button title="done" onPress={() => endButtonHandler()} />
    
        </View>
      </Modal>
    </>
  );
};

export default UpdateBalance;





// ---------------this is for styling--------------

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightpink",
    flexDirection: "row",
    width: 400,
    height: 100,
    alignSelf: "center",
    alignItems: "center",
    margin: 10,
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 20,
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    padding: 15,
    backgroundColor: "lightblue",
    height: 75,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  incomeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalContainer: {
    height: 80,
  },
  inputField: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  picker: {
    width: 200,
    marginBottom: 10,
  },
});

// https://reactnative.dev/docs/0.65/picker