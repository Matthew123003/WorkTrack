import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const AddJobOrIntScreen = () => {
  const [isAddingJob, setIsAddingJob] = useState(true);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image
            source={require('../../assets/images/react-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.headerText}>Add</Text>
        </View>
      </View>

      {/* Toggle Button */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, isAddingJob && styles.activeButton]}
          onPress={() => setIsAddingJob(true)}
        >
          <Text style={[styles.toggleText, isAddingJob && styles.activeText]}>Add Job</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, !isAddingJob && styles.activeButton]}
          onPress={() => setIsAddingJob(false)}
        >
          <Text style={[styles.toggleText, !isAddingJob && styles.activeText]}>Add Interview</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {isAddingJob ? (
          <View style={styles.section}>
            <Text style={styles.sectionText}>Enter New Job Information</Text>
            {/* Add job form fields will go here */}
          </View>
        ) : (
          <View style={styles.section}>
            <Text style={styles.sectionText}>Enter New Interview Information</Text>
            {/* Add interview form fields will go here */}
          </View>
        )}
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
  toggleContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#ddd',
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bbb',
  },
  activeButton: {
    backgroundColor: '#6200ee',
  },
  toggleText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  activeText: {
    color: '#fff',
  },
  scrollContainer: {
    paddingBottom: 16,
    paddingTop: 20,
  },
  section: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  sectionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
});

export default AddJobOrIntScreen;
