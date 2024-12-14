import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';

const ResetPasswordPage = () => {
  const router = useRouter(); // Initialize router for navigation
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle password reset
  const handleResetPassword = () => {
    if (newPassword === confirmPassword) {
      console.log('Password reset successful!');
      router.push('/(tabs)/profile'); // Navigate to the profile page
    } else {
      console.log('Passwords do not match!');
    }
  };

  const handleBackPress = () => {
    router.push('/(tabs)/profile'); // Navigate back to the profile screen
    console.log('Back button pressed');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={60} // Adjust based on your app's layout
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.contentContainer}>
          {/* Logo at the top with padding */}
          <Image
            source={require('../../assets/images/react-logo.png')}
            style={styles.logo}
          />

          {/* Title */}
          <Text style={styles.title}>Reset Your Password</Text>

          {/* Explanation */}
          <Text style={styles.description}>
            Please make sure both passwords you input match. See below for
            password requirements. Once all requirements have been met,
            password will be reset and you will be redirected back to the
            profile screen to continue using the app.
          </Text>

          {/* Password Requirements */}
          <View style={styles.passwordRequirementsContainer}>
            <Text style={styles.passwordRequirementText}>• At least 8 characters
            </Text>
            <Text style={styles.passwordRequirementText}>• One uppercase letter
            </Text>
            <Text style={styles.passwordRequirementText}>• One lowercase letter
            </Text>
            <Text style={styles.passwordRequirementText}>• One number</Text>
            <Text style={styles.passwordRequirementText}>• One special character
            </Text>
          </View>

          {/* Back Button */}
          <TouchableOpacity
            style={[styles.button, styles.backButton]}
            onPress={handleBackPress}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>

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
          <TouchableOpacity
            style={[styles.button, styles.reset]}
            onPress={handleResetPassword}
          >
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentContainer: {
    width: '100%',
    maxWidth: 400, // Limit max width for larger screens
    alignItems: 'center',
  },
  logo: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    marginTop: 50,
    marginBottom: 20,
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
  backButton: {
    backgroundColor: '#007BFF',
    marginTop: 20,
    marginBottom: 50,
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
  reset: {
    marginTop: 45,
  },
});

export default ResetPasswordPage;
