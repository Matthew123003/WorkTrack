package com.Tek.Track.Controllers;

import com.Tek.Track.Services.JobService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import com.Tek.Track.Models.JobInfo;

@RestController
@RequestMapping("/jobs")
public class JobController {
    @Autowired
    private JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping("/authjobs")
    public ResponseEntity<List<JobInfo>> getJobsForAuthenticatedUser() throws Exception {
        // Get the currently authenticated user
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = userDetails.getUsername();

        // Fetch and return jobs for the authenticated user
        return new ResponseEntity<>(jobService.findJobsByUserName(username), HttpStatus.OK);
    }

    @GetMapping("/jobs")
    public ResponseEntity<List<JobInfo>> getAllJobs() {
        return new ResponseEntity<>(jobService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/job")
    public ResponseEntity<JobInfo> getJob(@PathVariable Long id) {
        return new ResponseEntity<>(jobService.findById(id), HttpStatus.OK);
    }

    @PostMapping("/new_job")
    public ResponseEntity<JobInfo> create(@RequestBody JobInfo jobInfo) {
        return new ResponseEntity<>(jobService.create(jobInfo), HttpStatus.CREATED);
    }

    @PutMapping("/update_job")
    public ResponseEntity<JobInfo> update(@PathVariable Long id, @RequestBody JobInfo jobInfo) {
        return new ResponseEntity<>(jobService.update(id, jobInfo), HttpStatus.OK);
    }

    @DeleteMapping("/delete_job")
    public ResponseEntity<Boolean> deleteById(@PathVariable Long id) {
        return new ResponseEntity<>(jobService.deleteById(id), HttpStatus.OK);
    }

    

}
