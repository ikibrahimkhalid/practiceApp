// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default Usersdate = (props) => {
//     const item = props.item;
  
//     return (
//       <View style={styles.box}>
//         <Text style={styles.item}>{item.name}</Text>
//         <Text style={styles.item}>{item.id}</Text>
//         <Text style={styles.item}>{item.email}</Text>
      
//       </View>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     item: {
//       color: "red",
//       fontSize: 23,
//       flex: 1,
//       margin: 2,
//       textAlign: "center",
  
//     },
//     box: {
//       flexDirection: "row",
//       borderWidth: 5,
//       padding: 2,
//       margin: 3,
//       borderBlockColor: "blue",
  
//     }
//   })

// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Home from './Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
