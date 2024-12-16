import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';

interface AppliedJob {
  jobInfoId: number;
  company: string;
  jobTitle: string;
  jobUrlLink?: string;
  jobDesc?: string;
  dateApplied: string;
  contactName?: string;
  contactEmail?: string;
  contactNumber?: string;
  referral?: string;
  remote?: boolean;
  gotResponse?: boolean;
}

const SearchScreen: React.FC = () => {
  const [toggleState, setToggleState] = useState<'New Jobs' | 'Applied Jobs'>('New Jobs'); // Toggle state
  const [appliedJobs, setAppliedJobs] = useState<AppliedJob[]>([]); // State for applied jobs
  const [newJobs, setNewJobs] = useState<any[]>([]); // Placeholder state for new jobs
  const [sortOption, setSortOption] = useState('Date Applied');
  const [sortModalVisible, setSortModalVisible] = useState(false); // State for the sort modal visibility
  const [sortedAppliedJobs, setSortedAppliedJobs] = useState<AppliedJob[]>([]); // State for sorted applied jobs

  // Fetch applied jobs from your internal API
  const fetchAppliedJobs = async () => {
    // Make internal API call here
    setAppliedJobs([
      { jobInfoId: 1, company: 'Company A', jobTitle: 'Job A', dateApplied: '2024-12-01' },
      { jobInfoId: 2, company: 'Company B', jobTitle: 'Job B', dateApplied: '2024-12-05' },
      // Add more job entries here
    ]);
  };

  // Fetch new jobs from an external API
  const fetchNewJobs = async () => {
    // Make external API call here
  };

  // Handle toggle and fetch respective jobs
  const handleToggle = (state: 'New Jobs' | 'Applied Jobs') => {
    setToggleState(state);

    if (state === 'New Jobs') {
      fetchNewJobs();
    } else {
      fetchAppliedJobs();
    }
  };

  // Handle sorting logic
  const handleSort = (criteria: string) => {
    const sortedJobs = [...appliedJobs];
    switch (criteria) {
      case 'Date Applied':
        sortedJobs.sort((a, b) => (a.dateApplied > b.dateApplied ? 1 : -1));
        break;
      case 'Company':
        sortedJobs.sort((a, b) => (a.company > b.company ? 1 : -1));
        break;
      case 'Job Title':
        sortedJobs.sort((a, b) => (a.jobTitle > b.jobTitle ? 1 : -1));
        break;
      case 'Job ID':
        sortedJobs.sort((a, b) => a.jobInfoId - b.jobInfoId);
        break;
      case 'Remote':
        sortedJobs.sort((a, b) => (a.remote ? 1 : 0) - (b.remote ? 1 : 0));
        break;
    }
    setSortedAppliedJobs(sortedJobs);
    setSortModalVisible(false);
    setSortOption(criteria);
  };

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

      {/* Toggle Button */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            toggleState === 'New Jobs' && styles.activeToggleButton,
          ]}
          onPress={() => handleToggle('New Jobs')}
        >
          <Text
            style={[
              styles.toggleButtonText,
              toggleState === 'New Jobs' && styles.activeToggleButtonText,
            ]}
          >
            New Jobs
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.toggleButton,
            toggleState === 'Applied Jobs' && styles.activeToggleButton,
          ]}
          onPress={() => handleToggle('Applied Jobs')}
        >
          <Text
            style={[
              styles.toggleButtonText,
              toggleState === 'Applied Jobs' && styles.activeToggleButtonText,
            ]}
          >
            Applied Jobs
          </Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search here..."
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Sort Button for Applied Jobs */}
      {toggleState === 'Applied Jobs' && (
        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => setSortModalVisible(true)}
        >
          <Text style={styles.sortButtonText}>Sort By: {sortOption}</Text>
        </TouchableOpacity>
      )}

      {/* Scrollable Results Section */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {toggleState === 'Applied Jobs' &&
          (sortedAppliedJobs.length > 0 ? sortedAppliedJobs : appliedJobs).map(
            (job) => (
              <View key={job.jobInfoId} style={styles.resultCard}>
                <Text style={styles.resultTitle}>{job.jobTitle}</Text>
                <Text style={styles.resultSubtitle}>{job.company}</Text>
                <Text style={styles.resultDetails}>Applied On: {job.dateApplied}</Text>
                {job.jobUrlLink && (
                  <Text style={styles.resultDetails}>Job Link: {job.jobUrlLink}</Text>
                )}
                {job.jobDesc && (
                  <Text style={styles.resultDetails}>Description: {job.jobDesc}</Text>
                )}
                {job.contactName && (
                  <Text style={styles.resultDetails}>Contact: {job.contactName}</Text>
                )}
                {job.contactEmail && (
                  <Text style={styles.resultDetails}>Email: {job.contactEmail}</Text>
                )}
                {job.contactNumber && (
                  <Text style={styles.resultDetails}>Phone: {job.contactNumber}</Text>
                )}
                {job.referral && (
                  <Text style={styles.resultDetails}>Referral: {job.referral}</Text>
                )}
                <Text style={styles.resultDetails}>
                  Remote: {job.remote ? 'Yes' : 'No'}
                </Text>
                <Text style={styles.resultDetails}>
                  Got Response: {job.gotResponse ? 'Yes' : 'No'}
                </Text>
              </View>
            )
          )}

        {toggleState === 'New Jobs' &&
          newJobs.map((job, index) => (
            <View key={index} style={styles.resultCard}>
              <Text style={styles.resultTitle}>New Job {index + 1}</Text>
              {/* Additional rendering logic for new jobs when fields are defined */}
            </View>
          ))}
      </ScrollView>

      {/* Sort Modal */}
      <Modal visible={sortModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Sort Jobs By</Text>

            <TouchableOpacity
              style={[styles.modalOption, styles.modalOptionBorder]}
              onPress={() => handleSort('Date Applied')}
            >
              <Text style={styles.modalOptionText}>Date Applied</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalOption, styles.modalOptionBorder]}
              onPress={() => handleSort('Company')}
            >
              <Text style={styles.modalOptionText}>Company</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalOption, styles.modalOptionBorder]}
              onPress={() => handleSort('Job Title')}
            >
              <Text style={styles.modalOptionText}>Job Title</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalOption, styles.modalOptionBorder]}
              onPress={() => handleSort('Job ID')}
            >
              <Text style={styles.modalOptionText}>Job ID</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalOption, styles.modalOptionBorder]}
              onPress={() => handleSort('Remote')}
            >
              <Text style={styles.modalOptionText}>Remote</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSortModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  },
  activeToggleButton: {
    backgroundColor: '#6200ee',
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  activeToggleButtonText: {
    fontWeight: '600',
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
  resultDetails: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  sortButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sortButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalOption: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    textAlign: 'center',
  },
  modalOptionBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalOptionText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 12,
    backgroundColor: '#6200ee',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SearchScreen;
