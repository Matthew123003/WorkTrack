import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';

export default function Interviews() {
  const [sortOption, setSortOption] = useState('date'); // State for selected sort option
  const [dropdownVisible, setDropdownVisible] = useState(false); // State for dropdown visibility
  const [interviews, setInterviews] = useState([]); // State for interview data

  // Function to handle sort selection
  const handleSortSelection = (value: React.SetStateAction<string>) => {
    setSortOption(value);
    setDropdownVisible(false);

    // TODO: Add API call here to fetch and sort interview data based on 'value'.
  };

  // Helper function to capitalize the first letter
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  type Interview = {
    interviewId: number;
    interviewDate: string; // Use `Date` if you plan to parse it into a `Date` object
    stage: string;
    tyNote: boolean;
    interviewType: string;
    interviewLink: string;
    interviewStatus: string;
    interviewContactName: string;
    interviewContactEmail: string;
  };

  // Render an interview card
  const renderInterviewCard = ({ item }: { item: Interview }) => (
    <View style={styles.card}>
      <Text style={styles.title}>Interview ID: {item.interviewId}</Text>
      <Text style={styles.details}>Date: {item.interviewDate}</Text>
      <Text style={styles.details}>Stage: {item.stage}</Text>
      <Text style={styles.details}>
        Thank You Note Sent: {item.tyNote ? 'Yes' : 'No'}
      </Text>
      <Text style={styles.details}>Type: {item.interviewType}</Text>
      <Text style={styles.details}>Link: {item.interviewLink}</Text>
      <Text style={styles.details}>Status: {item.interviewStatus}</Text>
      <Text style={styles.details}>Contact Name: {item.interviewContactName}</Text>
      <Text style={styles.details}>Contact Email: {item.interviewContactEmail}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Logo at the top */}
      <Image 
        source={require('../../assets/images/react-logo.png')} 
        style={styles.logo} 
      />

      {/* Welcome text */}
      <Text style={styles.text}>Welcome to the Interviews Screen!</Text>

      {/* Sort dropdown */}
      <View style={styles.sortContainer}>
        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => setDropdownVisible(true)}
        >
          <Text style={styles.sortButtonText}>
            Sort by: {capitalizeFirstLetter(sortOption)}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Dropdown modal */}
      <Modal
        visible={dropdownVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select a sort option:</Text>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleSortSelection('date')}
            >
              <Text style={styles.modalOptionText}>Date</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleSortSelection('company')}
            >
              <Text style={styles.modalOptionText}>Company Name</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => handleSortSelection('title')}
            >
              <Text style={styles.modalOptionText}>Job Title</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setDropdownVisible(false)}
            >
              <Text style={styles.modalCloseText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Display interview data */}
      <FlatList
        data={interviews}
        renderItem={renderInterviewCard}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text style={styles.emptyText}>No interviews to display.</Text>}
      />
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
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalOption: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalOptionText: {
    fontSize: 16,
    color: '#007bff',
  },
  modalClose: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ff4d4d',
    borderRadius: 5,
  },
  modalCloseText: {
    color: '#fff',
    fontSize: 16,
  },
  listContainer: {
    paddingTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#777',
    marginTop: 20,
  },
});
