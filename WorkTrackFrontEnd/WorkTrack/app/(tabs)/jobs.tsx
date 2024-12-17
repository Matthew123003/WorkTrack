import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, StyleSheet, ScrollView, Image } from 'react-native';

interface Job {
  jobInfoId: number;
  company: string;
  jobTitle: string;
  jobUrlLink: string;
  jobDesc: string;
  dateApplied: string;
  contactName: string;
  contactEmail: string;
  contactNumber: string;
  referral: string;
  remote: boolean;
  gotResponse: boolean;
}

const JobsScreen = () => {
  const [jobs, setJobs] = useState<Job[]>([]); // STATE FOR APPLIED JOBS
  const [savedJobs, setSavedJobs] = useState<any[]>([]); // STATE FOR SAVED
  const [isApplied, setIsApplied] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [sortedJobs, setSortedJobs] = useState(jobs);
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [sortOption, setSortOption] = useState('Job Title');

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      // TODO: Fetch job data from the backend API for applied jobs here.
      // Use a GET request to your backend endpoint that retrieves applied jobs.
      // Example: const response = await fetch('https://your-backend.com/api/applied-jobs');
      // Then update the jobs state: setJobs(await response.json());
      setJobs([
        {
          jobInfoId: 1,
          company: 'TechCorp',
          jobTitle: 'Software Engineer',
          jobUrlLink: 'https://techcorp.com/jobs/1',
          jobDesc: 'Develop software solutions.',
          dateApplied: '2024-01-01',
          contactName: 'John Doe',
          contactEmail: 'john.doe@techcorp.com',
          contactNumber: '123-456-7890',
          referral: 'Jane Smith',
          remote: true,
          gotResponse: false
        },
        {
          jobInfoId: 2,
          company: 'BizInc',
          jobTitle: 'Product Manager',
          jobUrlLink: 'https://bizinc.com/jobs/2',
          jobDesc: 'Manage product lifecycle.',
          dateApplied: '2024-02-01',
          contactName: 'Alice Johnson',
          contactEmail: 'alice.johnson@bizinc.com',
          contactNumber: '098-765-4321',
          referral: 'Mark Lee',
          remote: false,
          gotResponse: true
        },
        {
          jobInfoId: 3,
          company: 'DataWorks',
          jobTitle: 'Data Scientist',
          jobUrlLink: 'https://dataworks.com/jobs/3',
          jobDesc: 'Analyze data and build models.',
          dateApplied: '2024-03-01',
          contactName: 'Bob Brown',
          contactEmail: 'bob.brown@dataworks.com',
          contactNumber: '321-654-9870',
          referral: 'Sarah White',
          remote: true,
          gotResponse: true
        },
        {
          jobInfoId: 4,
          company: 'DesignLab',
          jobTitle: 'UX Designer',
          jobUrlLink: 'https://designlab.com/jobs/4',
          jobDesc: 'Design user interfaces.',
          dateApplied: '2024-04-01',
          contactName: 'Chris Green',
          contactEmail: 'chris.green@designlab.com',
          contactNumber: '456-123-7890',
          referral: 'Laura Black',
          remote: false,
          gotResponse: false
        },
      ]);
    };
  
    fetchAppliedJobs();
  }, []);
  
  // Example function to fetch saved jobs from an external API
  const fetchSavedJobs = async () => {
    // TODO: Fetch saved job data from an external API here.
    // Use a GET request to the external API endpoint for saved jobs.
    // Example: const response = await fetch('https://external-api.com/saved-jobs');
    // Then update the jobs state: setJobs(await response.json());
  };
  
  {/* 
    The fetchJobs function within the useEffect hook is where you would 
    make the API call to your backend to retrieve the list of applied 
    jobs.
    You can call the fetchSavedJobs function when switching to the saved
    jobs view (e.g., within the onPress handler for the "Saved Jobs"
    button) to fetch saved jobs from an external API.
  */}

  useEffect(() => {
    setSortedJobs(
      jobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [jobs, searchText]);

  const filteredJobs = sortedJobs.filter((job) =>
    job.jobTitle.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSort = (option: string) => {
    let sorted = [...filteredJobs];
    switch (option) {
      case 'Job ID':
        sorted = sorted.sort((a, b) => a.jobInfoId - b.jobInfoId);
        break;
      case 'Company':
        sorted = sorted.sort((a, b) => a.company.localeCompare(b.company));
        break;
      case 'Job Title':
        sorted = sorted.sort((a, b) => a.jobTitle.localeCompare(b.jobTitle));
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
    <View style={styles.jobCard} key={item.jobInfoId}>
      <Text style={styles.jobTitle}>{item.jobTitle}</Text>
      <Text style={styles.jobCompany}>Company: {item.company}</Text>
      <Text style={styles.jobDateApplied}>Date Applied: {item.dateApplied}</Text>
      <Text style={styles.jobRemote}>Remote: {item.remote ? 'Yes' : 'No'}</Text>
      <Text style={styles.jobDesc}>Description: {item.jobDesc}</Text>
      <Text style={styles.jobContact}>Contact: {item.contactName} ({item.contactEmail})</Text>
      <Text style={styles.jobContact}>Phone: {item.contactNumber}</Text>
      <Text style={styles.jobReferral}>Referral: {item.referral}</Text>
      <Text style={styles.jobResponse}>Response: {item.gotResponse ? 'Yes' : 'No'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image
            source={require('../../assets/images/react-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.headerText}>Jobs</Text>
        </View>
      </View>

      {/* Toggle Buttons */}
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

      {/* Sort Button */}
      <TouchableOpacity
        style={styles.sortButton}
        onPress={() => setSortModalVisible(true)}
      >
        <Text style={styles.sortButtonText}>Sort By: {sortOption}</Text>
      </TouchableOpacity>

      {/* Scrollable Jobs List */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {filteredJobs.map(renderJob)}
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
  toggleButtonContainer: {
    flexDirection: 'row',
    width: '100%',  // Full width of the page
    marginBottom: 10,
  },
  toggleButton: {
    flex: 1,  // Ensures the buttons take up equal width
    paddingVertical: 15,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: '#6200ee',
  },
  toggleButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  searchBar: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
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
  jobDesc: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  jobContact: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  jobReferral: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  jobResponse: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // dark background overlay
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // Center the title text
  },
  modalOption: {
    padding: 10,
    justifyContent: 'center', // Center the text inside each option
  },
  modalOptionText: {
    fontSize: 16,
    textAlign: 'center', // Center the option text
  },
  modalOptionBorder: {
    borderBottomWidth: 1, // Add a line between options
    borderBottomColor: '#ccc', // Light gray color for the border
  },
  closeButton: {
    paddingVertical: 10,
    backgroundColor: '#6200ee',
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default JobsScreen;
