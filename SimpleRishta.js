
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Linking, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions } from 'react-native';
import Logo from './Logo';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Stack = createNativeStackNavigator();

const SimpleRishta = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleFacebookPress = () => {
    const facebookURL = 'https://www.facebook.com/your-facebook-page';

    Linking.openURL(facebookURL).catch(err =>
      console.error('Error opening Facebook link: ', err)
    );
  };

  const handleGooglePress = () => {
    const googleURL = 'https://Google.com/your-Google-page';

    Linking.openURL(googleURL).catch(err =>
      console.error('Error opening Google link: ', err)
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#FFFFFF", "#F9DDE8"]} style={styles.linearGradient}>
        <Logo />

        <Text style={styles.account}>PLEASE LOGIN TO YOUR ACCOUNT</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            placeholderTextColor="#A7A7A7"
            onChangeText={(text) => setEmail(text)}
          />
          <Feather
            name="user"
            size={25}
            color="#7E7E7E"
            style={styles.icon}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            value={password}
            placeholderTextColor="#A7A7A7"
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={togglePasswordVisibility}
          >
            <Feather
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={20}
              color="#A7A7A7"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.your}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.register} onPress={() => navigation.navigate('HomeScreen2')}>
          Don't have an account? <Text style={{ color: "#1DA1F2", textDecorationLine: 'underline' }}>Register here</Text>
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={[styles.borderView, { marginLeft: 50 }]}></View>
          <Text style={styles.connect}> OR CONNECT WITH </Text>
          <View style={[styles.borderView, { marginRight: 40 }]}></View>
        </View>

        <TouchableOpacity onPress={handleFacebookPress} style={styles.facebookButton}>
          <EvilIcons name="sc-facebook" size={40} color="white" style={styles.facebookIcon} />
          <Text style={styles.facebookButtonText}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleGooglePress} style={styles.google}>
          <Image style={styles.logo} source={require('./simplerista/google_logo.png')} />
          <Text style={styles.text}>Google</Text>
        </TouchableOpacity>

      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    width: '100%',
    height: '100%',
  },
  account: {
    marginTop: windowHeight * 0.09,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0,
    color: '#2D2D2D',
    textTransform: 'uppercase',
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
    borderColor: '#DA31724F',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    height: 40,
  },
  icon: {
    marginTop: 7,
    marginRight: 15,
  },
  eyeIcon: {
    marginTop: 12,
    marginRight: 15,
  },
  your: {
    marginTop: 10,
    marginLeft: 220,
    textDecorationLine: 'underline',
    color: '#1DA1F2',
    fontFamily: 'Poppins',
    fontSize: 13,
    lineHeight: 18,
  },
  button: {
    marginTop: 40,
    marginLeft: 25,

    width: windowWidth - 55,
    height: windowHeight / 17,
    backgroundColor: '#DA3171',
    borderRadius: 5,
    opacity: 1,
  },
  buttonText: {
    marginTop: 10,
    color: "white",
    textAlign: 'center',
    padding: 3,
  },
  register: {
    marginTop: 15,
    color: "#474747",
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 14,
    lineHeight: 18,
  },

  connect: {
    textAlign: 'center',
    width:150,
    marginTop:70,
    color:"#474747",
  },
  borderView: {
    borderWidth: 0.7,
    borderColor: "#AFAFAF",
    marginTop: 70,
    width:70,
    // flex: 1

  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    marginTop:30,
    marginLeft:200,
    backgroundColor: '#FFFFFF',
    width: 150,
    height: 50,
    borderColor: '#AFAFAF',
    borderRadius: 6,
    elevation: 3,
  },
  facebookButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    color: "#000000",
  },
  facebookIcon: {
    color: "#008AFF",
    marginTop: -10,

  },
  google: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    marginTop:-50,
    marginLeft:30,
    backgroundColor: '#FFFFFF',
    width: 150,
    height: 50,
    borderColor: '#AFAFAF',
    borderRadius: 6,
    elevation: 3,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    color: "#000000",
  },
});


export default SimpleRishta;
