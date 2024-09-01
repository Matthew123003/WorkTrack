package com.Tek.Track.InterviewTests;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import java.time.LocalDate;
import java.util.*;
import com.Tek.Track.Controllers.InterviewController;
import com.Tek.Track.Models.Interview;
import com.Tek.Track.Services.InterviewService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

public class InterviewControllerTests {
    @Mock
    private InterviewService interviewService;

    @InjectMocks
    private InterviewController interviewController;

    private MockMvc mockMvc;
    private Interview interview;
    private Long interviewId;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(interviewController).build();

        interviewId = 1L;
        interview = new Interview();
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
    public void testGetAllInterview() throws Exception {
        List<Interview> interviews = Arrays.asList(interview);
        when(interviewService.findAll()).thenReturn(interviews);

        mockMvc.perform(get("/interview/allInterview"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].interviewId").value(interviewId))
                .andExpect(jsonPath("$[0].stage").value("First Round"));

        verify(interviewService, times(1)).findAll();
    }

    @Test
    public void testGetInterviewSuccess() throws Exception {
        when(interviewService.findById(interviewId)).thenReturn(interview);

        mockMvc.perform(get("/interview/{id}", interviewId))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.interviewId").value(interviewId))
                .andExpect(jsonPath("$.stage").value("First Round"));

        verify(interviewService, times(1)).findById(interviewId);
    }

    @Test
    public void testGetInterviewNotFound() throws Exception {
        when(interviewService.findById(interviewId)).thenReturn(null);

        mockMvc.perform(get("/interview/{id}", interviewId))
                .andExpect(status().isNotFound());

        verify(interviewService, times(1)).findById(interviewId);
    }

    @Test
    public void testCreateInterview() throws Exception {
        when(interviewService.create(any(Interview.class))).thenReturn(interview);

        mockMvc.perform(post("/interview/newInterview")
                        .contentType("application/json")
                        .content("{\"stage\": \"First Round\", \"interviewType\": \"Virtual\"}"))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.interviewId").value(interviewId))
                .andExpect(jsonPath("$.stage").value("First Round"));

        verify(interviewService, times(1)).create(any(Interview.class));
    }

    @Test
    public void testUpdateInterview() throws Exception {
        when(interviewService.update(eq(interviewId), any(Interview.class))).thenReturn(interview);

        mockMvc.perform(put("/interview/updateInterview/{id}", interviewId)
                        .contentType("application/json")
                        .content("{\"stage\": \"Final Round\", \"interviewType\": \"In Person\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.stage").value("First Round"))
                .andExpect(jsonPath("$.interviewType").value("Virtual"));

        verify(interviewService, times(1)).update(eq(interviewId), any(Interview.class));
    }

    @Test
    public void testDeleteInterview() throws Exception {
        when(interviewService.deleteById(interviewId)).thenReturn(true);

        mockMvc.perform(delete("/interview/deleteInterview/{id}", interviewId))
                .andExpect(status().isOk());

        verify(interviewService, times(1)).deleteById(interviewId);
    }
}
