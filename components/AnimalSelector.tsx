import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const AnimalSelector = ({ onAnimalSelect }) => {
  const [selectedAnimal, setSelectedAnimal] = useState("");

  const handleAnimalSelect = (animal) => {
    setSelectedAnimal(animal);
    onAnimalSelect(animal);
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedAnimal}
        onValueChange={(itemValue) => handleAnimalSelect(itemValue)}
        style={styles.picker}
      >
        <Picker.Item style={styles.pickerItem} label="Select your favourite animal" value="" color="#35d0ba" />
        <Picker.Item style={styles.pickerItem} label="Fox" value="fox" color="#35d0ba" />
        <Picker.Item style={styles.pickerItem} label="Owl" value="owl" color="#35d0ba" />
        <Picker.Item style={styles.pickerItem} label="Raccoon" value="raccoon" color="#35d0ba" />
        <Picker.Item style={styles.pickerItem} label="Snake" value="snake" color="#35d0ba" />
        <Picker.Item style={styles.pickerItem} label="Giraffe" value="giraffe"color="#35d0ba" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 1,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: 'OpenDyslexic-Regular',
    
  },
  picker: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#ff9234",
    backgroundColor: "#FFFFFF", 
    fontFamily: 'OpenDyslexic-Regular',

  },
  pickerItem: {
    fontFamily: "OpenDyslexic-Regular", 
  },
});


export default AnimalSelector;
