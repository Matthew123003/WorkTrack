import React, { useState } from 'react';
import { View,
           Text,
           StyleSheet,
           TextInput,
           ScrollView,
           KeyboardAvoidingView,
           Platform,
           TouchableOpacity,
           Image,
           Alert  } from 'react-native';
import axios from 'axios'; // Import Axios for API requests
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useRouter } from 'expo-router'; // Use expo-router's useRouter hook


export default function SignUp() {

  const router = useRouter(); // Initialize router from expo-router

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    email: '',
  });

  // Handle input changes
  const handleInputChange = (field: any, value: any) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSignUpSubmit = async () => {
    const {
      username,
      password,
      confirmPassword,
      firstName,
      lastName,
      streetAddress,
      city,
      state,
      zipCode,
      phoneNumber,
      email,
    } = formData;

    if (
      !username.trim() ||
      !password.trim() ||
      !confirmPassword.trim() ||
      !firstName.trim() ||
      !lastName.trim() ||
      !streetAddress.trim() ||
      !city.trim() ||
      !state.trim() ||
      !zipCode.trim() ||
      !phoneNumber.trim() ||
      !email.trim()
    ) {
      Alert.alert('Error', 'Please fill out all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      // API call to create a new user
      const response = await axios.post('http://10.0.2.2:8080/users/newuser', {
        username,
        password,
        firstName,
        lastName,
        streetAddress,
        city,
        state,
        zipCode,
        phoneNumber,
        email,
      });
        // ADJUST API CALL TO OTHER PROJECT TO VERIFY, STILL GETTING FAILURE

      if (response.status === 201) {
        Alert.alert('Success', 'Your data has been submitted successfully! Please now login to the app!');
        router.push('/')
      }
    } catch (error) {
      console.log("Error Response:", error);
      console.log("Status Code:", error);
      console.error('Error creating user:', JSON.stringify(error, null, 2));
      Alert.alert('Error', 'An error occurred while creating your account. Please try again.');
    }
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
      <KeyboardAwareScrollView
                   contentContainerStyle={styles.scrollContainer}
                   extraScrollHeight={0} // Adjust based on your needs
                   enableOnAndroid={true} // Ensures proper behavior on Android
                   >
          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
 
          {/* Explanation */}
          <Text style={styles.description}>
            Please fill out all fields. Make sure both passwords match. Once all fields have been filled out with valid information and both passwords match, you will be redirected to the main page to login in with your new credentials. Required fields are also marked with a red star.
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
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Username</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              placeholderTextColor="#888"
              value={formData.username}
              onChangeText={(value) => handleInputChange('username', value)}
            />
          </View>

          <View style={styles.fieldContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Password</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#888"
              secureTextEntry
              value={formData.password}
              onChangeText={(value) => handleInputChange('password', value)}
            />
          </View>

          <View style={styles.fieldContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Confirm Password</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              placeholderTextColor="#888"
              secureTextEntry
              value={formData.confirmPassword}
              onChangeText={(value) => handleInputChange('confirmPassword', value)}
            />
          </View>
 
          <View style={styles.fieldContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>First Name</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter your first name"
              placeholderTextColor="#888"
              value={formData.firstName}
              onChangeText={(value) => handleInputChange('firstName', value)}
            />
          </View>
 
          <View style={styles.fieldContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Last Name</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter your last name"
              placeholderTextColor="#888"
              value={formData.lastName}
              onChangeText={(value) => handleInputChange('lastName', value)}
            />
          </View>
 
          <View style={styles.fieldContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Street Address</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter your street address"
              placeholderTextColor="#888"
              value={formData.streetAddress}
              onChangeText={(value) => handleInputChange('streetAddress', value)}
            />
          </View>
 
          <View style={styles.fieldContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>City</Text>
              <Text style={styles.star}>*</Text>
            </View> 
            <TextInput
              style={styles.input}
              placeholder="Enter your city"
              placeholderTextColor="#888"
              value={formData.city}
              onChangeText={(value) => handleInputChange('city', value)}
            />
          </View>
 
          <View style={styles.fieldContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>State</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter your state"
              placeholderTextColor="#888"
              value={formData.state}
              onChangeText={(value) => handleInputChange('state', value)}
            />
          </View>
 
          <View style={styles.fieldContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>ZIP Code</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter your ZIP code"
              placeholderTextColor="#888"
              keyboardType="numeric"
              value={formData.zipCode}
              onChangeText={(value) => handleInputChange('zipCode', value)}
            />
          </View>
 
          <View style={styles.fieldContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Phone Number</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              placeholderTextColor="#888"
              keyboardType="phone-pad"
              value={formData.phoneNumber}
              onChangeText={(value) => handleInputChange('phoneNumber', value)}
            />
          </View>
 
          <View style={styles.fieldContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Email Address</Text>
              <Text style={styles.star}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter your email address"
              placeholderTextColor="#888"
              keyboardType="email-address"
              value={formData.email}
              onChangeText={(value) => handleInputChange('email', value)}
            />
          </View>
 
          {/* Submit Button */}
          <TouchableOpacity 
            style={[styles.button, styles.submitButton]} 
            onPress={handleSignUpSubmit}  // Added function call here
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
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
    paddingHorizontal: 20,
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
  star: {
    color: 'red',
    marginLeft: 5,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});
