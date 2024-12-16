import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform, 
  TouchableOpacity,
  Image 
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
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image 
            source={require('../../assets/images/react-logo.png')} 
            style={styles.logo} 
          />
          <Text style={styles.headerText}>Join WorkTrack</Text>
        </View>
      </View>
 
      {/* Scrollable Content with KeyboardAvoidingView */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.contentContainer}
        >
          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
 
          {/* Explanation */}
          <Text style={styles.description}>
            Please fill out all fields. Make sure both passwords match. Once all fields have been filled out with valid information and both passwords match, you will be redirected to the main page to login in with your new credentials.
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
            onPress={handleSignUpSubmit}  // Added function call here
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
    flexGrow: 1,  // Ensures the content can scroll properly
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
