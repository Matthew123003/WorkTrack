import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios'; // Import Axios for API requests

export default function Option3() {
  const router = useRouter(); // Initialize router for navigation

  const handleBack = () => {
    router.push("/(auth)/settings");
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
          <Text style={styles.headerText}>Option 3</Text>
        </View>
      </View>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
       
       {/* Option Data */}
      <Text style={styles.optionData}>OPTION DATA</Text>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
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
  scrollContainer: {
    paddingBottom: 16,
    paddingTop: 20, // Space between header and content
  },
  section: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  contentCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  contentText: {
    fontSize: 16,
    color: '#333',
  },
  backButton: {
    width: '100%', // Full width for consistency
    //maxWidth: 300, // Limit the width for larger screens
    paddingVertical: 15, // Vertical padding for the button
    // borderRadius: 5, // Rounded corners
    backgroundColor: '#6200ee', // Gray background for the button
    alignItems: 'center', // Center the text inside the button
    // marginTop: 20, // Add space above the button
  },
  backButtonText: {
    color: '#fff', // White text color for contrast
    fontSize: 16, // Font size for readability
    fontWeight: '600', // Bold text for emphasis
  },
  optionData: {
    textAlign: 'center',
  }
});