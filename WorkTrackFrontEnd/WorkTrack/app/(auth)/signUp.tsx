import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform, 
  TouchableOpacity 
} from 'react-native';

export default function SignUp() {
  const handleSignUpSubmit = () => {
    console.log('Sign Up form submitted');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Sign Up</Text>

        {/* Input fields with labels */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#888"
            secureTextEntry
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            placeholderTextColor="#888"
            secureTextEntry
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

        {/* Address fields */}
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

        {/* Submit button */}
        <TouchableOpacity 
          style={[styles.button, styles.signUpButton]} 
          onPress={handleSignUpSubmit}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  fieldContainer: {
    width: '100%',
    marginBottom: 20, // Add space between fields
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5, // Space between label and input box
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 5,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpButton: {
    backgroundColor: '#28A745', // Green color for the Submit button
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
