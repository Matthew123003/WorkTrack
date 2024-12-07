import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Settings() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* Logo at the top with padding */}
      <Image 
        source={require('../../assets/images/react-logo.png')} 
        style={styles.logo} 
      />

      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButtonContainer} 
        onPress={() => {
          console.log('Back button pressed');
          router.push('/(tabs)/profile'); // Navigate back to the profile page
        }}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      
      {/* Welcome text */}
      <Text style={styles.text}>Welcome to the Settings Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 50, // Adjust top position for alignment
    left: 20, // Adjust left position for alignment
    backgroundColor: '#007BFF', // Back button background color
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    width: 75, // Set desired width for the logo
    height: 75, // Set desired height for the logo
    resizeMode: 'contain', // Keep the aspect ratio intact
    marginTop: 100, // Add padding from the top of the phone
    marginBottom: 20, // Add space between the logo and the welcome text
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
