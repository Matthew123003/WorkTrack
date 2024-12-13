import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal, FlatList } from 'react-native';

export default function Jobs() {
  const [activeTab, setActiveTab] = useState('appliedJobs'); // State to track the active toggle
  const [sortOption, setSortOption] = useState('date'); // State to track selected sort option
  const [isDropdownVisible, setDropdownVisible] = useState(false); // Dropdown visibility

  // Toggle active tab and fetch job data
  const handleToggle = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
    // TODO: Add API calls to fetch job data for the selected tab (appliedJobs/savedJobs)
  };

  // Options for sorting
  const sortOptions = [
    { label: 'Date Applied', value: 'date' },
    { label: 'Company Name', value: 'company' },
    { label: 'Job Title', value: 'title' },
    { label: 'Remote', value: 'remote' },
  ];

  // Handle sort selection
  const handleSortSelection = (value: React.SetStateAction<string>) => {
    setSortOption(value);
    setDropdownVisible(false);
    // TODO: Add sorting logic here based on the selected option
  };

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
          onPress={() => handleToggle('appliedJobs')}
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
          onPress={() => handleToggle('savedJobs')}
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

      {/* Sort dropdown */}
      <View style={styles.sortContainer}>
        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => setDropdownVisible(true)}
        >
          <Text style={styles.sortButtonText}>Sort by: {sortOptions.find(option => option.value === sortOption)?.label}</Text>
        </TouchableOpacity>
      </View>

      {/* Dropdown Modal */}
      <Modal
        visible={isDropdownVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setDropdownVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setDropdownVisible(false)}
        >
          <View style={styles.dropdownList}>
            <FlatList
              data={sortOptions}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => handleSortSelection(item.value)}
                >
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>

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
  sortContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  sortButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  sortButtonText: {
    color: '#FF0000',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdownList: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
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
