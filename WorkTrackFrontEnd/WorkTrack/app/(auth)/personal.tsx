import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  KeyboardAvoidingView, 
  ScrollView, 
  Platform 
} from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios'; // Import Axios for API requests

export default function Personal() {
  const router = useRouter();

  // Function to handle back navigation
  const handleBack = () => {
    console.log("Back button pressed");
    router.push("/(tabs)/profile"); // Adjust route to your desired back page
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
          <Text style={styles.headerText}>Update Personal Information</Text>
        </View>
      </View>

      {/* Scrollable Content with KeyboardAvoidingView */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.contentContainer}
        >
          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>

          {/* Explanation */}
          <Text style={styles.description}>
            Update your information on this page. Not all fields have to filled out. Just fill out the field you want to update.
          </Text>

          {/* Input fields */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              placeholderTextColor="#888"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your first name"
              placeholderTextColor="#888"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your last name"
              placeholderTextColor="#888"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Street Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your street address"
              placeholderTextColor="#888"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>City</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your city"
              placeholderTextColor="#888"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>State</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your state"
              placeholderTextColor="#888"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>ZIP Code</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your ZIP code"
              placeholderTextColor="#888"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              placeholderTextColor="#888"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email address"
              placeholderTextColor="#888"
              keyboardType="email-address"
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity 
            style={[styles.button, styles.submitButton]} 
            onPress={() => {
              // MAKE API CALL HERE TO UPDATE USER INFORMATION
              console.log('Submit button pressed');
              router.push('/(tabs)/profile'); // Navigate to the profile page
            }}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollContainer: {
    paddingBottom: 16,
    paddingTop: 20, // Space between header and content
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
    width: 30,
    height: 30,
    marginRight: 4,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  contentContainer: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    paddingHorizontal: 16,
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
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#6200ee',
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
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    margin: 10,
    paddingHorizontal: 20, // Add padding for input fields
  },
});
