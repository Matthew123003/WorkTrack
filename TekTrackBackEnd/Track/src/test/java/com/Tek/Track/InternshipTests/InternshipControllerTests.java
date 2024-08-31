package com.Tek.Track.InternshipTests;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;
import java.util.*;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import com.Tek.Track.Controllers.InternshipController;
import com.Tek.Track.Models.Internship;
import com.Tek.Track.Models.User;
import com.Tek.Track.Services.InternshipService;
import com.Tek.Track.Services.UserService;

public class InternshipControllerTests {
    @Mock
    private InternshipService internshipService;

    @Mock
    private UserService userService;

    @Mock
    private SecurityContext securityContext;

    @Mock
    private Authentication authentication;

    @Mock
    private UserDetails userDetails;

    @InjectMocks
    private InternshipController internshipController;

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
        List<Internship> internships = Arrays.asList(new Internship());

        when(securityContext.getAuthentication()).thenReturn(authentication);
        when(authentication.getPrincipal()).thenReturn(userDetails);
        when(userDetails.getUsername()).thenReturn(username);
        when(userService.findByUserName(username)).thenReturn(user);
        when(internshipService.findJobsByUserId(userId)).thenReturn(internships);

        // Act
        ResponseEntity<List<Internship>> response = internshipController.getJobsForAuthenticatedUser();

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(internships, response.getBody());
        verify(userService, times(1)).findByUserName(username);
        verify(internshipService, times(1)).findJobsByUserId(userId);
    }

    @Test
    public void testGetAllInternship() {
        // Arrange
        List<Internship> internships = Arrays.asList(new Internship());
        when(internshipService.findAll()).thenReturn(internships);

        // Act
        ResponseEntity<List<Internship>> response = internshipController.getAllInternship();

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(internships, response.getBody());
        verify(internshipService, times(1)).findAll();
    }

    @Test
    public void testGetInternshipFound() {
        // Arrange
        Long id = 1L;
        Internship internship = new Internship();
        when(internshipService.findById(id)).thenReturn(internship);

        // Act
        ResponseEntity<Internship> response = internshipController.getInternship(id);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(internship, response.getBody());
        verify(internshipService, times(1)).findById(id);
    }

    @Test
    public void testGetInternshipNotFound() {
        // Arrange
        Long id = 1L;
        when(internshipService.findById(id)).thenReturn(null);

        // Act
        ResponseEntity<Internship> response = internshipController.getInternship(id);

        // Assert
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        verify(internshipService, times(1)).findById(id);
    }

    @Test
    public void testCreateInternship() {
        // Arrange
        Internship internship = new Internship();
        when(internshipService.create(internship)).thenReturn(internship);

        // Act
        ResponseEntity<Internship> response = internshipController.create(internship);

        // Assert
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(internship, response.getBody());
        verify(internshipService, times(1)).create(internship);
    }

    @Test
    public void testUpdateInternship() {
        // Arrange
        Long id = 1L;
        Internship internship = new Internship();
        when(internshipService.update(id, internship)).thenReturn(internship);

        // Act
        ResponseEntity<Internship> response = internshipController.update(id, internship);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(internship, response.getBody());
        verify(internshipService, times(1)).update(id, internship);
    }

    @Test
    public void testDeleteInternshipExists() {
        // Arrange
        Long id = 1L;
        when(internshipService.deleteById(id)).thenReturn(true);

        // Act
        ResponseEntity<Void> response = internshipController.delete(id);

        // Assert
        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        verify(internshipService, times(1)).deleteById(id);
    }

    @Test
    public void testDeleteInternshipNotExists() {
        // Arrange
        Long id = 1L;
        when(internshipService.deleteById(id)).thenReturn(false);

        // Act
        ResponseEntity<Void> response = internshipController.delete(id);

        // Assert
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        verify(internshipService, times(1)).deleteById(id);
    }
}
