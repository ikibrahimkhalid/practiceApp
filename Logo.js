import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Logo() {
  return (
    <View>
      <Image style={styles.logo} source={require('./simplerista/logo.png')} />
      <Image style={styles.Image} source={require('./simplerista/1236.png')} />
      <Text style={styles.title}>SIMPLE RISHTA</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Image: {
    marginTop: -16,
    marginLeft: 100,
    width: 180,
    height: 71,
    opacity: 1,
  },
  logo: {
    marginLeft: 24,
    marginTop: -4,
    width: windowWidth * 1,
    height: windowHeight / 8,
    opacity: 1,

  },
  title: {
    marginTop: 12,
    marginLeft: 125,
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 1.5,
    color: '#000000',
    textTransform: 'uppercase',
    opacity: 1,
    fontFamily: 'Round Style Basic'
  },
})