import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function Jobs() {
  const [activeTab, setActiveTab] = useState('appliedJobs'); // State to track the active toggle

  return (
    <View style={styles.container}>
      {/* Logo at the top */}
      <Image 
        source={require('../../assets/images/react-logo.png')} 
        style={styles.logo} 
      />
      
      {/* Welcome text */}
      <Text style={styles.text}>Welcome to the Jobs Screen!</Text>

      {/* Toggle Button */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeTab === 'appliedJobs' && styles.activeToggleButton,
          ]}
          onPress={() => setActiveTab('appliedJobs')}
        >
          <Text
            style={[
              styles.toggleText,
              activeTab === 'appliedJobs' && styles.activeToggleText,
            ]}
          >
            Applied Jobs
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeTab === 'savedJobs' && styles.activeToggleButton,
          ]}
          onPress={() => setActiveTab('savedJobs')}
        >
          <Text
            style={[
              styles.toggleText,
              activeTab === 'savedJobs' && styles.activeToggleText,
            ]}
          >
            Saved Jobs
          </Text>
        </TouchableOpacity>
      </View>

      {/* Display Area */}
      <ScrollView style={styles.jobsContainer}>
        {activeTab === 'appliedJobs' ? (
          <View style={styles.jobCard}>
            <Text style={styles.jobTitle}>Software Developer</Text>
            <Text>Company: Tech Corp</Text>
            <Text>Status: Applied on 2024-12-01</Text>
          </View>
        ) : (
          <View style={styles.jobCard}>
            <Text style={styles.jobTitle}>UI/UX Designer</Text>
            <Text>Company: Design Studio</Text>
            <Text>Status: Saved</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: '#ddd',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeToggleButton: {
    backgroundColor: '#007bff',
  },
  toggleText: {
    fontSize: 16,
    color: '#333',
  },
  activeToggleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  jobsContainer: {
    flex: 1,
    marginTop: 10,
  },
  jobCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
