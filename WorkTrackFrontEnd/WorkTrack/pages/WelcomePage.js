import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Navbar01 from '../components/Navbar01'; 
import Footer01 from '../components/Footer01'; 
import LogoBanner from '../components/LogoBanner';

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <LogoBanner />
      <Navbar01 /> 
      <Text style={styles.text}>
        Welcome to TechTrack!{'\n'}
        Your Ultimate Companion for Managing Tech Opportunities.
      </Text>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/images/finding-job.jpg')} 
          style={styles.image} 
          accessibilityLabel="Job"
        />
      </View>
      <Footer01 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    marginVertical: 40,
  },
  image: {
    width: 160,  // Adjust width as needed
    height: 160, // Adjust height as needed
  },
});

export default WelcomePage;
