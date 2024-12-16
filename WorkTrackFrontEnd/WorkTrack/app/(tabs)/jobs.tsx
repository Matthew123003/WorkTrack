import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';

export default function Jobs() {
  const [activeTab, setActiveTab] = useState('appliedJobs'); // Active toggle
  const [sortOption, setSortOption] = useState('date'); // Selected sort option
  const [isModalVisible, setModalVisible] = useState(false); // Modal visibility

  // Toggle active tab
  const handleToggle = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
    // TODO: Add API calls to fetch job data for the selected tab
  };

  // Sort options
  const sortOptions = [
    { label: 'Date Applied', value: 'date' },
    { label: 'Company Name', value: 'company' },
    { label: 'Job Title', value: 'title' },
    { label: 'Remote', value: 'remote' },
  ];

  // Handle sort selection
  const handleSortSelection = (value: string) => {
    setSortOption(value);
    setModalVisible(false);
    // TODO: Add sorting logic
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image 
        source={require('../../assets/images/react-logo.png')} 
        style={styles.logo} 
      />

      {/* Welcome Text */}
      <Text style={styles.text}>Welcome to the Jobs Screen!</Text>

      {/* Toggle Buttons */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, activeTab === 'appliedJobs' && styles.activeToggleButton]}
          onPress={() => handleToggle('appliedJobs')}
        >
          <Text style={[styles.toggleText, activeTab === 'appliedJobs' && styles.activeToggleText]}>
            Applied Jobs
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, activeTab === 'savedJobs' && styles.activeToggleButton]}
          onPress={() => handleToggle('savedJobs')}
        >
          <Text style={[styles.toggleText, activeTab === 'savedJobs' && styles.activeToggleText]}>
            Saved Jobs
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sort Button */}
      <TouchableOpacity style={styles.sortButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.sortButtonText}>
          Sort by: {sortOptions.find(option => option.value === sortOption)?.label}
        </Text>
      </TouchableOpacity>

      {/* Modal for Sorting Options */}
      <Modal
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Sort Options</Text>
            {sortOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.modalOption,
                  sortOption === option.value && styles.selectedOption,
                ]}
                onPress={() => handleSortSelection(option.value)}
              >
                <Text
                  style={[
                    styles.modalOptionText,
                    sortOption === option.value && styles.selectedOptionText,
                  ]}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    alignSelf: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
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
    marginHorizontal: 5,
    borderRadius: 5,
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
  },
  sortButton: {
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginBottom: 20,
  },
  sortButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalOption: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  selectedOption: {
    backgroundColor: '#007bff',
  },
  modalOptionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOptionText: {
    color: '#fff',
  },
  modalCloseButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  modalCloseButtonText: {
    color: '#333',
    fontSize: 16,
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
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
