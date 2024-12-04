import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Jobs() {
  return (
    <View style={styles.container}>
      {/* Logo at the top with padding */}
      <Image 
        source={require('../../assets/images/react-logo.png')} 
        style={styles.logo} 
      />
      {/* Welcome text */}
      <Text style={styles.text}>Welcome to the Jobs Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 75, // Set desired width for the logo
    height: 75, // Set desired height for the logo
    resizeMode: 'contain', // Keep the aspect ratio intact
    marginTop: 50, // Add padding from the top of the phone
    marginBottom: 20, // Add space between the logo and the welcome text
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
