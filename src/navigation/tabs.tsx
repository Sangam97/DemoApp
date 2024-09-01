import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native'; // Import Image component
import Home from '../screens/HomeScreen';
import Dashboard from '../screens/Dashboard';
import Profile from '../screens/Profile';
import Contact from '../screens/Contact';

// Import your images
import homeIcon from '../../assets/images/home.png';
import dashboardIcon from '../../assets/images/dashboard.png';
import profileIcon from '../../assets/images/profile.png';
import contactIcon from '../../assets/images/user.png';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconSource;

          switch (route.name) {
            case 'Home':
              iconSource = homeIcon;
              break;
            case 'Dashboard':
              iconSource = dashboardIcon;
              break;
            case 'Profile':
              iconSource = profileIcon;
              break;
            case 'Contact':
              iconSource = contactIcon;
              break;
            default:
              iconSource = homeIcon; // Default icon
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: size,
                height: size,
                tintColor: color, // Optional: apply color tint if desired
              }}
            />
          );
        },
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
};

export default Tabs;
