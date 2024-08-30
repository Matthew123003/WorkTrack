package com.Tek.Track.Services;

import com.Tek.Track.Repositories.JobRepository;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Tek.Track.Models.JobInfo;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private UserService userService; // To fetch user by username

    public JobService(JobRepository jobRepository, UserService userService) {
        this.jobRepository = jobRepository;
        this.userService = userService;
    }

    public List<JobInfo> findJobsByUserId(Long userId) {
        return jobRepository.findByUserUserId(userId);
    }

    public List<JobInfo> findJobsByUserName(String username) {
        // Implement the logic to find jobs by username
        return jobRepository.findByUserUsername(username);
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

    
}
