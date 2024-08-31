package com.Tek.Track.InternshipTests;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;
import java.time.LocalDate;
import java.util.*;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import com.Tek.Track.Models.Internship;
import com.Tek.Track.Repositories.InternshipRepository;
import com.Tek.Track.Services.InternshipService;

public class InternshipServiceTests {
    @Mock
    private InternshipRepository internshipRepository;

    @InjectMocks
    private InternshipService internshipService;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testFindJobsByUserId() {
        Long userId = 1L;
        List<Internship> internships = Arrays.asList(new Internship());
        when(internshipRepository.findByUserUserId(userId)).thenReturn(internships);

        List<Internship> result = internshipService.findJobsByUserId(userId);

        assertEquals(internships, result);
        verify(internshipRepository, times(1)).findByUserUserId(userId);
    }

    @Test
    public void testFindAll() {
        List<Internship> internships = Arrays.asList(new Internship());
        when(internshipRepository.findAll()).thenReturn(internships);

        List<Internship> result = internshipService.findAll();

        assertEquals(internships, result);
        verify(internshipRepository, times(1)).findAll();
    }

    @Test
    public void testFindByIdFound() {
        Long id = 1L;
        Internship internship = new Internship();
        when(internshipRepository.findById(id)).thenReturn(Optional.of(internship));

        Internship result = internshipService.findById(id);

        assertEquals(internship, result);
        verify(internshipRepository, times(1)).findById(id);
    }

    @Test
    public void testFindByIdNotFound() {
        Long id = 1L;
        when(internshipRepository.findById(id)).thenReturn(Optional.empty());

        Internship result = internshipService.findById(id);

        assertNull(result);
        verify(internshipRepository, times(1)).findById(id);
    }

    @Test
    public void testCreate() {
        Internship internship = new Internship();
        when(internshipRepository.save(internship)).thenReturn(internship);

        Internship result = internshipService.create(internship);

        assertEquals(internship, result);
        verify(internshipRepository, times(1)).save(internship);
    }

    @Test
    public void testDeleteByIdExists() {
        Long id = 1L;
        when(internshipRepository.existsById(id)).thenReturn(true);

        Boolean result = internshipService.deleteById(id);

        assertTrue(result);
        verify(internshipRepository, times(1)).existsById(id);
        verify(internshipRepository, times(1)).deleteById(id);
    }

    @Test
    public void testDeleteByIdNotExists() {
        Long id = 1L;
        when(internshipRepository.existsById(id)).thenReturn(false);

        Boolean result = internshipService.deleteById(id);

        assertFalse(result);
        verify(internshipRepository, times(1)).existsById(id);
        verify(internshipRepository, times(0)).deleteById(id);
    }

    @Test
    public void testUpdateFound() {
        Long id = 1L;
        Internship originalInternship = new Internship();
        Internship newInternshipData = new Internship(
                "Company B", "Software Engineer", LocalDate.now(), "3 months",
                "Technical Assessment", true, "Jane Doe", "jane.doe@example.com",
                "555-555-5555", "Developing applications", "Pending", true, false,
                "https://example.com/job-link"
        );

        when(internshipRepository.findById(id)).thenReturn(Optional.of(originalInternship));
        when(internshipRepository.save(originalInternship)).thenReturn(originalInternship);

        Internship result = internshipService.update(id, newInternshipData);

        assertEquals(originalInternship, result);
        verify(internshipRepository, times(1)).findById(id);
        verify(internshipRepository, times(1)).save(originalInternship);

        // Ensure the originalInternship was updated
        assertEquals("Company B", originalInternship.getCompany());
        assertEquals("Software Engineer", originalInternship.getJobTitle());
        assertEquals("Technical Assessment", originalInternship.getAssessment());
        // Add more asserts for each field...
    }

    @Test
    public void testUpdateNotFound() {
        Long id = 1L;
        Internship newInternshipData = new Internship();
        when(internshipRepository.findById(id)).thenReturn(Optional.empty());

        Internship result = internshipService.update(id, newInternshipData);

        assertNull(result);
        verify(internshipRepository, times(1)).findById(id);
        verify(internshipRepository, times(0)).save(any(Internship.class));
    }
}
