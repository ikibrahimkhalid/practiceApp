import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Screen4({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  const handleSetNewPassword = () => {
    if (password === confirmPassword) {
      console.warn('New password set successfully');
      navigation.navigate('Screen5');
    } else {
      Alert.alert('Error', 'Passwords do not match');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FCFCFC' }}>
      <Text style={styles.types}>
        Please enter a new password so you can login to your account again
      </Text>
      <PasswordInput
        placeholder="Set Password"
        value={password}
        onChangeText={handlePasswordChange}
      />
      <PasswordInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
      />

      <TouchableOpacity style={styles.button} onPress={handleSetNewPassword}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
      <Text style={styles.registerText} onPress={() => navigation.navigate('')}>
        Don't have an account?{' '}
        <Text style={{ color: '#1DA1F2', textDecorationLine: 'underline' }}>
          Register here
        </Text>
      </Text>
    </View>
  );
}


const PasswordInput = ({ placeholder, value, onChangeText }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#A7A7A7"
      />
      <TouchableOpacity onPress={toggleSecureEntry} style={styles.eyeIcon}>
        <Feather name={secureTextEntry ? 'eye-off' : 'eye'} size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    types: {
      marginTop: 120,
      marginLeft: 53,
      width: 270,
      height: 45,
      textAlign: 'center',
      fontFamily: 'Poppins',
      fontSize: 14,
      lineHeight: 22,
      color: '#70788D',
    },
    button: {
      marginTop: 25,
      marginLeft: 25,
      width: 325,
      height: 45,
      backgroundColor: '#DA3171',
      borderRadius: 5,
      opacity: 1,
    },
    buttonText: {
      marginTop: 10,
      marginLeft: 80,
      width: 158,
      height: 23,
      textAlign: 'center',
      fontFamily: 'Poppins',
      fontSize: 16,
      lineHeight: 25,
      letterSpacing: 0,
      color: '#FFFFFF',
      textTransform: 'uppercase',
    },
    registerText: {
      marginTop: 280,
      textAlign: 'center',
      fontFamily: 'Poppins',
      fontSize: 14,
      color: 'black',
      lineHeight: 18,
      letterSpacing: 0,
    },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 0,
    width: windowWidth - 55,
    height: windowHeight / 17,
    marginTop: 20,
    marginLeft: 25,
    borderColor: '#17254F',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  eyeIcon: {
    paddingRight:20,
    paddingTop:10,
  },
});
