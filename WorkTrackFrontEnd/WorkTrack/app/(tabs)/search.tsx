import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const Search = () => {
  const [activeTab, setActiveTab] = useState('newJobs'); // State to track the active toggle button
  const [query, setQuery] = useState(''); // State to track the search input

  // Function to handle the search button click
  const handleSearch = () => {
    if (activeTab === 'newJobs') {
      console.log('Searching for new jobs with query:', query);
      // API call to external job search API logic here
    } else if (activeTab === 'appliedJobs') {
      console.log('Searching for applied jobs with query:', query);
      // internal API call to backend logic here
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo at the top */}
      <Image 
        source={require('../../assets/images/react-logo.png')} 
        style={styles.logo} 
      />
      {/* Welcome text */}
      <Text style={styles.text}>Welcome to the Search Screen!</Text>

      {/* Toggle Button */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            activeTab === 'newJobs' && styles.activeToggleButton,
          ]}
          onPress={() => setActiveTab('newJobs')}
        >
          <Text
            style={[
              styles.toggleText,
              activeTab === 'newJobs' && styles.activeToggleText,
            ]}
          >
            New Jobs
          </Text>
        </TouchableOpacity>
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
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Enter your search query..."
        value={query}
        onChangeText={setQuery}
      />

      {/* Search Button */}
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      {/* Applied Jobs Display Area */}
      {activeTab === 'appliedJobs' && (
        <ScrollView style={styles.resultsContainer}>
          <View style={styles.jobCard}>
            <Text style={styles.jobTitle}>Software Engineer</Text>
            <Text>Company: Placeholder Inc.</Text>
            <Text>Description: Develop and maintain software solutions.</Text>
            <Text>Date Applied: 2024-12-01</Text>
            <Text>Contact: Jane Doe</Text>
            <Text>Email: jane.doe@placeholder.com</Text>
          </View>
          <View style={styles.jobCard}>
            <Text style={styles.jobTitle}>Project Manager</Text>
            <Text>Company: Example Corp.</Text>
            <Text>Description: Oversee project timelines and deliverables.</Text>
            <Text>Date Applied: 2024-11-28</Text>
            <Text>Contact: John Smith</Text>
            <Text>Email: john.smith@example.com</Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

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
  searchBar: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  searchButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultsContainer: {
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

export default Search;
