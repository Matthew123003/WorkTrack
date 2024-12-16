import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, StyleSheet, ScrollView, Image } from 'react-native';

interface Job {
  id: string;
  title: string;
  company: string;
  status: string;
  dateApplied: string;
  remote: boolean;
}

const JobsScreen = () => {
  const [jobs, setJobs] = useState<Job[]>([
    { id: '1', title: 'Software Engineer', company: 'TechCorp', status: 'applied', dateApplied: '2024-01-01', remote: true },
    { id: '2', title: 'Product Manager', company: 'BizInc', status: 'saved', dateApplied: '2024-02-01', remote: false },
    { id: '3', title: 'Data Scientist', company: 'DataWorks', status: 'applied', dateApplied: '2024-03-01', remote: true },
    { id: '4', title: 'UX Designer', company: 'DesignLab', status: 'saved', dateApplied: '2024-04-01', remote: false },
    // Add more jobs as needed
  ]);

  // const [jobs, setJobs] = useState<Job[]>([]); // Initially empty array until we fetch jobs
  const [isApplied, setIsApplied] = useState(true); // Toggle for applied/saved jobs
  const [searchText, setSearchText] = useState('');
  const [sortedJobs, setSortedJobs] = useState(jobs);
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [sortOption, setSortOption] = useState('Job Title');

  useEffect(() => {
    // TODO: Add your API call here to fetch the job data
    const fetchJobs = async () => {
      // NOTE: Make your API call here to get job data and set the state
      // Example: const response = await fetch('your-api-endpoint');
      // const data = await response.json();
      // setJobs(data);
    };

    fetchJobs(); // Call the function to fetch jobs when the component mounts
  }, []);

  // Function to ...................
  const filteredJobs = sortedJobs.filter((job) =>
    job.status === (isApplied ? 'applied' : 'saved') &&
    job.title.toLowerCase().includes(searchText.toLowerCase())
  );

  // Sorting functionality
  const handleSort = (option: string) => {
    let sorted = [...filteredJobs];
    switch (option) {
      case 'Job ID':
        sorted = sorted.sort((a, b) => a.id.localeCompare(b.id));
        break;
      case 'Company':
        sorted = sorted.sort((a, b) => a.company.localeCompare(b.company));
        break;
      case 'Job Title':
        sorted = sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'Date Applied':
        sorted = sorted.sort((a, b) => new Date(a.dateApplied).getTime() - new Date(b.dateApplied).getTime());
        break;
      case 'Remote':
        sorted = sorted.sort((a, b) => (a.remote === b.remote ? 0 : a.remote ? -1 : 1));
        break;
      default:
        break;
    }
    setSortedJobs(sorted);
    setSortOption(option);
    setSortModalVisible(false);
  };

  const renderJob = (item: Job) => (
    <View style={styles.jobCard} key={item.id}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.jobStatus}>Status: {item.status}</Text>
      <Text style={styles.jobCompany}>Company: {item.company}</Text>
      <Text style={styles.jobDateApplied}>Date Applied: {item.dateApplied}</Text>
      <Text style={styles.jobRemote}>Remote: {item.remote ? 'Yes' : 'No'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image
            source={require('../../assets/images/react-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.headerText}>Jobs</Text>
        </View>
      </View>

      {/* Toggle Buttons for Applied / Saved Jobs */}
      <View style={styles.toggleButtonContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, isApplied && styles.activeButton]}
          onPress={() => setIsApplied(true)}
        >
          <Text style={styles.toggleButtonText}>Applied Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, !isApplied && styles.activeButton]}
          onPress={() => setIsApplied(false)}
        >
          <Text style={styles.toggleButtonText}>Saved Jobs</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput
        placeholder="Search jobs"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        style={styles.searchBar}
      />

      {/* Sort Button Section */}
      <TouchableOpacity
        style={styles.sortButton}
        onPress={() => setSortModalVisible(true)}
      >
        <Text style={styles.sortButtonText}>Sort by: {sortOption}</Text>
      </TouchableOpacity>

      {/* Scrollable Area for Jobs */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {filteredJobs.map(renderJob)}
      </ScrollView>

      {/* Sort Modal */}
      <Modal visible={sortModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Sort Jobs By</Text>

            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleSort('Job ID')}
            >
              <Text style={styles.modalOptionText}>Job ID</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleSort('Company')}
            >
              <Text style={styles.modalOptionText}>Company</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleSort('Job Title')}
            >
              <Text style={styles.modalOptionText}>Job Title</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleSort('Date Applied')}
            >
              <Text style={styles.modalOptionText}>Date Applied</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalOption}
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
  toggleButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  toggleButton: {
    padding: 12,
    backgroundColor: '#ddd',
    borderRadius: 8,
  },
  activeButton: {
    backgroundColor: '#6200ee',
  },
  toggleButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  searchBar: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
  },
  sortButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sortButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  scrollContainer: {
    paddingBottom: 16,
  },
  jobCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  jobStatus: {
    fontSize: 14,
    color: '#888',
  },
  jobCompany: {
    fontSize: 14,
    color: '#888',
  },
  jobDateApplied: {
    fontSize: 14,
    color: '#888',
  },
  jobRemote: {
    fontSize: 14,
    color: '#888',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalOption: {
    padding: 12,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalOptionText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 16,
    backgroundColor: '#6200ee',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  closeButtonText: {
    fontSize: 14,
    color: '#fff',
  },
});

export default JobsScreen;
