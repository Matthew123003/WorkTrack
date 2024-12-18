import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Switch,
  Image,
  Button,
  Alert,
} from 'react-native';

const AddJobOrIntScreen = () => {
  const [isAddingJob, setIsAddingJob] = useState(true);

  const [jobDetails, setJobDetails] = useState({
    company: '',
    jobTitle: '',
    jobUrlLink: '',
    jobDesc: '',
    dateApplied: '',
    contactName: '',
    contactEmail: '',
    contactNumber: '',
    referral: '',
    remote: false,
    gotResponse: false,
  });

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

  const handleJobInputChange = (field: string, value: string | boolean) => {
    setJobDetails((prevDetails) => ({ ...prevDetails, [field]: value }));
  };

  const handleInterviewInputChange = (field: string, value: string | boolean) => {
    setInterviewDetails((prevDetails) => ({ ...prevDetails, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      if (isAddingJob) {
        const jobData = { ...jobDetails };
        console.log("Making job API call with:", jobData);
      } else {
        const interviewData = { ...interviewDetails };
        console.log("Making interview API call with:", interviewData);
      }
      Alert.alert("Success", "Your data has been submitted successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      Alert.alert("Error", "There was an issue submitting your data. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image
            source={require('../../assets/images/react-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.headerText}>Add</Text>
        </View>
      </View>

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

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {isAddingJob ? (
          <View style={styles.section}>
            <Text style={styles.sectionText}>Enter New Job Information</Text>
            <Text style={styles.inputText}>Company Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Company Name"
              value={jobDetails.company}
              onChangeText={(text) => handleJobInputChange('company', text)}
            />
            <Text style={styles.inputText}>Job Title</Text>
            <TextInput
              style={styles.input}
              placeholder="Job Title"
              value={jobDetails.jobTitle}
              onChangeText={(text) => handleJobInputChange('jobTitle', text)}
            />
            <Text style={styles.inputText}>Job URL Link</Text>
            <TextInput
              style={styles.input}
              placeholder="Job URL Link"
              value={jobDetails.jobUrlLink}
              onChangeText={(text) => handleJobInputChange('jobUrlLink', text)}
            />
            <Text style={styles.inputText}>Job Description</Text>
            <TextInput
              style={styles.input}
              placeholder="Job Description"
              value={jobDetails.jobDesc}
              onChangeText={(text) => handleJobInputChange('jobDesc', text)}
              multiline
            />
            <Text style={styles.inputText}>Date Applied</Text>
            <TextInput
              style={styles.input}
              placeholder="Date Applied (YYYY-MM-DD)"
              value={jobDetails.dateApplied}
              onChangeText={(text) => handleJobInputChange('dateApplied', text)}
            />
            <Text style={styles.inputText}>Contact Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Contact Name"
              value={jobDetails.contactName}
              onChangeText={(text) => handleJobInputChange('contactName', text)}
            />
            <Text style={styles.inputText}>Contact Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Contact Email"
              value={jobDetails.contactEmail}
              onChangeText={(text) => handleJobInputChange('contactEmail', text)}
              keyboardType="email-address"
            />
            <Text style={styles.inputText}>Contact Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Contact Number"
              value={jobDetails.contactNumber}
              onChangeText={(text) => handleJobInputChange('contactNumber', text)}
              keyboardType="phone-pad"
            />
            <Text style={styles.inputText}>Referral Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Referral Name"
              value={jobDetails.referral}
              onChangeText={(text) => handleJobInputChange('referral', text)}
            />
            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>Remote:</Text>
              <Switch
                value={jobDetails.remote}
                onValueChange={(value) => handleJobInputChange('remote', value)}
              />
            </View>
            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>Got Response:</Text>
              <Switch
                value={jobDetails.gotResponse}
                onValueChange={(value) => handleJobInputChange('gotResponse', value)}
              />
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.section}>
            <Text style={styles.sectionText}>Enter New Interview Information</Text>
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
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
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
    fontSize: 21,
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
    fontSize: 15,
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

export default AddJobOrIntScreen;
