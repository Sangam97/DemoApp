import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        // Retrieve user ID from AsyncStorage
        const userId = await AsyncStorage.getItem('userId');

        if (userId) {
          // If user ID exists, navigate to Home
          navigation.navigate('Tabs');
        } else {
          // If no user ID, navigate to Login
          navigation.navigate('Login');
        }
      } catch (error) {
        console.log('Error checking login status', error);
        navigation.navigate('Login');
      }
    };

    // Call the function to check login status
    checkLoginStatus();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007BFF" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    marginTop: 16,
  },
});

export default Splash;
