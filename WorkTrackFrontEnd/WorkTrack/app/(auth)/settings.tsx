import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Settings() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image 
        source={require('../../assets/images/react-logo.png')} 
        style={styles.logo} 
      />

      {/* Title */}
      <Text style={styles.text}>Welcome to the Settings Screen!</Text>

      {/* Back Button */}
      <TouchableOpacity 
        style={[styles.button, styles.backButton]} 
        onPress={() => {
          console.log('Back button pressed');
          router.push('/(tabs)/profile'); // Navigate back to the profile page
        }}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 75, // Logo size to match the Personal page
    height: 75,
    resizeMode: 'contain',
    marginTop: 50, // Top padding to align with Personal page
    marginBottom: 20, // Space between logo and title
  },
  text: {
    fontSize: 20, // Match font size of the title on Personal page
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30, // Space between title and back button
  },
  button: {
    height: 50, // Match back button height
    borderRadius: 5, 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '90%', // Match width of the button
  },
  backButton: {
    backgroundColor: '#007BFF', // Same color as Personal page back button
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
