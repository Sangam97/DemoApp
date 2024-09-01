import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [profileData, setProfileData] = useState({
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
          setProfileData(JSON.parse(storedData));
        } else {
          const storedEmail = await AsyncStorage.getItem('userEmail');
          if (storedEmail) {
            setProfileData(prevData => ({...prevData, email: storedEmail}));
          }
        }
      } catch (error) {
        console.error('Error loading profile data:', error);
      }
    };

    loadData();
  }, []);

  const handleSave = async () => {
    try {
      await AsyncStorage.setItem('userProfile', JSON.stringify(profileData));
      alert('Profile saved successfully!');
    } catch (error) {
      console.error('Error saving profile data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>First Name:</Text>
      <TextInput
        style={styles.input}
        value={profileData.firstName}
        onChangeText={text => setProfileData({...profileData, firstName: text})}
        placeholder="Enter First Name"
      />

      <Text style={styles.label}>Last Name:</Text>
      <TextInput
        style={styles.input}
        value={profileData.lastName}
        onChangeText={text => setProfileData({...profileData, lastName: text})}
        placeholder="Enter Last Name"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={profileData.email}
        onChangeText={text => setProfileData({...profileData, email: text})}
        placeholder="Enter Email"
        editable={false} // Email is non-editable as it's saved during login
      />

      <Text style={styles.label}>Mobile Number:</Text>
      <TextInput
        style={styles.input}
        value={profileData.mobileNumber}
        onChangeText={text =>
          setProfileData({...profileData, mobileNumber: text})
        }
        placeholder="Enter Mobile Number"
      />

      <Button title="Save Profile" onPress={handleSave} />
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default Profile;
