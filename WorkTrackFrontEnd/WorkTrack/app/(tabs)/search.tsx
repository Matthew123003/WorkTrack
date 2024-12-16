import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView } from 'react-native';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image
            source={require('../../assets/images/react-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.headerText}>Search</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search here..."
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Scrollable Results Section */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Example of a search result card */}
        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>Result Title 1</Text>
          <Text style={styles.resultSubtitle}>Additional details about the result...</Text>
        </View>

        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>Result Title 2</Text>
          <Text style={styles.resultSubtitle}>Additional details about the result...</Text>
        </View>

        {/* Add more result cards as needed */}
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
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  searchBarContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
    color: '#333',
  },
  scrollContainer: {
    padding: 16,
  },
  resultCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  resultSubtitle: {
    fontSize: 14,
    color: '#555',
  },
});

export default SearchScreen;
