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
import com.Tek.Track.Models.Internships;
import com.Tek.Track.Repositories.InternshipsRepository;
import com.Tek.Track.Services.InternshipsService;

public class InternshipServiceTests {
    @Mock
    private InternshipsRepository internshipRepository;

    @InjectMocks
    private InternshipsService internshipService;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testFindJobsByUserId() {
        Long userId = 1L;
        List<Internships> internships = Arrays.asList(new Internships());
        when(internshipRepository.findByUserUserId(userId)).thenReturn(internships);

        List<Internships> result = internshipService.findJobsByUserId(userId);

        assertEquals(internships, result);
        verify(internshipRepository, times(1)).findByUserUserId(userId);
    }

    @Test
    public void testFindAll() {
        List<Internships> internships = Arrays.asList(new Internships());
        when(internshipRepository.findAll()).thenReturn(internships);

        List<Internships> result = internshipService.findAll();

        assertEquals(internships, result);
        verify(internshipRepository, times(1)).findAll();
    }

    @Test
    public void testFindByIdFound() {
        Long id = 1L;
        Internships internship = new Internships();
        when(internshipRepository.findById(id)).thenReturn(Optional.of(internship));

        Internships result = internshipService.findById(id);

        assertEquals(internship, result);
        verify(internshipRepository, times(1)).findById(id);
    }

    @Test
    public void testFindByIdNotFound() {
        Long id = 1L;
        when(internshipRepository.findById(id)).thenReturn(Optional.empty());

        Internships result = internshipService.findById(id);

        assertNull(result);
        verify(internshipRepository, times(1)).findById(id);
    }

    @Test
    public void testCreate() {
        Internships internship = new Internships();
        when(internshipRepository.save(internship)).thenReturn(internship);

        Internships result = internshipService.create(internship);

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
        Internships originalInternship = new Internships();
        Internships newInternshipData = new Internships(
                "Company B", "Software Engineer", LocalDate.now(), "3 months",
                "Technical Assessment", true, "Jane Doe", "jane.doe@example.com",
                "555-555-5555", "Developing applications", "Pending", true, false,
                "https://example.com/job-link"
        );

        when(internshipRepository.findById(id)).thenReturn(Optional.of(originalInternship));
        when(internshipRepository.save(originalInternship)).thenReturn(originalInternship);

        Internships result = internshipService.update(id, newInternshipData);

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
        Internships newInternshipData = new Internships();
        when(internshipRepository.findById(id)).thenReturn(Optional.empty());

        Internships result = internshipService.update(id, newInternshipData);

        assertNull(result);
        verify(internshipRepository, times(1)).findById(id);
        verify(internshipRepository, times(0)).save(any(Internships.class));
    }
}
