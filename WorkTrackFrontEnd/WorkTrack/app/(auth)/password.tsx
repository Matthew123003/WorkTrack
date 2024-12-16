import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const ResetPasswordPage = () => {
  const router = useRouter(); // Initialize router for navigation
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle password reset
  const handleResetPassword = () => {
    if (newPassword === confirmPassword) {
      console.log('Password reset successful!');
      router.push('/'); // Navigate to the home page
    } else {
      console.log('Passwords do not match!');
      // Optionally, display an error message here
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>

        {/* Logo Section */}
        <Image
        source={require('../../assets/images/react-logo.png')} // Replace with the actual path to your logo
        style={styles.logo}
        resizeMode="contain"
        />

        {/* Title */}
        <Text style={styles.title}>Reset Your Password</Text>

        {/* Explanation */}
        <Text style={styles.description}>
          Please make sure both passwords you input match. See below for password requirements. Once all requirements have been met, password will be reset and you be redirected to the login screen to access the app with your new password.
        </Text>

        {/* Password Requirements */}
        <View style={styles.passwordRequirementsContainer}>
          <Text style={styles.passwordRequirementText}>
            PASSWORD REQUIREMENTS
          </Text>
          <Text style={styles.passwordRequirementText}>
            • At least 8 characters
          </Text>
          <Text style={styles.passwordRequirementText}>
            • One uppercase letter
          </Text>
          <Text style={styles.passwordRequirementText}>
            • One lowercase letter
          </Text>
          <Text style={styles.passwordRequirementText}>
            • One number
          </Text>
          <Text style={styles.passwordRequirementText}>
            • One special character
          </Text>
        </View>

        {/* New Password Input */}
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />

        {/* Confirm Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Confirm New Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* Reset Password Button */}
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  contentContainer: {
    width: '100%',
    maxWidth: 400, // Limit max width for larger screens
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: '#007BFF',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    margin: 10,
  },
  passwordRequirementsContainer: {
    width: '100%',
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  passwordRequirementText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  logo: {
    width: 100, // Adjust the width of your logo
    height: 100, // Adjust the height of your logo
    marginBottom: 20, // Space below the logo
  },
});

export default ResetPasswordPage;
