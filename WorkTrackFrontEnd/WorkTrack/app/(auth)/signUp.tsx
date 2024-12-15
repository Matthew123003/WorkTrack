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
import { useRouter } from 'expo-router'; // Use expo-router's useRouter hook

export default function SignUp() {
  const router = useRouter(); // Initialize router from expo-router
  
  const handleSignUpSubmit = () => {
    router.push('/'); // Navigate to the home screen
    console.log('Sign Up form submitted');
    // Add API call here to add sign up information, create a new user in database
  };

  const handleBackPress = () => {
    router.push('/'); // Navigate to the home screen
    console.log('Back button pressed');
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
        {/* Back Button */}
        <TouchableOpacity 
          style={[styles.button, styles.backButton]} 
          onPress={handleBackPress}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Sign Up Page</Text>
        </View>

        {/* Explanation */}
        <Text style={styles.description}>
          Please make sure both passwords you input match. See below for password requirements. 
        </Text>
        
        {/* Password Requirements */}
        <View style={styles.passwordRequirementsContainer}>
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

        {/* Zipcode Field */}
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

        {/* Submit button */}
        <TouchableOpacity 
          style={[styles.button, styles.submitButton]} 
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
    padding: 0, // No horizontal padding
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20, // Space below the header
    backgroundColor: '#f5f5f5', // Optional: matches the page background
    alignItems: 'center', // Center-aligns the header content
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  fieldContainer: {
    flex: 1,
    marginBottom: 20,
    paddingHorizontal: 20, // Add padding for input fields
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
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
    width: '90%',
    height: 50, // Adjusted height to match consistency
    borderRadius: 5,
    alignItems: 'center', 
    justifyContent: 'center', 
    alignSelf: 'center',
    marginTop: 20,
  },
  backButton: {
    backgroundColor: '#007BFF', // Blue color for the Back button
    marginTop: 50, // Add space from the top of the screen
  },
  submitButton: {
    backgroundColor: '#28A745', // Default green for Submit
    marginBottom: 50, // Add space from the bottom of the screen
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
});
