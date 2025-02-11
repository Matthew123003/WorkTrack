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
  Alert
} from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios'; // Import Axios for API requests
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ResetPasswordPage = () => {
  const router = useRouter(); // Initialize router for navigation
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle password reset
  const handleResetPassword = () => {
    if (newPassword === confirmPassword) {
      try {
      Alert.alert("Success", "Your password been successfully reset!");
      console.log('Password reset successful!');
      // MAKE API CALL HERE TO RESET PASSWORD, MIGHT HAVE TO ADJUST FOR AUTHENTICATED USER
      router.push('/'); // Navigate to the home page
      } catch(error) {
        console.log("Passwords do not match or the following error has occured: ", error)
      };
    };
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image
            source={require('../../assets/images/react-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.headerText}>Reset Your Password</Text>
        </View>
      </View>

      {/* Scrollable content */}
      <KeyboardAwareScrollView
       contentContainerStyle={styles.contentContainer}
       extraScrollHeight={0} // Adjust based on your needs
       enableOnAndroid={true} // Ensures proper behavior on Android
       >
          {/* Explanatory Paragraph */}
          <Text style={styles.description}>
            Please make sure both passwords you input match. See below for password requirements. Once all requirements
            have been met, the password will be reset, and you will be redirected to the login screen to access the app
            with your new password.
          </Text>

          {/* Password Requirements */}
          <View style={styles.passwordRequirementsContainer}>
            <Text style={styles.passwordRequirementText}>PASSWORD REQUIREMENTS</Text>
            <Text style={styles.passwordRequirementText}>• At least 8 characters</Text>
            <Text style={styles.passwordRequirementText}>• One uppercase letter</Text>
            <Text style={styles.passwordRequirementText}>• One lowercase letter</Text>
            <Text style={styles.passwordRequirementText}>• One number</Text>
            <Text style={styles.passwordRequirementText}>• One special character</Text>
          </View>

          {/* New Password input */}
           <View style={styles.fieldContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>New Password</Text>
            </View>
             <TextInput
              style={styles.input}
              placeholder="New Password"
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
              />
           </View>

          {/* Confirm Password input */}
                    <View style={styles.fieldContainer}>
                       <View style={styles.labelContainer}>
                          <Text style={styles.label}>Confirm New Password</Text>
                       </View>
                    <TextInput
                      style={styles.input}
                      placeholder="Confirm New Password"
                      secureTextEntry
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                    />
                    </View>

          {/* Reset Password Button */}
          <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#2F4F4F',
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  logo: {
    width: 35,
    height: 35,
    marginRight: 4,
  },
  headerText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  contentContainer: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
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
    backgroundColor: '#6200ee',
    alignItems: 'center',
    marginBottom: 10, // Add margin for spacing between buttons
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fieldContainer: {
    marginBottom: 15,
    width: '100%',
    },
    label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
    },
    labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    },
});

export default ResetPasswordPage;
