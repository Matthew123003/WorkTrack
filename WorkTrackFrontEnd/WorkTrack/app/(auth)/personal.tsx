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
import { useRouter } from 'expo-router';

export default function Personal() {
  const router = useRouter();

  const handleBackPress = () => {
    console.log('Back button pressed');
    // Navigate to the previous screen
  };

  const handleSubmit = () => {
    console.log('Submit button pressed');
    // Add functionality for form submission if needed
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
        {/* Logo */}
        <Image 
          source={require('../../assets/images/react-logo.png')} 
          style={styles.logo} 
        />
        {/* Header */}
        <Text style={styles.text}>Update Personal Information</Text>

        {/* Back Button */}
        <TouchableOpacity 
          style={[styles.button, styles.backButton]} 
          onPress={() => router.push('/(tabs)/profile')}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

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
          onPress={() => router.push('/(tabs)/profile')}
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
  },
  logo: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    marginTop: 50,
    marginBottom: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  fieldContainer: {
    marginBottom: 15,
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
    backgroundColor: '#fff',
  },
  button: {
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
  },
  backButton: {
    backgroundColor: '#007BFF',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#28A745',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

