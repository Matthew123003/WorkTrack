package com.Tek.Track.Services;

import com.Tek.Track.Repositories.JobRepository;

import java.time.LocalDate;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Tek.Track.Models.JobInfo;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public List<JobInfo> findJobsByUserId(Long userId) {
        return jobRepository.findByUserUserId(userId);
    }

    public List<JobInfo> findAll() { // Method adjusted to return a list of all users
        Iterable<JobInfo> jobInfoIterable = jobRepository.findAll();
        List<JobInfo> jobInfoList = new ArrayList<>();
        jobInfoIterable.forEach(jobInfoList::add);
        return jobInfoList; 
    }

    public JobInfo findById(Long id) {
        Optional<JobInfo> optionalJobInfo = jobRepository.findById(id);

        if(optionalJobInfo.isEmpty()) {
            return null;
        }

        JobInfo jobInfo = optionalJobInfo.get();
        return jobInfo;
    }

    public JobInfo create(JobInfo jobInfo) {
        return jobRepository.save(jobInfo);
    }

    public Boolean deleteById(Long id) {
        jobRepository.deleteById(id);
        return true;
    }

    public JobInfo update(Long id, JobInfo newJobInfo) {
        Optional<JobInfo> optionalJobInfo = jobRepository.findById(id);

        if(optionalJobInfo.isEmpty()) {
            return null;
        }

        JobInfo originalJobInfo = optionalJobInfo.get();
        originalJobInfo.setCompany(newJobInfo.getCompany());
        originalJobInfo.setJobTitle(newJobInfo.getJobTitle());
        originalJobInfo.setJobUrlLink(newJobInfo.getJobUrlLink());
        originalJobInfo.setJobDesc(newJobInfo.getJobDesc());
        originalJobInfo.setDateApplied(newJobInfo.getDateApplied());
        originalJobInfo.setContactName(newJobInfo.getContactName());
        originalJobInfo.setContactEmail(newJobInfo.getContactEmail());
        originalJobInfo.setContactNumber(newJobInfo.getContactNumber());
        originalJobInfo.setReferral(newJobInfo.getReferral());
        originalJobInfo.setRemote(newJobInfo.getRemote());
        originalJobInfo.setGotResponse(newJobInfo.getGotResponse());

        return jobRepository.save(originalJobInfo);
    }

    public JobInfo updateJob(long id, Map<String, Object> updates) {
        JobInfo existingJob = jobRepository.findById(id).orElseThrow(() ->
                new NoSuchElementException("Job with ID " + id + " not found."));

        updates.forEach((field, value) -> {
            switch (field) {
                case "company":
                    existingJob.setCompany((String) value);
                    break;
                case "jobTitle":
                    existingJob.setJobTitle((String) value);
                    break;
                case "jobUrlLink":
                    existingJob.setJobUrlLink((String) value);
                    break;
                case "jobDesc":
                    existingJob.setJobDesc((String) value);
                    break;
                case "dateApplied":
                    existingJob.setDateApplied(LocalDate.parse(value.toString()));
                    break;
                case "contactName":
                    existingJob.setContactName((String) value);
                    break;
                case "contactEmail":
                    existingJob.setContactEmail((String) value);
                    break;
                case "contactNumber":
                    existingJob.setContactNumber((String) value);
                    break;
                case "referral":
                    existingJob.setReferral((String) value);
                    break;
                case "remote":
                    existingJob.setRemote((Boolean) value);
                    break;
                case "gotResponse":
                    existingJob.setGotResponse((Boolean) value);
                    break;
                default:
                    throw new IllegalArgumentException("Field " + field + " is not updatable.");
            }
        });

        return jobRepository.save(existingJob);
    }

}
