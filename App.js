
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Company/HomeScreen';
import HomeScreen1 from './Company/HomeScreen1';
import SimpleRishta from './SimpleRishta';
import HomeScreen2 from './Company/HomeScreen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4'; 
import Rishta from './Rishta';
import Screen5 from './Screen5';
import Screen6 from './Screen6';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Rishta">
          <Stack.Screen name="Rishta" component={Rishta} options={{headerShown:false}}/>
          <Stack.Screen name="simpleRishta" component={SimpleRishta} options={{headerShown:false}}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name="HomeScreen1" component={HomeScreen1} options={{headerShown:false}} />
          <Stack.Screen name="HomeScreen2" component={HomeScreen2} options={{headerShown:false}} />
          <Stack.Screen name="Screen3" component={Screen3} options={{ headerTitle: 'Verify Your Email', headerTitleAlign: 'center',}} />
          <Stack.Screen name="Screen4" component={Screen4} options={{ headerTitle: 'Set Password', headerTitleAlign: 'center',}} />
          <Stack.Screen name="Screen5" component={Screen5} options={{ headerTitle: 'Basic Details', headerTitleAlign: 'center',}} />
          <Stack.Screen name="Screen6" component={Screen6} options={{headerTitle:'Candidate Basic Details', headerTitleAlign: 'center'}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;




// // // // import React from 'react';
// // // // import { TextInput, View, StyleSheet } from 'react-native';
// // // // import Feather from 'react-native-vector-icons/Feather';

// // // // const YourComponent = () => {
// // // //   const [email, setEmail] = React.useState('');

// // // //   return (
// // // //     <View style={styles.inputContainer}>
// // // //       <TextInput
// // // //         style={styles.input}
// // // //         placeholder="Email"
// // // //         value={email}
// // // //         placeholderTextColor="#A7A7A7"
// // // //         onChangeText={(text) => setEmail(text)}
// // // //       />
// // // //       <Feather name="user" size={40} color="red" style={styles.icon} />
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   inputContainer: {
// // //     // flexDirection: 'row',
// // //     // justifyContent: 'space-between', 
// // //     // borderWidth: 1,
// // //     // borderColor: '#A7A7A7',
// // //     // borderRadius: 5,
// // //     // padding: 10,
// // // //   },
// // // //   icon: {
// // // //     marginLeft: 0, 
// // // //   },
// // // //   input: {
// // // //     flex: 1,
// // // //     height: 40,
// // // //     color: 'black',
// // // //   },
// // // // });

// // // // export default YourComponent;

// // // import React, { useState } from 'react';
// // // import { TextInput, View, TouchableOpacity } from 'react-native';
// // // import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose a different icon library

// // // const YourComponent = () => {
// // //   const [password, setPassword] = useState('');
// // //   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

// // //   const togglePasswordVisibility = () => {
// // //     setIsPasswordVisible((prev) => !prev);
// // //   };

// // //   return (
// // //     <View>
// // //       <TextInput
// // //         style={styles.password}
// // //         placeholder="Password"
// // //         secureTextEntry={!isPasswordVisible}
// // //         value={password}
// // //         placeholderTextColor="#A7A7A7"
// // //         onChangeText={(text) => setPassword(text)}
// // //       />
// // //       <TouchableOpacity
// // //         style={styles.eyeIcon}
// // //         onPress={togglePasswordVisibility}
// // //       >
// // //         <Icon
// // //           name={isPasswordVisible ? 'eye-slash' : 'eye'}
// // //           size={20}
// // //           color="#A7A7A7"
// // //         />
// // //       </TouchableOpacity>
// // //     </View>
// // //   );
// // // };
// // // const styles = {
// // //   password: {
// // //     // Add your password input styles here
// // //   },
// // //   eyeIcon: {
// // //     position: 'absolute',
// // //     right: 10,
// // //     top: 12,
// // //   },
// // //   // Add additional styles as needed
// // // };


// // // export default YourComponent;



// // // import React from 'react';
// // // import { View, Text, StyleSheet } from 'react-native';

// // // const YourComponent = () => {
// // //   return (
// // //     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
// // //       <View style={[styles.borderView, { marginLeft: 20 }]}></View>
// // //       <Text style={styles.connect}> OR CONNECT WITH </Text>
// // //       <View style={[styles.borderView, { marginRight: 10 }]}></View>
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   connect: {
// // //     textAlign: 'center',
// // //     width:150,
// // //     marginTop:50,


// // //   },
// // //   borderView: {
// // //     borderWidth: 0.7,
// // //     borderColor: "#AFAFAF",
// // //     marginTop: 50,
// // //     // width:100,s
// // //     flex:1

// // //   },
// // // });

// // // export default YourComponent;





















// // // import React, { useState } from 'react';
// // // import { StyleSheet, View, Text, TextInput, TouchableOpacity, Linking } from 'react-native';
// // // import LinearGradient from 'react-native-linear-gradient';
// // // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // // import { Dimensions } from 'react-native';
// // // import Logo from './Logo';
// // // import Feather from 'react-native-vector-icons/Feather';
// // // import EvilIcons from 'react-native-vector-icons/EvilIcons';



// // // const windowWidth = Dimensions.get('window').width;
// // // const windowHeight = Dimensions.get('window').height;
// // // const Stack = createNativeStackNavigator();

// // // const SimpleRishta = ({ navigation }) => {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

// // //   const togglePasswordVisibility = () => {
// // //     setIsPasswordVisible((prev) => !prev);
// // //   };

// // //   const handleFacebookPress = () => {
// // //     const facebookURL = 'https://www.facebook.com/your-facebook-page';

// // //     Linking.openURL(facebookURL).catch(err =>
// // //       console.error('Error opening Facebook link: ', err)
// // //     );
// // //   };

// // //   const handleGooglePress = () => {
// // //     const googleURL = 'https://Google.com/your-Google-page';

// // //     Linking.openURL(googleURL).catch(err =>
// // //       console.error('Error opening Google link: ', err)
// // //     );
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <LinearGradient colors={["#FFFFFF", "#F9DDE8"]} style={styles.linearGradient}>
// // //         <Logo />

// // //         <Text style={styles.account}>PLEASE LOGIN TO YOUR ACCOUNT</Text>

// // //         <View style={styles.inputContainer}>
// // //           <TextInput
// // //             style={styles.input}
// // //             placeholder="Email"
// // //             value={email}
// // //             placeholderTextColor="#A7A7A7"
// // //             onChangeText={(text) => setEmail(text)}
// // //           />
// // //           <Feather
// // //             name="user"
// // //             size={25}
// // //             color="#7E7E7E"
// // //             style={styles.icon}
// // //           />
// // //         </View>

// // //         <View style={styles.inputContainer}>
// // //           <TextInput
// // //             style={styles.input}
// // //             placeholder="Password"
// // //             secureTextEntry={!isPasswordVisible}
// // //             value={password}
// // //             placeholderTextColor="#A7A7A7"
// // //             onChangeText={(text) => setPassword(text)}
// // //           />
// // //           <TouchableOpacity
// // //             style={styles.eyeIcon}
// // //             onPress={togglePasswordVisibility}
// // //           >
// // //             <Feather
// // //               name={isPasswordVisible ? 'eye-off' : 'eye'}
// // //               size={20}
// // //               color="#A7A7A7"
// // //             />
// // //           </TouchableOpacity>
// // //         </View>

// // //         <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('HomeScreen')}>
// // //           <Text style={styles.your}>Forgot your password?</Text>
// // //         </TouchableOpacity>

// // //         <TouchableOpacity style={styles.button}>
// // //           <Text style={styles.buttonText}>LOGIN</Text>
// // //         </TouchableOpacity>

// // //         <Text style={styles.register} onPress={() => navigation.navigate('HomeScreen2')}>
// // //           Don't have an account? <Text style={{ color: "#1DA1F2", textDecorationLine: 'underline' }}>Register here</Text>
// // //         </Text>
// // //         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
// // //       <View style={[styles.borderView, { marginLeft: 20 }]}></View>
// // //       <Text style={styles.connect}> OR CONNECT WITH </Text>
// // //       <View style={[styles.borderView, { marginRight: 10 }]}></View>
// // //     </View>

// // //         <TouchableOpacity onPress={handleFacebookPress} style={styles.facebookButton}>
// // //           <EvilIcons name="sc-facebook" size={40} color="white" style={styles.facebookIcon} />
// // //           <Text style={styles.facebookButtonText}>Facebook</Text>
// // //         </TouchableOpacity>

// // //         {/* <TouchableOpacity onPress={handleGooglePress}>
// // //           <Text style={styles.Google}>Google</Text>
// // //         </TouchableOpacity> */}

// // //       </LinearGradient>
// // //     </View>
// // //   );
// // // };
// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //   },
// // //   linearGradient: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     width: '100%',
// // //     height: '100%',
// // //   },
// // //   account: {
// // //     marginTop: windowHeight * 0.05,
// // //     textAlign: 'center',
// // //     fontFamily: 'Poppins',
// // //     fontSize: 14,
// // //     lineHeight: 21,
// // //     letterSpacing: 0,
// // //     color: '#2D2D2D',
// // //     textTransform: 'uppercase',
// // //     opacity: 1,
// // //   },
// // //   inputContainer: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     borderWidth: 1,
// // //     padding: 0,
// // //     width: windowWidth - 55,
// // //     height: windowHeight / 17,
// // //     marginTop: 20,
// // //     borderColor: '#DA31724F',
// // //     borderRadius: 5,
// // //     backgroundColor: '#FFFFFF',
// // //   },
// // //   input: {
// // //     flex: 1,
// // //     height: 40,
// // //   },
// // //   icon: {
// // //     marginTop: 5,
// // //     marginRight: 15,
// // //   },
// // //   eyeIcon: {
// // //     marginTop: 10,
// // //     marginRight: 15,
// // //   },
// // //   your: {
// // //     marginTop: 6,
// // //     textDecorationLine: 'underline',
// // //     color: '#1DA1F2',
// // //     fontFamily: 'Poppins',
// // //     fontSize: 13,
// // //     lineHeight: 18,
// // //     letterSpacing: 0,
// // //   },
// // //   button: {
// // //     marginTop: 40,
// // //     width: windowWidth - 55,
// // //     height: windowHeight / 17,
// // //     backgroundColor: '#DA3171',
// // //     borderRadius: 5,
// // //     opacity: 1,
// // //   },
// // //   buttonText: {
// // //     marginTop: 10,
// // //     color: "white",
// // //     textAlign: 'center',
// // //     padding: 3,
// // //   },
// // //   register: {
// // //     marginTop: 15,
// // //     color: "#474747",
// // //     textAlign: 'center',
// // //     fontFamily: 'Poppins',
// // //     fontSize: 14,
// // //     lineHeight: 18,
// // //   },
// // //   separator: {
// // //     borderWidth: 0.5,
// // //     width: windowWidth * 0.3,
// // //     borderColor: "#AFAFAF",
// // //     marginTop: windowHeight * 0.04,
// // //   },
// // //   connect: {
// // //     textAlign: 'center',
// // //     width:150,
// // //     marginTop:50,


// // //   },
// // //   borderView: {
// // //     borderWidth: 0.7,
// // //     borderColor: "#AFAFAF",
// // //     marginTop: 50,
// // //     // width:100,s
// // //     flex:1

// // //   },
// // //   socialButton: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     marginTop: windowHeight * 0.03,
// // //     width: windowWidth * 0.6,
// // //     height: windowHeight * 0.07,
// // //     backgroundColor: '#FFFFFF',
// // //     borderColor: '#AFAFAF',
// // //     borderWidth: 1,
// // //     borderRadius: 6,
// // //     justifyContent: 'center',
// // //     paddingHorizontal: 10,
// // //   },
// // //   socialButtonText: {
// // //     fontSize: 11,
// // //     fontFamily: 'Poppins',
// // //     letterSpacing: 0.88,
// // //     color: '#000000',
// // //     marginLeft: 10,
// // //   },
// // //   facebookIcon: {
// // //     color: "#008AFF",
// // //   },
// // // });


// // // export default SimpleRishta;



// // import React from 'react';
// // import { TouchableOpacity, Text, Image, StyleSheet, Linking } from 'react-native';

// // const YourComponent = () => {
// //   const handleGooglePress = () => {
// //     // Open Google in browser
// //     Linking.openURL('https://www.google.com');
// //   };

// //   return (
// //     <TouchableOpacity onPress={handleGooglePress} style={styles.container}>
// //       <Image style={styles.logo} source={require('./simplerista/google_logo.png')} />
// //       <Text style={styles.text}>Google</Text>
// //     </TouchableOpacity>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: "center",
// //     backgroundColor: '#FFFFFF',
// //     width: 150,
// //     borderColor: '#AFAFAF',
// //     height: 50,
// //     borderRadius: 6,
// //     elevation: 3,
// //   },
// //   logo: {
// //     width: 30,
// //     height: 30,
// //     marginRight: 10,
// //   },
// //   text: {
// //     fontSize: 16,
// //     color: 'white',
// //     fontWeight: 'bold',
// //     color: "#000000",
// //   },
// // });

// // export default YourComponent;




// import React from 'react';
// import { TextInput, View } from 'react-native';
// import Icon from 'react-native-vector-icons/Fontisto'; // Assuming you want to use FontAwesome icons

// const YourComponent = () => {
//   return (
//     <View style={styles.inputContainer}>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Your Registered Email"
//         placeholderTextColor="#A7A7A7"
        
//       />
//             <Icon name="email" size={20} color="#A7A7A7" style={styles.icon} />

//     </View>
//   );
// };

// const styles = {
  // inputContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#A7A7A7',
  //   marginBottom: 10,
  // },
  // input: {
  //   flex: 1,
  //   marginLeft: 10,
  //   paddingVertical: 5,
  // },
  // icon: {
  //   marginLeft: 10,
  // },
// };

// export default YourComponent;
