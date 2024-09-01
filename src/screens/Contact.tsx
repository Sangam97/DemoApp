import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Contact = ({navigation}) => {
  const [contactData, setContactData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('userProfile');
        if (storedData) {
          setContactData(JSON.parse(storedData));
        } else {
          const storedEmail = await AsyncStorage.getItem('userEmail');
          if (storedEmail) {
            setContactData(prevData => ({...prevData, email: storedEmail}));
          }
        }
      } catch (error) {
        console.error('Error loading contact data:', error);
      }
    };

    loadData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear(); // Clears all data from AsyncStorage
      Alert.alert('Logged Out', 'You have been logged out successfully.');
      navigation.navigate('Login'); // Navigate to the login screen after logout
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>First Name:</Text>
      <Text style={styles.value}>
        {contactData.firstName || 'First Name not provided'}
      </Text>

      <Text style={styles.label}>Last Name:</Text>
      <Text style={styles.value}>
        {contactData.lastName || 'Last Name not provided'}
      </Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>
        {contactData.email || 'Email not provided'}
      </Text>

      <Text style={styles.label}>Mobile Number:</Text>
      <Text style={styles.value}>
        {contactData.mobileNumber || 'Mobile Number not provided'}
      </Text>

      <View style={styles.logoutContainer}>
        <Button title="Logout" onPress={handleLogout} color="#d9534f" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  value: {
    marginBottom: 16,
    fontSize: 16,
    color: '#333',
  },
  logoutContainer: {
    marginTop: 'auto', // Pushes the logout button to the bottom
  },
});

export default Contact;
