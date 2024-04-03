import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Logo from '../Logo';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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

const HomeScreen1 = ({ navigation }) => {
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
      console.log('New password set successfully');
      navigation.navigate('');
    } else {
      Alert.alert('Error', 'Passwords do not match');
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#FFFFFF", "#F9DDE8"]} style={styles.Gradientcolor}>
        <Logo />
        <Text style={styles.CREATE}>CREATE NEW PASSWORD</Text>
        <Text style={styles.label}>Please enter a new password so you can login to your account again</Text>
        <PasswordInput
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}
        />
        <PasswordInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
        />
        <TouchableOpacity style={styles.button} onPress={handleSetNewPassword}>
          <Text style={styles.buttonText}>SET NEW PASSWORD</Text>
        </TouchableOpacity>
        <Text style={styles.registerText} onPress={() => navigation.navigate('HomeScreen2')}>
          Don't have an account? <Text style={{ color: "#1DA1F2", textDecorationLine: 'underline', }}>Register here</Text>
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Gradientcolor: {
    height: "100%",
    width: "100%",
  },
  CREATE: {
    marginTop: 75,
    marginLeft: 64,
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 45,
    color: '#DA3171',
    textTransform: 'uppercase',
  },
  label: {
    marginTop: 0,
    marginLeft: 53,
    width: 270,
    height: 41,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0,
    color: '#2D2D2D',
    opacity: 1,
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
  Password: {
    marginTop: 25,
    marginLeft: 25,
    width: 325,
    height: 45,
    color: "black",
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: "#592BD626",
    borderRadius: 5,
    opacity: 1,
  },
  ConfirmPassword: {
    marginTop: 15,
    marginLeft: 25,
    width: 325,
    color: "black",
    height: 45,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: "#592BD626",
    borderRadius: 5,
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
    marginLeft: 90,
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
    marginTop: 175,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 14,
    color: "black",
    lineHeight: 18,
    letterSpacing: 0,
  },
});

export default HomeScreen1;
