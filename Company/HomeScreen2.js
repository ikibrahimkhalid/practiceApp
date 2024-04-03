import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen2({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.Dell}>REGISTRATION FORM</Text>
        <Text style={styles.worry}>Don't worry, it takes less than a minute</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Registered Email"
            placeholderTextColor="#A7A7A7"
          />
          <Fontisto name="email" size={20} color="#A7A7A7" style={styles.icon} />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Screen3')}
        >
          <Text style={styles.buttonText}>SEND CODE TO THIS EMAIL</Text>
        </TouchableOpacity>
        <Text style={styles.an} onPress={() => navigation.navigate('')}>
          Already have an account? <Text style={{ color: "#1DA1F2", textDecorationLine: 'underline', }}>Sign Now </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  Dell: {
    textAlign: 'center',
    fontSize: 22,
    color: "#DA3171",
    fontWeight: 'bold',
  },
  worry: {
    marginTop: 10,
    textAlign: 'center',
    color: "#70788D",
    letterSpacing: 0.5,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 0,
    width: windowWidth - 55,
    height: windowHeight / 17,
    marginTop: 20,
    borderColor: '#A7A7A7',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    height: 40,
  },
  icon: {
    marginTop: 10,
    marginRight: 15,
  },
  button: {
    marginTop: 35,
    width: 325,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#DA3171',
  },
  buttonText: {
    textAlign: 'center',
    marginTop: 6,
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    lineHeight: 25,
  },
  an: {
    marginTop: 20,
    textAlign: 'center',
    color: "#474747",
  },
});
