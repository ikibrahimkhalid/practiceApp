import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Image, Text, TouchableOpacity } from 'react-native';

export default function Screen3({navigation}) {
  const [code1, setCode1] = useState('');
  const [code2, setCode2] = useState('');
  const [code3, setCode3] = useState('');
  const [code4, setCode4] = useState('');
  const [code5, setCode5] = useState('');
  const [code6, setCode6] = useState('');

  const handleCodeChange = (text, digit) => {
    switch (digit) {
      case 1:
        setCode1(text);
        break;
      case 2:
        setCode2(text);
        break;
      case 3:
        setCode3(text);
        break;
      case 4:
        setCode4(text);
        break;
      case 5:
        setCode5(text);
        break;
      case 6:
        setCode6(text);
        break;
      default:
        break;
    }
  };

  const activateAccount = () => {
    // Logic to activate account
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./simplerista/OTP.png')} />
      <Text style={styles.headerText}>Please enter the 6-digit code sent to your registered email</Text>
      <View style={styles.otpContainer}>
        {[1, 2, 3, 4, 5, 6].map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            onChangeText={(text) => handleCodeChange(text, digit)}
            value={eval('code' + digit)}
            maxLength={1}
          />
        ))}
        <TouchableOpacity
          style={styles.button}
          onPress={activateAccount}
        >
          <Text style={styles.buttonText}>ACTIVATE ACCOUNT</Text>
        </TouchableOpacity>
        <Text style={styles.resendText} onPress={() => navigation.navigate('')}>Send code again!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 20,
  },
  headerText: {
    color: "#70788D",
    width: 265,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 15,
    lineHeight: 21,
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    color: '#70788D',
    textAlign: 'center',
    width: 45,
    height: 47,
    borderWidth: 1,
    borderColor: '#17254F',
    borderRadius: 4,
    marginHorizontal: 5,
    fontFamily: 'Poppins',
    fontSize: 15,
    lineHeight: 21,
  },
  button: {
    backgroundColor: '#DA3171',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    lineHeight: 25,
  },
  resendText: {
    color: "#1DA1F2",
    textDecorationLine: 'underline',
    marginTop: 10,
    fontFamily: 'Poppins',
    fontSize: 14,
    lineHeight: 20,
  },
});
