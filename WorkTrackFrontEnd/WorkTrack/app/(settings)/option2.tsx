import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Option2() {
  const router = useRouter(); // Initialize router for navigation

  const handleBack = () => {
    router.push("/(settings)"); // Adjust this route to your desired previous screen
  };

  return (
    <View style={styles.container}>
      {/* Logo at the top with padding */}
      <Image 
        source={require('../../assets/images/react-logo.png')} 
        style={styles.logo} 
      />

      {/* Welcome text */}
      <Text style={styles.text}>Welcome to the Option 2 Screen!</Text>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container fill the entire screen
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    backgroundColor: '#f5f5f5', // Add a light background color for consistency
    padding: 20, // Add some padding around the content
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
    marginBottom: 20, // Add space between the text and the back button
  },
  backButton: {
    width: '100%', // Full width for consistency
    maxWidth: 300, // Limit the width for larger screens
    paddingVertical: 15, // Vertical padding for the button
    borderRadius: 5, // Rounded corners
    backgroundColor: '#6c757d', // Gray background for the button
    alignItems: 'center', // Center the text inside the button
    marginTop: 20, // Add space above the button
  },
  backButtonText: {
    color: '#fff', // White text color for contrast
    fontSize: 16, // Font size for readability
    fontWeight: 'bold', // Bold text for emphasis
  },
});
