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

  // State for Add Job form inputs
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

  // State for Add Interview form inputs
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
      // Check toggle state
      if (isAddingJob) {
        // Prepare job data
        const jobData = { ...jobDetails };
  
        // Validate job data (optional, add as needed)
  
        // Make job API call
        console.log("Making job API call with:", jobData);
        // Make job API call here
  
      } else {
        // Prepare interview data
        const interviewData = { ...interviewDetails };
  
        // Validate interview data (optional, add as needed)
  
        // Make interview API call
        console.log("Making interview API call with:", interviewData);
        // Make interview API call here
      }
  
      // Success feedback
      Alert.alert("Success", "Your data has been submitted successfully!");
  
    } catch (error) {
      // Error feedback
      console.error("Error submitting data:", error);
      Alert.alert("Error", "There was an issue submitting your data. Please try again.");
    }
  };
  

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
            {/* Form Fields */}
            <TextInput
              style={styles.input}
              placeholder="Company Name"
              value={jobDetails.company}
              onChangeText={(text) => handleJobInputChange('company', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Job Title"
              value={jobDetails.jobTitle}
              onChangeText={(text) => handleJobInputChange('jobTitle', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Job URL Link"
              value={jobDetails.jobUrlLink}
              onChangeText={(text) => handleJobInputChange('jobUrlLink', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Job Description"
              value={jobDetails.jobDesc}
              onChangeText={(text) => handleJobInputChange('jobDesc', text)}
              multiline
            />
            <TextInput
              style={styles.input}
              placeholder="Date Applied (YYYY-MM-DD)"
              value={jobDetails.dateApplied}
              onChangeText={(text) => handleJobInputChange('dateApplied', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Contact Name"
              value={jobDetails.contactName}
              onChangeText={(text) => handleJobInputChange('contactName', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Contact Email"
              value={jobDetails.contactEmail}
              onChangeText={(text) => handleJobInputChange('contactEmail', text)}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Contact Number"
              value={jobDetails.contactNumber}
              onChangeText={(text) => handleJobInputChange('contactNumber', text)}
              keyboardType="phone-pad"
            />
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
          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.section}>
            <Text style={styles.sectionText}>Enter New Interview Information</Text>
            {/* Interview Form Fields */}
            <TextInput
              style={styles.input}
              placeholder="Interview Date (YYYY-MM-DD)"
              value={interviewDetails.interviewDate}
              onChangeText={(text) => handleInterviewInputChange('interviewDate', text)}
            />
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
            <TextInput
              style={styles.input}
              placeholder="Interview Type (e.g., In Person, Virtual)"
              value={interviewDetails.interviewType}
              onChangeText={(text) => handleInterviewInputChange('interviewType', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Interview Link"
              value={interviewDetails.interviewLink}
              onChangeText={(text) => handleInterviewInputChange('interviewLink', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Interview Status"
              value={interviewDetails.interviewStatus}
              onChangeText={(text) => handleInterviewInputChange('interviewStatus', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Contact Name"
              value={interviewDetails.interviewContactName}
              onChangeText={(text) => handleInterviewInputChange('interviewContactName', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Contact Email"
              value={interviewDetails.interviewContactEmail}
              onChangeText={(text) => handleInterviewInputChange('interviewContactEmail', text)}
              keyboardType="email-address"
            />
            {/* Submit Button */}
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
});

export default AddJobOrIntScreen;
