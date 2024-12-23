import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios'; // Import Axios for API requests
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LocateAccountPage = () => {
  const router = useRouter(); // Initialize router for navigation
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [lastName, setLastName] = useState('');

  // Function to handle submit
  const handleSubmit = () => {
    try{
    Alert.alert("Success", "Your data has been successfully retrieved!");
    console.log('Submitted:', { username, email, zipcode, lastName });
    // MAKE API CALL HERE TO VALIDATE INFO AND THEN NAVIGATE TO PASSWORD.TSX
    router.push("/(auth)/password");
    }catch(error) {
      Alert.alert("Failure", "Your data could not be found, please check your information and try again.");
      console.log(error);
    }
  }
  

  // Function to handle back navigation
  const handleBack = () => {
    console.log("Back button pressed");
    router.push("/"); // BACK TO INDEX.TSX aka MAIN PAGE
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
          <Text style={styles.headerText}>Locate Your Account</Text>
        </View>
      </View>

      {/* Scrollable Content with KeyboardAvoidingView */}
        <KeyboardAwareScrollView
               contentContainerStyle={styles.scrollContainer}
               extraScrollHeight={5} // Adjust based on your needs
               enableOnAndroid={true} // Ensures proper behavior on Android
               >
          {/* Explanatory Paragraph */}
          <Text style={styles.description}>
            Please enter all the required information below to help us locate your account. Once verified, we will allow you to reset your password.
          </Text>

          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>

          {/* Username input */}
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            autoFocus={true} // Automatically focus this input on page load
          />

          {/* Email input */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          {/* ZIP Code input */}
          <TextInput
            style={styles.input}
            placeholder="ZIP Code"
            keyboardType="numeric"
            value={zipcode}
            onChangeText={setZipcode}
          />

          {/* Last Name input */}
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />

          {/* Submit Button */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
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
  scrollContainer: {
    paddingBottom: 16,
    paddingTop: 20, // Space between header and content
    paddingHorizontal: 20,
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
  contentContainer: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
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
  backButton: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: '#6200ee',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LocateAccountPage;
