package com.Tek.Track.Controllers;

import com.Tek.Track.Models.User;
import com.Tek.Track.Services.JobService;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

import com.Tek.Track.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import com.Tek.Track.Models.JobInfo;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/jobs")
public class JobController {
    @Autowired
    private JobService jobService;

    @Autowired
    private UserService userService;

    public JobController(JobService jobService, UserService userService) {
        this.jobService = jobService;
        this.userService = userService;
    }

    @GetMapping("/authjobs")
    public ResponseEntity<List<JobInfo>> getJobsForAuthenticatedUser() throws Exception {
        // Get the currently authenticated user
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = userDetails.getUsername();

        // Fetch the user by username to get the userId
        User user = userService.findByUserName(username);
        Long userId = user.getUserId();

        // Fetch and return jobs for the authenticated user
        return new ResponseEntity<>(jobService.findJobsByUserId(userId), HttpStatus.OK);
    }

    @GetMapping("/jobs")
    public ResponseEntity<List<JobInfo>> getAllJobs() {
        return new ResponseEntity<>(jobService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/job")
    public ResponseEntity<JobInfo> getJob(@PathVariable Long id) {
        return new ResponseEntity<>(jobService.findById(id), HttpStatus.OK);
    }

    @PostMapping("/newjob")
    public ResponseEntity<JobInfo> create(@RequestBody JobInfo jobInfo) {
        return new ResponseEntity<>(jobService.create(jobInfo), HttpStatus.CREATED);
    }

    @PutMapping("/updatejob")
    public ResponseEntity<JobInfo> update(@PathVariable Long id, @RequestBody JobInfo jobInfo) {
        return new ResponseEntity<>(jobService.update(id, jobInfo), HttpStatus.OK);
    }

    @DeleteMapping("/deletejob")
    public ResponseEntity<Boolean> deleteById(@PathVariable Long id) {
        return new ResponseEntity<>(jobService.deleteById(id), HttpStatus.OK);
    }

    @PatchMapping("/patchjob/{id}")
    public ResponseEntity<JobInfo> updateJob(@PathVariable("id") long id, @RequestBody Map<String, Object> updates) {
        try {
            JobInfo updatedJob = jobService.updateJob(id, updates);
            return ResponseEntity.ok(updatedJob);
        } catch (NoSuchElementException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
}
