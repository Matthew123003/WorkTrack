import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image
            source={require('../../assets/images/react-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.headerText}>Home</Text>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Jobs Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Jobs</Text>
          <TouchableOpacity style={styles.contentCard}>
            <Text style={styles.contentText}>Job Example 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentCard}>
            <Text style={styles.contentText}>Job Example 2</Text>
          </TouchableOpacity>
        </View>

        {/* Interviews Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interviews</Text>
          <TouchableOpacity style={styles.contentCard}>
            <Text style={styles.contentText}>Interview Example 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentCard}>
            <Text style={styles.contentText}>Interview Example 2</Text>
          </TouchableOpacity>
        </View>

        {/* Suggested Content Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Suggested Content</Text>
          <TouchableOpacity style={styles.contentCard}>
            <Text style={styles.contentText}>Suggested Content 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contentCard}>
            <Text style={styles.contentText}>Suggested Content 2</Text>
          </TouchableOpacity>
        </View>
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
    width: 35,
    height: 35,
    marginRight: 4,
  },
  headerText: {
    fontSize: 28,
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
});

export default HomeScreen;
