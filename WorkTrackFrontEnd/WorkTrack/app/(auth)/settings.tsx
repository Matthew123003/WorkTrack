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
import axios from 'axios'; // Import Axios for API requests

const Settings = () => {
  const router = useRouter();

  const handleBackPress = () => {
    console.log('Back button pressed');
    router.push('/(tabs)/profile'); // Navigate back to the profile screen
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
              <Text style={styles.headerText}>Settings</Text>
            </View>
          </View>

      {/* Body with KeyboardAvoidingView and ScrollView */}
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} // Adjust if necessary
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
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
                  router.push('/(settings)/option1'); // Navigate to Option 1
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
                  router.push('/(settings)/option2'); // Navigate to Option 2
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
                  router.push('/(settings)/option3'); // Navigate to Option 3
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
                  router.push('/(settings)/option4'); // Navigate to Option 4
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
                  router.push('/(settings)/option5'); // Navigate to Option 5
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
                  router.push('/(settings)/option6'); // Navigate to Option 6
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
                  router.push('/(settings)/option7'); // Navigate to Option 7
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
                  router.push('/(settings)/option8'); // Navigate to Option 8
                }}
              >
                <Text style={styles.buttonText}>Go</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
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
    fontSize: 21,
    color: '#fff',
    fontWeight: 'bold',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  backButton: {
    backgroundColor: '#6200ee',
    width: '90%',
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
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
    backgroundColor: '#6200ee',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
});

export default Settings;
