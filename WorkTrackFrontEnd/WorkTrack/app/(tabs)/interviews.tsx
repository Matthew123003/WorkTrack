import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image, ScrollView } from 'react-native';

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

  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [sortOption, setSortOption] = useState('Date');

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

      {/* Sort Button Section */}
      <TouchableOpacity
        style={styles.sortButton}
        onPress={() => setSortModalVisible(true)}
      >
        <Text style={styles.sortButtonText}>Sort by: {sortOption}</Text>
      </TouchableOpacity>

      {/* Scrollable Area for Interviews */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {interviews.map(renderInterview)}
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
    width: 30,
    height: 30,
    marginRight: 4,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
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
});

export default InterviewsScreen;
