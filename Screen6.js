import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Screen6({ navigation }) {
  const [selectedValue, setSelectedValue] = useState(null);

  const CustomRadioButton = ({ label, selected, onSelect }) => (
    <TouchableOpacity onPress={onSelect}>
      <View style={[styles.radioButton, selected ? styles.selected : {}]}>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );

  const CustomButton = ({ label, selected, onSelect }) => (
    <TouchableOpacity onPress={onSelect}>
      <View style={[styles.customButton, selected ? styles.selected : {}]}>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Gender</Text>

      <View>
        <CustomButton
          label="Male "
          selected={selectedValue === ' Male'}
          onSelect={() => setSelectedValue('Male')}
        />
        <CustomRadioButton
          label="Female"
          selected={selectedValue === ' Female'}
          onSelect={() => setSelectedValue('Female')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  heading: {
    marginTop: 60,
    marginLeft: 30,
    color: '#70788D',
    fontSize: 16,
    lineHeight: 21,
    fontFamily: 'Poppins',
  },
  radioButton: {
    marginTop: -47,
    marginLeft: 160,
    padding: 12,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#C6D1E3',
    backgroundColor: '#C6D1E3',
    alignItems: 'center',
    width: 150,
    fontFamily: 'Poppins',
    fontSize: 14,
    lineHeight: 21,
  },
  customButton: {
    padding: 12,
    borderRadius: 3,
    marginLeft: 30,
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#C6D1E3',
    backgroundColor: '#C6D1E3',
    alignItems: 'center',
    fontFamily: 'Poppins',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0,
    width: 110,
  },
  selected: {
    backgroundColor: '#FF8D1A',
    color: '#70788D',
    borderColor: '#FF8D1A',
  },
  button: {
    marginTop: 35,
    marginLeft: 30,
    width: 325,
    height: 45,
    borderRadius: 5,
    backgroundColor: '#DA3171',
  },
  buttonText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    lineHeight: 25,
    letterSpacing: 0,
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
  },
});
