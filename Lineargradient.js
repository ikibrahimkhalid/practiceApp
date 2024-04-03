import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  
LinearGradient from 'react-native-linear-gradient';

export default function Lineargradient() {
  return (
    <View>
      <LinearGradient colors={["#FFFFFF", "#F9DDE8"]} style={styles.linearGradient}></LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: 'transparent',
    opacity: 0.95,
  },
});
