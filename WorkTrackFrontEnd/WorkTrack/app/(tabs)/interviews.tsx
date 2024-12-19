import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image, ScrollView, TextInput, Switch, Alert } from 'react-native';

interface Interview {
  id: string;
  company: string;
  date: string;
  status: string;
  stage: string;
  tyNote: boolean;
  interviewType: string;
  interviewLink?: string;
  interviewContactName?: string;
  interviewContactEmail?: string;
}

const InterviewsScreen = () => {
  const [interviews, setInterviews] = useState<Interview[]>([ 
    // GET RID OF SAMPLE DATA WHEN MAKING API CALL
    {
      id: '1',
      company: 'Company A',
      date: '2024-12-20',
      status: 'Scheduled',
      stage: '1st',
      tyNote: true,
      interviewType: 'Zoom',
      interviewLink: 'https://zoom.us/example',
      interviewContactName: 'John Doe',
      interviewContactEmail: 'john.doe@companya.com',
    },
    {
      id: '2',
      company: 'Company B',
      date: '2024-12-15',
      status: 'Completed',
      stage: 'Final',
      tyNote: false,
      interviewType: 'In Person',
    },
    {
      id: '3',
      company: 'Company C',
      date: '2024-12-18',
      status: 'Pending',
      stage: '2nd',
      tyNote: true,
      interviewType: 'Phone',
      interviewContactName: 'Jane Smith',
      interviewContactEmail: 'jane.smith@companyc.com',
    },
    // Additional sample data can follow...
  ]);
  const [isApplied, setIsApplied] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [sortOption, setSortOption] = useState('Date');
  
  const [interviewDetails, setInterviewDetails] = useState({
      interviewDate: '',
      stage: '',
      tyNote: false,
      interviewType: '',
      interviewLink: '',
      interviewStatus: '',
      interviewContactName: '',
      interviewContactEmail: '',
    });

    const handleInterviewInputChange = (field: string, value: string | boolean) => {
      setInterviewDetails((prevDetails) => ({ ...prevDetails, [field]: value }));
    };

    const updateInterview = async () => {
        //TODO: MAKE INTERNAL API CALL TO UPDATE INTERVIEW INFO
        Alert.alert("Success", "Your interview data has been successfully updated!");
      };

  // Add the useEffect hook here to fetch data when the component mounts
  useEffect(() => {
    // API call to fetch interviews
    // Example: fetch('/api/interviews')
    //   .then(response => response.json())
    //   .then(data => setInterviews(data))
    //   .catch(error => console.error('Error fetching interviews:', error));
  }, []);

  // Sorting functionality
  const sortInterviews = (option: string) => {
    let sortedInterviews;
    switch (option) {
      case 'Date':
        sortedInterviews = [...interviews].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'Company':
        sortedInterviews = [...interviews].sort((a, b) => a.company.localeCompare(b.company));
        break;
      case 'Status':
        sortedInterviews = [...interviews].sort((a, b) => a.status.localeCompare(b.status));
        break;
      default:
        sortedInterviews = interviews;
    }
    setInterviews(sortedInterviews);
    setSortOption(option);
    setSortModalVisible(false);
  };

  const renderInterview = (item: Interview) => (
    <View style={styles.interviewCard} key={item.id}>
      <Text style={styles.companyText}>{item.id}</Text>
      <Text style={styles.companyText}>{item.company}</Text>
      <Text style={styles.dateText}>Date: {item.date}</Text>
      <Text style={styles.statusText}>Status: {item.status}</Text>
      <Text style={styles.stageText}>Stage: {item.stage}</Text>
      <Text style={styles.tyNoteText}>Thank You Note: {item.tyNote ? 'Sent' : 'Not Sent'}</Text>
      <Text style={styles.typeText}>Type: {item.interviewType}</Text>
      {item.interviewLink && <Text style={styles.linkText}>Link: {item.interviewLink}</Text>}
      {item.interviewContactName && <Text style={styles.contactNameText}>Contact: {item.interviewContactName}</Text>}
      {item.interviewContactEmail && <Text style={styles.contactEmailText}>Email: {item.interviewContactEmail}</Text>}
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
          <Text style={styles.headerText}>Interviews</Text>
        </View>
      </View>

      {/* Toggle Buttons */}
            <View style={styles.toggleButtonContainer}>
              <TouchableOpacity
                style={[styles.toggleButton, isApplied && styles.activeButton]}
                onPress={() => setIsApplied(true)}
              >
                <Text style={styles.toggleButtonText}>Current Interviews</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.toggleButton, !isApplied && styles.activeButton]}
                onPress={() => setIsApplied(false)}
              >
                <Text style={styles.toggleButtonText}>Update Interviews</Text>
              </TouchableOpacity>
            </View>
      
            {/* Search Bar */}
            <TextInput
              placeholder="Search Interviews"
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

      {/* Scrollable Area for Interviews */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {isApplied ? 
        interviews.map(renderInterview) : 
        (
          <View style={styles.section}>
                      <Text style={styles.sectionText}>
                      Enter Interview Id, then change any fields you want to change relating to the interview associated with the Interview Id. Once changes are made you will get a confirmation alert and can then switch back to the "Current Interviews" toggle and verify the information is changed.
                        </Text>
                      <Text style={styles.inputText}>Interview Date</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Interview Date (YYYY-MM-DD)"
                        value={interviewDetails.interviewDate}
                        onChangeText={(text) => handleInterviewInputChange('interviewDate', text)}
                      />
                      <Text style={styles.inputText}>Interview Stage</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Interview Stage (e.g., 1st, 2nd, Final)"
                        value={interviewDetails.stage}
                        onChangeText={(text) => handleInterviewInputChange('stage', text)}
                      />
                      <View style={styles.switchContainer}>
                        <Text style={styles.switchLabel}>Thank You Note Sent:</Text>
                        <Switch
                          value={interviewDetails.tyNote}
                          onValueChange={(value) => handleInterviewInputChange('tyNote', value)}
                        />
                      </View>
                      <Text style={styles.inputText}>Interview Type</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Interview Type (e.g., In Person, Virtual)"
                        value={interviewDetails.interviewType}
                        onChangeText={(text) => handleInterviewInputChange('interviewType', text)}
                      />
                      <Text style={styles.inputText}>Interview Link</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Interview Link"
                        value={interviewDetails.interviewLink}
                        onChangeText={(text) => handleInterviewInputChange('interviewLink', text)}
                      />
                      <Text style={styles.inputText}>Interview Status</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Interview Status"
                        value={interviewDetails.interviewStatus}
                        onChangeText={(text) => handleInterviewInputChange('interviewStatus', text)}
                      />
                      <Text style={styles.inputText}>Contact Name</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Contact Name"
                        value={interviewDetails.interviewContactName}
                        onChangeText={(text) => handleInterviewInputChange('interviewContactName', text)}
                      />
                      <Text style={styles.inputText}>Contact Email</Text>
                      <TextInput
                        style={styles.input}
                        placeholder="Contact Email"
                        value={interviewDetails.interviewContactEmail}
                        onChangeText={(text) => handleInterviewInputChange('interviewContactEmail', text)}
                        keyboardType="email-address"
                      />
                      <TouchableOpacity style={styles.submitButton} onPress={updateInterview}>
                        <Text style={styles.submitText}>Submit</Text>
                      </TouchableOpacity>
                    </View>
        )}
      </ScrollView>

      {/* Sort Modal */}
      <Modal visible={sortModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Sort Interviews By</Text>

            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => sortInterviews('Date')}
            >
              <Text style={styles.modalOptionText}>Date</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => sortInterviews('Company')}
            >
              <Text style={styles.modalOptionText}>Company</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => sortInterviews('Status')}
            >
              <Text style={styles.modalOptionText}>Status</Text>
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
    width: 35,
    height: 35,
    marginRight: 4,
  },
  headerText: {
    fontSize: 25,
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
    fontSize: 15,
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
    fontSize: 15,
    color: '#fff',
    fontWeight: '600',
  },
  scrollContainer: {
    paddingBottom: 16, // Ensures the bottom part is visible when scrolling
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
  interviewCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  companyText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  statusText: {
    fontSize: 14,
    color: '#888',
  },
  stageText: {
    fontSize: 14,
    color: '#555',
  },
  tyNoteText: {
    fontSize: 14,
    color: '#888',
  },
  typeText: {
    fontSize: 14,
    color: '#555',
  },
  linkText: {
    fontSize: 14,
    color: '#888',
  },
  contactNameText: {
    fontSize: 14,
    color: '#555',
  },
  contactEmailText: {
    fontSize: 14,
    color: '#888',
  },
  section: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  sectionText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    color: '#333',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
    marginRight: 8,
  },
  submitButton: {
    backgroundColor: '#6200ee',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderRadius: 8,
    width: '100%',
    marginTop: 20,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputText: {
    padding: 5,
  },
});

export default InterviewsScreen;
