package com.Tek.Track.InterviewTests;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;
import java.time.LocalDate;
import java.util.*;
import com.Tek.Track.Models.Interviews;
import com.Tek.Track.Repositories.InterviewsRepository;
import com.Tek.Track.Services.InterviewsService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

public class InterviewServiceTests {
    @Mock
    private InterviewsRepository interviewRepository;

    @InjectMocks
    private InterviewsService interviewService;

    private Interviews interview;
    private Long interviewId;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);

        interviewId = 1L;
        interview = new Interviews();
        interview.setInterviewId(interviewId);
        interview.setInterviewDate(LocalDate.now());
        interview.setStage("First Round");
        interview.setTyNote(true);
        interview.setInterviewType("Virtual");
        interview.setInterviewLink("https://example.com");
        interview.setInterviewStatus("Scheduled");
        interview.setInterviewContactName("John Doe");
        interview.setInterviewContactEmail("johndoe@example.com");
    }

    @Test
    public void testFindAll() {
        List<Interviews> interviews = Arrays.asList(interview);
        when(interviewRepository.findAll()).thenReturn(interviews);

        List<Interviews> result = interviewService.findAll();

        assertNotNull(result);
        assertEquals(1, result.size());
        verify(interviewRepository, times(1)).findAll();
    }

    @Test
    public void testFindByIdSuccess() {
        when(interviewRepository.findById(interviewId)).thenReturn(Optional.of(interview));

        Interviews result = interviewService.findById(interviewId);

        assertNotNull(result);
        assertEquals(interviewId, result.getInterviewId());
        verify(interviewRepository, times(1)).findById(interviewId);
    }

    @Test
    public void testFindByIdNotFound() {
        when(interviewRepository.findById(interviewId)).thenReturn(Optional.empty());

        Interviews result = interviewService.findById(interviewId);

        assertNull(result);
        verify(interviewRepository, times(1)).findById(interviewId);
    }

    @Test
    public void testCreate() {
        when(interviewRepository.save(interview)).thenReturn(interview);

        Interviews result = interviewService.create(interview);

        assertNotNull(result);
        assertEquals(interviewId, result.getInterviewId());
        verify(interviewRepository, times(1)).save(interview);
    }

    @Test
    public void testDeleteByIdSuccess() {
        when(interviewRepository.existsById(interviewId)).thenReturn(true);

        Boolean result = interviewService.deleteById(interviewId);

        assertTrue(result);
        verify(interviewRepository, times(1)).existsById(interviewId);
        verify(interviewRepository, times(1)).deleteById(interviewId);
    }

    @Test
    public void testDeleteByIdNotFound() {
        when(interviewRepository.existsById(interviewId)).thenReturn(false);

        Boolean result = interviewService.deleteById(interviewId);

        assertFalse(result);
        verify(interviewRepository, times(1)).existsById(interviewId);
        verify(interviewRepository, never()).deleteById(interviewId);
    }

    @Test
    public void testUpdateSuccess() {
        when(interviewRepository.findById(interviewId)).thenReturn(Optional.of(interview));
        when(interviewRepository.save(interview)).thenReturn(interview);

        Interviews updatedInterview = new Interviews();
        updatedInterview.setInterviewDate(LocalDate.of(2023, 12, 1));
        updatedInterview.setStage("Final Round");
        updatedInterview.setTyNote(false);
        updatedInterview.setInterviewType("In Person");
        updatedInterview.setInterviewLink("https://newlink.com");
        updatedInterview.setInterviewStatus("Completed");
        updatedInterview.setInterviewContactName("Jane Smith");
        updatedInterview.setInterviewContactEmail("janesmith@example.com");

        Interviews result = interviewService.update(interviewId, updatedInterview);

        assertNotNull(result);
        assertEquals("Final Round", result.getStage());
        assertEquals("Jane Smith", result.getInterviewContactName());
        verify(interviewRepository, times(1)).findById(interviewId);
        verify(interviewRepository, times(1)).save(interview);
    }

    @Test
    public void testUpdateNotFound() {
        when(interviewRepository.findById(interviewId)).thenReturn(Optional.empty());

        Interviews updatedInterview = new Interviews();
        updatedInterview.setInterviewDate(LocalDate.of(2023, 12, 1));
        updatedInterview.setStage("Final Round");

        Interviews result = interviewService.update(interviewId, updatedInterview);

        assertNull(result);
        verify(interviewRepository, times(1)).findById(interviewId);
        verify(interviewRepository, never()).save(any(Interviews.class));
    }
}
