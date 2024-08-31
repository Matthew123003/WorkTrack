package com.Tek.Track.JobTests;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;
import java.util.*;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import com.Tek.Track.Controllers.JobController;
import com.Tek.Track.Models.JobInfo;
import com.Tek.Track.Models.User;
import com.Tek.Track.Services.JobService;
import com.Tek.Track.Services.UserService;
import org.springframework.test.context.ActiveProfiles;

@WebMvcTest(controllers = JobController.class)
@ActiveProfiles("test")
public class JobControllerTests {

    @Mock
    private JobService jobService;

    @Mock
    private UserService userService;

    @Mock
    private SecurityContext securityContext;

    @Mock
    private Authentication authentication;

    @Mock
    private UserDetails userDetails;

    @InjectMocks
    private JobController jobController;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        SecurityContextHolder.setContext(securityContext);
    }

    @Test
    public void testGetJobsForAuthenticatedUser() throws Exception {
        // Arrange
        Long userId = 1L;
        String username = "testuser";
        User user = new User();
        user.setUserId(userId);
        List<JobInfo> jobs = Arrays.asList(new JobInfo());

        when(securityContext.getAuthentication()).thenReturn(authentication);
        when(authentication.getPrincipal()).thenReturn(userDetails);
        when(userDetails.getUsername()).thenReturn(username);
        when(userService.findByUserName(username)).thenReturn(user);
        when(jobService.findJobsByUserId(userId)).thenReturn(jobs);

        // Act
        ResponseEntity<List<JobInfo>> response = jobController.getJobsForAuthenticatedUser();

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(jobs, response.getBody());
        verify(userService, times(1)).findByUserName(username);
        verify(jobService, times(1)).findJobsByUserId(userId);
    }

    @Test
    public void testGetAllJobs() {
        // Arrange
        List<JobInfo> jobs = Arrays.asList(new JobInfo());
        when(jobService.findAll()).thenReturn(jobs);

        // Act
        ResponseEntity<List<JobInfo>> response = jobController.getAllJobs();

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(jobs, response.getBody());
        verify(jobService, times(1)).findAll();
    }

    @Test
    public void testGetJob() {
        // Arrange
        Long id = 1L;
        JobInfo jobInfo = new JobInfo();
        when(jobService.findById(id)).thenReturn(jobInfo);

        // Act
        ResponseEntity<JobInfo> response = jobController.getJob(id);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(jobInfo, response.getBody());
        verify(jobService, times(1)).findById(id);
    }

    @Test
    public void testCreateJob() {
        // Arrange
        JobInfo jobInfo = new JobInfo();
        when(jobService.create(jobInfo)).thenReturn(jobInfo);

        // Act
        ResponseEntity<JobInfo> response = jobController.create(jobInfo);

        // Assert
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(jobInfo, response.getBody());
        verify(jobService, times(1)).create(jobInfo);
    }

    @Test
    public void testUpdateJob() {
        // Arrange
        Long id = 1L;
        JobInfo jobInfo = new JobInfo();
        when(jobService.update(id, jobInfo)).thenReturn(jobInfo);

        // Act
        ResponseEntity<JobInfo> response = jobController.update(id, jobInfo);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(jobInfo, response.getBody());
        verify(jobService, times(1)).update(id, jobInfo);
    }

    @Test
    public void testDeleteJob() {
        // Arrange
        Long id = 1L;
        when(jobService.deleteById(id)).thenReturn(true);

        // Act
        ResponseEntity<Boolean> response = jobController.deleteById(id);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody());
        verify(jobService, times(1)).deleteById(id);
    }

    @Test
    public void testDeleteJob_NotFound() {
        // Arrange
        Long id = 1L;
        when(jobService.deleteById(id)).thenReturn(false);

        // Act
        ResponseEntity<Boolean> response = jobController.deleteById(id);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertFalse(response.getBody());
        verify(jobService, times(1)).deleteById(id);
    }

    // JOB CONTROLLER TEST COVERAGE 100%
}
