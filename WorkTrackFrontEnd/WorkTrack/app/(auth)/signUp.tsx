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
      behavior={Platform.OS === 'ios' ? 'padding' : undefined} // Handles keyboard on iOS, no effect on Android
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Sign Up</Text>

        {/* Input fields */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#888"
        />

        {/* Address fields */}
        <TextInput
          style={styles.input}
          placeholder="Street Address"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="State"
          placeholderTextColor="#888"
        />

        {/* Additional fields */}
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
        />

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
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
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
