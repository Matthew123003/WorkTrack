import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { useRouter } from 'expo-router';

const Settings = () => {
  const router = useRouter();

  const handleBackPress = () => {
    console.log('Back button pressed');
    router.push('/(tabs)/profile'); // Navigate back to the profile screen
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} // Adjust if necessary
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          {/* Logo at the top with padding */}
          <Image 
            source={require('../../assets/images/react-logo.png')} 
            style={styles.logo} 
          />

          {/* Title */}
          <Text style={styles.text}>Welcome to the Settings Screen!</Text>

          {/* Back Button */}
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={handleBackPress}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>

          {/* Settings Options Table */}
          <View style={styles.table}>
            {/* Option 1 */}
            <View style={styles.row}>
              <Text style={styles.rowText}>Option 1</Text>
              <TouchableOpacity 
                style={styles.button} 
                onPress={() => {
                  console.log('Option 1 button pressed');
                  router.push('/(tabs)/profile'); // Navigate back to profile
                }}
              >
                <Text style={styles.buttonText}>Go</Text>
              </TouchableOpacity>
            </View>

            {/* Option 2 */}
            <View style={styles.row}>
              <Text style={styles.rowText}>Option 2</Text>
              <TouchableOpacity 
                style={styles.button} 
                onPress={() => {
                  console.log('Option 2 button pressed');
                  router.push('/(tabs)/profile'); // Navigate back to profile
                }}
              >
                <Text style={styles.buttonText}>Go</Text>
              </TouchableOpacity>
            </View>

            {/* Option 3 */}
            <View style={styles.row}>
              <Text style={styles.rowText}>Option 3</Text>
              <TouchableOpacity 
                style={styles.button} 
                onPress={() => {
                  console.log('Option 3 button pressed');
                  router.push('/(tabs)/profile'); // Navigate back to profile
                }}
              >
                <Text style={styles.buttonText}>Go</Text>
              </TouchableOpacity>
            </View>

            {/* Option 4 */}
            <View style={styles.row}>
              <Text style={styles.rowText}>Option 4</Text>
              <TouchableOpacity 
                style={styles.button} 
                onPress={() => {
                  console.log('Option 4 button pressed');
                  router.push('/(tabs)/profile'); // Navigate back to profile
                }}
              >
                <Text style={styles.buttonText}>Go</Text>
              </TouchableOpacity>
            </View>

            {/* Option 5 */}
            <View style={styles.row}>
              <Text style={styles.rowText}>Option 5</Text>
              <TouchableOpacity 
                style={styles.button} 
                onPress={() => {
                  console.log('Option 5 button pressed');
                  router.push('/(tabs)/profile'); // Navigate back to profile
                }}
              >
                <Text style={styles.buttonText}>Go</Text>
              </TouchableOpacity>
            </View>

            {/* Option 6 */}
            <View style={styles.row}>
              <Text style={styles.rowText}>Option 6</Text>
              <TouchableOpacity 
                style={styles.button} 
                onPress={() => {
                  console.log('Option 6 button pressed');
                  router.push('/(tabs)/profile'); // Navigate back to profile
                }}
              >
                <Text style={styles.buttonText}>Go</Text>
              </TouchableOpacity>
            </View>

            {/* Option 7 */}
            <View style={styles.row}>
              <Text style={styles.rowText}>Option 7</Text>
              <TouchableOpacity 
                style={styles.button} 
                onPress={() => {
                  console.log('Option 7 button pressed');
                  router.push('/(tabs)/profile'); // Navigate back to profile
                }}
              >
                <Text style={styles.buttonText}>Go</Text>
              </TouchableOpacity>
            </View>

            {/* Option 8 */}
            <View style={styles.row}>
              <Text style={styles.rowText}>Option 8</Text>
              <TouchableOpacity 
                style={styles.button} 
                onPress={() => {
                  console.log('Option 8 button pressed');
                  router.push('/(tabs)/profile'); // Navigate back to profile
                }}
              >
                <Text style={styles.buttonText}>Go</Text>
              </TouchableOpacity>
            </View>

            {/* Option 9 */}
            <View style={styles.row}>
              <Text style={styles.rowText}>Option 9</Text>
              <TouchableOpacity 
                style={styles.button} 
                onPress={() => {
                  console.log('Option 9 button pressed');
                  router.push('/(tabs)/profile'); // Navigate back to profile
                }}
              >
                <Text style={styles.buttonText}>Go</Text>
              </TouchableOpacity>
            </View>

            {/* Option 10 */}
            <View style={styles.row}>
              <Text style={styles.rowText}>Option 10</Text>
              <TouchableOpacity 
                style={styles.button} 
                onPress={() => {
                  console.log('Option 10 button pressed');
                  router.push('/(tabs)/profile'); // Navigate back to profile
                }}
              >
                <Text style={styles.buttonText}>Go</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Ensures background covers entire screen
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20, // Adds vertical padding for better spacing
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    marginTop: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center', // Ensures text is centered
  },
  backButton: {
    backgroundColor: '#007BFF', // Blue color for the Back button
    width: '90%', // Matches the width of the table
    height: 50, // Consistent height
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20, // Space between back button and table
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  table: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  rowText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF', // Blue color for option buttons
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
});

export default Settings;
