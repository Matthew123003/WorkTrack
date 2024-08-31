package com.Tek.Track.InternshipTests;

import static org.junit.Assert.*;
import java.time.LocalDate;
import com.Tek.Track.Models.Internship;
import com.Tek.Track.Models.User;
import org.junit.Before;
import org.junit.Test;

public class InternshipModelUnitTests {
    private Internship internship;

    @Before
    public void setUp() {
        internship = new Internship();
    }

    @Test
    public void testDefaultConstructor() {
        assertNotNull(internship);
    }

    @Test
    public void testParameterizedConstructor() {
        LocalDate dateApplied = LocalDate.now();
        Internship internship = new Internship(
                "Company A", "Software Engineer", dateApplied, "3 months",
                "Technical Assessment", true, "John Doe", "john.doe@example.com",
                "123-456-7890", "Job Description", "Pending", true, false,
                "https://example.com/job-link"
        );

        assertEquals("Company A", internship.getCompany());
        assertEquals("Software Engineer", internship.getJobTitle());
        assertEquals(dateApplied, internship.getDateApplied());
        assertEquals("3 months", internship.getDuration());
        assertEquals("Technical Assessment", internship.getAssessment());
        assertTrue(internship.getAssessmentCompleted());
        assertEquals("John Doe", internship.getContactPersonName());
        assertEquals("john.doe@example.com", internship.getContactPersonEmail());
        assertEquals("123-456-7890", internship.getContactPersonPhone());
        assertEquals("Job Description", internship.getJobDescription());
        assertEquals("Pending", internship.getStatus());
        assertTrue(internship.getRemote());
        assertFalse(internship.getResponse());
        assertEquals("https://example.com/job-link", internship.getJobLink());
    }

    @Test
    public void testSettersAndGetters() {
        internship.setCompany("Company B");
        assertEquals("Company B", internship.getCompany());

        internship.setJobTitle("Data Scientist");
        assertEquals("Data Scientist", internship.getJobTitle());

        LocalDate dateApplied = LocalDate.of(2023, 8, 30);
        internship.setDateApplied(dateApplied);
        assertEquals(dateApplied, internship.getDateApplied());

        internship.setDuration("6 months");
        assertEquals("6 months", internship.getDuration());

        internship.setAssessment("Code Test");
        assertEquals("Code Test", internship.getAssessment());

        internship.setAssessmentCompleted(false);
        assertFalse(internship.getAssessmentCompleted());

        internship.setContactPersonName("Jane Smith");
        assertEquals("Jane Smith", internship.getContactPersonName());

        internship.setContactPersonEmail("jane.smith@example.com");
        assertEquals("jane.smith@example.com", internship.getContactPersonEmail());

        internship.setContactPersonPhone("098-765-4321");
        assertEquals("098-765-4321", internship.getContactPersonPhone());

        internship.setJobDescription("Developing web applications");
        assertEquals("Developing web applications", internship.getJobDescription());

        internship.setStatus("Interview");
        assertEquals("Interview", internship.getStatus());

        internship.setRemote(true);
        assertTrue(internship.getRemote());

        internship.setResponse(true);
        assertTrue(internship.getResponse());

        internship.setJobLink("https://example.com/job-link-2");
        assertEquals("https://example.com/job-link-2", internship.getJobLink());
    }

    @Test
    public void testSetAndGetUser() {
        User user = new User();
        internship.setUser(user);
        assertEquals(user, internship.getUser());
    }

    @Test
    public void testSetAndGetInternshipId() {
        internship.setInternshipId(123L);
        assertEquals(Long.valueOf(123L), internship.getInternshipId());
    }
}
