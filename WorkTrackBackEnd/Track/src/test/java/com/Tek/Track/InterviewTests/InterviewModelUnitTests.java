package com.Tek.Track.InterviewTests;

import com.Tek.Track.Models.Internships;
import com.Tek.Track.Models.Interviews;
import com.Tek.Track.Models.JobInfo;
import org.junit.Before;
import org.junit.Test;
import java.time.LocalDate;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;

public class InterviewModelUnitTests {

    private Interviews interview;
    private LocalDate interviewDate;
    private String stage;
    private Boolean tyNote;
    private String interviewType;
    private String interviewLink;
    private String interviewStatus;
    private String interviewContactName;
    private String interviewContactEmail;
    private JobInfo jobInfo;
    private Internships internship;

    @Before
    public void setUp() {
        interviewDate = LocalDate.now();
        stage = "First Round";
        tyNote = true;
        interviewType = "Virtual";
        interviewLink = "https://example.com";
        interviewStatus = "Scheduled";
        interviewContactName = "John Doe";
        interviewContactEmail = "johndoe@example.com";
        jobInfo = new JobInfo();
        internship = new Internships();

        interview = new Interviews(interviewDate, stage, tyNote, interviewType, interviewLink, interviewStatus, interviewContactName, interviewContactEmail, jobInfo, internship);
    }

    @Test
    public void testConstructor() {
        Interviews interview = new Interviews(interviewDate, stage, tyNote, interviewType, interviewLink, interviewStatus, interviewContactName, interviewContactEmail, jobInfo, internship);
        assertEquals(interviewDate, interview.getInterviewDate());
        assertEquals(stage, interview.getStage());
        assertEquals(tyNote, interview.getTyNote());
        assertEquals(interviewType, interview.getInterviewType());
        assertEquals(interviewLink, interview.getInterviewLink());
        assertEquals(interviewStatus, interview.getInterviewStatus());
        assertEquals(interviewContactName, interview.getInterviewContactName());
        assertEquals(interviewContactEmail, interview.getInterviewContactEmail());
        assertEquals(jobInfo, interview.getJobInfo());
        assertEquals(internship, interview.getInternship());
    }

    @Test
    public void testSetAndGetInterviewId() {
        interview.setInterviewId(1L);
        assertEquals(Long.valueOf(1L), interview.getInterviewId());
    }

    @Test
    public void testSetAndGetInterviewDate() {
        LocalDate newDate = LocalDate.of(2023, 12, 1);
        interview.setInterviewDate(newDate);
        assertEquals(newDate, interview.getInterviewDate());
    }

    @Test
    public void testSetAndGetStage() {
        String newStage = "Final Round";
        interview.setStage(newStage);
        assertEquals(newStage, interview.getStage());
    }

    @Test
    public void testSetAndGetTyNote() {
        interview.setTyNote(false);
        assertFalse(interview.getTyNote());
    }

    @Test
    public void testSetAndGetInterviewType() {
        String newType = "In Person";
        interview.setInterviewType(newType);
        assertEquals(newType, interview.getInterviewType());
    }

    @Test
    public void testSetAndGetInterviewLink() {
        String newLink = "https://newlink.com";
        interview.setInterviewLink(newLink);
        assertEquals(newLink, interview.getInterviewLink());
    }

    @Test
    public void testSetAndGetInterviewStatus() {
        String newStatus = "Completed";
        interview.setInterviewStatus(newStatus);
        assertEquals(newStatus, interview.getInterviewStatus());
    }

    @Test
    public void testSetAndGetInterviewContactName() {
        String newName = "Jane Smith";
        interview.setInterviewContactName(newName);
        assertEquals(newName, interview.getInterviewContactName());
    }

    @Test
    public void testSetAndGetInterviewContactEmail() {
        String newEmail = "janesmith@example.com";
        interview.setInterviewContactEmail(newEmail);
        assertEquals(newEmail, interview.getInterviewContactEmail());
    }

    @Test
    public void testSetAndGetJobInfo() {
        JobInfo newJobInfo = new JobInfo();
        interview.setJobInfo(newJobInfo);
        assertEquals(newJobInfo, interview.getJobInfo());
    }

    @Test
    public void testSetAndGetInternship() {
        Internships newInternship = new Internships();
        interview.setInternship(newInternship);
        assertEquals(newInternship, interview.getInternship());
    }
}
