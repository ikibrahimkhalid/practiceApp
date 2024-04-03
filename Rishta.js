import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Loader({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      try {
        setTimeout(() => {
          navigation.replace('simpleRishta');
        }, 2000); 
      } catch (error) {
        console.error('Error in useEffect:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initialize();
  }, [navigation]);

  return (
    <LinearGradient colors={['#FFFFFF', '#F9DDE8']} style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.logoPict} source={require('./simplerista/pict.png')} />
        <Image style={styles.logoImage} source={require('./simplerista/Logo.png')} />

        <View style={styles.borderView} />
        <View style={styles.view} />
        <View style={styles.freeView} />
        <View>
          <ActivityIndicator size={45} color="#D61D64" top={25}/>
        </View>
    
        <Image style={styles.fanImage} source={require('./simplerista/fan.png')} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
   
  },
  logoImage: {
    width: 280,
    height: 280,
    resizeMode: 'contain',
    marginTop: 80,
    marginLeft: 50,
  },
  logoPict: {
    width: 400,
    height: 120,
  },
  borderView: {
    borderWidth: 0.7,
    borderColor: '#D61D64',
    backgroundColor: '#D61D64',
    marginTop: 150,
    marginLeft: 120,
    borderRadius: 20,
    width: 70,
    height: 10,
  },
  view: {
    borderWidth: 0.7,
    borderColor: '#EF5A38',
    backgroundColor: '#EF5A38',
    marginTop: -10,
    marginLeft: 195,
    borderRadius: 20,
    width: 40,
    height: 10,
  },
  freeView: {
    marginTop: 20,
    borderWidth: 0.7,
    borderColor: '#EF5A38',
    backgroundColor: '#EF5A38',
    marginTop: -10,
    marginLeft: 240,
    borderRadius: 20,
    width: 20,
    height: 10,
  },
  fanImage: {
    marginLeft: 150,
    marginTop: 10,
  },
});
