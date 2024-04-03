
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { Dimensions } from 'react-native';
import Logo from '../Logo';
import Fontisto from 'react-native-vector-icons/Fontisto';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen({ navigation }) {


  return (
    <View style={styles.container}>
      <LinearGradient colors={["#FFFFFF", "#F9DDE8"]} style={styles.Gradientcolor}>
        <Logo />
        <Text style={styles.welcomeText}>FORGOT YOUR PASSWORD</Text>
        <Text style={styles.inputLabel}>Please enter your registered email to create new password</Text>
        <View  style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Registered Email"
            placeholderTextColor="#A7A7A7"
          />
          <Fontisto name="email" size={20} color="#A7A7A7" style={styles.icon} />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HomeScreen1')}
        >
          <Text style={styles.buttonText}>CONTINUE</Text>

        </TouchableOpacity>

        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate('simpleRishta')}
        >
          Remember your password?<Text style={{
            textDecorationLine: 'underline', color: '#1DA1F2',
          }}> Sign in</Text>
        </Text>

        <Text
          style={styles.hereText}
          onPress={() => navigation.navigate('HomeScreen2')}
        >
          Don't have an account? <Text style={{
            color: '#1DA1F2', textDecorationLine: 'underline',
          }}>Register here</Text>
        </Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  Gradientcolor: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: 'transparent',
    opacity: 0.95,

  },
  welcomeText: {
    marginTop: 70,
    width: windowWidth,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 23,
    color: '#DA3171',
  },
  inputLabel: {
    marginTop: 15,
    marginLeft: 53,
    width: 265,
    height: 40,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0,
    color: '#2D2D2D',
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
    marginTop: 25,
    marginLeft: 20,
    width: windowWidth - 55,
    height: windowHeight / 17,
    backgroundColor: '#DA3171',
    borderRadius: 5,
    opacity: 1,
    color: "black",
  },
  buttonText: {
    textAlign: 'center',
    paddingTop: 10,
    fontFamily: 'Poppins',
    fontSize: 19,
    lineHeight: 25,
    letterSpacing: 0,
    color: '#FFFFFF',
    textTransform: 'uppercase',

  },
  linkText: {
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0,
    color: "#474747",
  },
  hereText: {
    marginTop: 200,
    marginLeft: 80,
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Poppins',
    letterSpacing: 0,
    color: "#474747",

  }
});
