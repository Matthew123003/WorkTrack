import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

const Search = () => {
  const [isNewJobsSelected, setIsNewJobsSelected] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSearchType = () => {
    setIsNewJobsSelected(!isNewJobsSelected);
  };

  const handleSearch = () => {
    console.log(`Searching for ${isNewJobsSelected ? 'new' : 'applied'} jobs with query: ${searchQuery}`);
    // Execute search logic here
  };

  return (
    <View style={styles.container}>
      {/* Logo at the top with padding */}
      <Image 
        source={require('../../assets/images/react-logo.png')} 
        style={styles.logo} 
      />
      {/* Welcome text */}
      <Text style={styles.text}>Welcome to the Search Screen!</Text>

      {/* Toggle Button */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, isNewJobsSelected && styles.activeButton]}
          onPress={() => setIsNewJobsSelected(true)}
        >
          <Text style={[styles.toggleButtonText, isNewJobsSelected && styles.activeButtonText]}>New Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, !isNewJobsSelected && styles.activeButton]}
          onPress={() => setIsNewJobsSelected(false)}
        >
          <Text style={[styles.toggleButtonText, !isNewJobsSelected && styles.activeButtonText]}>Applied Jobs</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Enter your search query"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Search Button */}
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 75, // Set desired width for the logo
    height: 75, // Set desired height for the logo
    resizeMode: 'contain', // Keep the aspect ratio intact
    marginTop: 50, // Add padding from the top of the phone
    marginBottom: 20, // Add space between the logo and the welcome text
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#d3d3d3',
    borderRadius: 5,
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: '#007bff', // Highlighted color
  },
  toggleButtonText: {
    fontSize: 16,
    color: '#000',
  },
  activeButtonText: {
    color: '#fff', // White text for the active button
  },
  searchBar: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  searchButton: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 5,
    backgroundColor: '#28a745', // Green button
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Search;