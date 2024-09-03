package com.Tek.Track.JobTests;

import com.Tek.Track.Models.JobInfo;
import com.Tek.Track.Models.User;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import com.Tek.Track.TrackApplication;
import com.Tek.Track.Repositories.JobRepository;
import com.Tek.Track.Services.JobService;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = TrackApplication.class)
public class JobServiceUnitTests {

    @MockBean
    private JobRepository jobRepository;

    @Autowired
    private JobService jobService;

    @Test
    public void whenJobIdIsProvided_thenRetrievedJobIsCorrect() {
        Long mockId = 2L;
        String mockCompany = "company";
        String mockJobTitle = "title";
        String mockJobUrl = "www.url.com";
        String mockJobDesc = "description";
        Date mockDateApplied = new Date();
        String mockContactName = "name";
        String mockContactEmail = "email@email.email";
        String mockContactNumber = "555-555-5555";
        String mockReferral = "refferal";
        Boolean mockRemote = true;
        Boolean mockResponse = true;
        User mockUser = new User(1L, "fName", "lName", "email@email.com", "userName", "password");

        JobInfo mockJobInfo = new JobInfo(mockCompany, mockJobTitle, mockJobUrl, mockJobDesc, mockDateApplied, mockContactName, mockContactEmail, mockContactNumber, mockReferral, mockRemote, mockResponse, mockUser);
        mockJobInfo.setJobInfoId(mockId);

        Mockito.when(jobRepository.findById(mockId)).thenReturn(Optional.of(mockJobInfo));

        JobInfo retrievedJobInfo = jobService.findById(mockId);

        Assert.assertNotNull(retrievedJobInfo);
        Assert.assertEquals(mockCompany, retrievedJobInfo.getCompany());
        Assert.assertEquals(mockJobTitle, retrievedJobInfo.getJobTitle());
        Assert.assertEquals(mockJobUrl, retrievedJobInfo.getJobUrlLink());
        Assert.assertEquals(mockJobDesc, retrievedJobInfo.getJobDesc());
        Assert.assertEquals(mockDateApplied, retrievedJobInfo.getDateApplied());
        Assert.assertEquals(mockContactName, retrievedJobInfo.getContactName());
        Assert.assertEquals(mockContactEmail, retrievedJobInfo.getContactEmail());
        Assert.assertEquals(mockContactNumber, retrievedJobInfo.getContactNumber());
        Assert.assertEquals(mockReferral, retrievedJobInfo.getReferral());
        Assert.assertTrue(retrievedJobInfo.getRemote());
        Assert.assertTrue(retrievedJobInfo.getGotResponse());
        Assert.assertEquals(mockUser, retrievedJobInfo.getUser());
    }

    // Test findAll method
    @Test
    public void whenFindAll_thenAllJobsAreRetrieved() {
        List<JobInfo> mockJobList = new ArrayList<>();
        mockJobList.add(new JobInfo("company1", "title1", "www.url1.com", "description1", new Date(), "name1", "email1@email.email", "555-555-5551", "referral1", true, true, new User()));
        mockJobList.add(new JobInfo("company2", "title2", "www.url2.com", "description2", new Date(), "name2", "email2@email.email", "555-555-5552", "referral2", true, true, new User()));

        Mockito.when(jobRepository.findAll()).thenReturn(mockJobList);

        List<JobInfo> retrievedJobList = jobService.findAll();

        Assert.assertNotNull(retrievedJobList);
        Assert.assertEquals(2, retrievedJobList.size());
    }

    // Test create method
    @Test
    public void whenValidJobIsProvided_thenJobIsCreated() {
        JobInfo mockJobInfo = new JobInfo("company", "title", "www.url.com", "description", new Date(), "name", "email@email.email", "555-555-5555", "referral", true, true, new User());

        Mockito.when(jobRepository.save(mockJobInfo)).thenReturn(mockJobInfo);

        JobInfo createdJobInfo = jobService.create(mockJobInfo);

        Assert.assertNotNull(createdJobInfo);
        Assert.assertEquals(mockJobInfo, createdJobInfo);
    }

    // Test deleteById method
    @Test
    public void whenJobIdIsProvided_thenJobIsDeleted() {
        Long mockId = 2L;

        Mockito.doNothing().when(jobRepository).deleteById(mockId);

        Boolean isDeleted = jobService.deleteById(mockId);

        Assert.assertTrue(isDeleted);
    }

    // Test update method
    @Test
    public void whenJobIdIsProvided_thenJobIsUpdated() {
        Long mockId = 2L;
        JobInfo mockOriginalJobInfo = new JobInfo("originalCompany", "originalTitle", "www.originalurl.com", "originalDescription", new Date(), "originalName", "originalEmail@email.email", "555-555-5555", "originalReferral", true, true, new User());
        JobInfo mockUpdatedJobInfo = new JobInfo("updatedCompany", "updatedTitle", "www.updatedurl.com", "updatedDescription", new Date(), "updatedName", "updatedEmail@email.email", "555-555-5555", "updatedReferral", true, true, new User());

        Mockito.when(jobRepository.findById(mockId)).thenReturn(Optional.of(mockOriginalJobInfo));
        Mockito.when(jobRepository.save(mockOriginalJobInfo)).thenReturn(mockUpdatedJobInfo);

        JobInfo updatedJobInfo = jobService.update(mockId, mockUpdatedJobInfo);

        Assert.assertNotNull(updatedJobInfo);
        Assert.assertEquals("updatedCompany", updatedJobInfo.getCompany());
        Assert.assertEquals("updatedTitle", updatedJobInfo.getJobTitle());
        Assert.assertEquals("www.updatedurl.com", updatedJobInfo.getJobUrlLink());
        Assert.assertEquals("updatedDescription", updatedJobInfo.getJobDesc());
        Assert.assertEquals("updatedName", updatedJobInfo.getContactName());
        Assert.assertEquals("updatedEmail@email.email", updatedJobInfo.getContactEmail());
    }

    // Test findById when JobInfo is not found
    @Test
    public void whenJobIdNotFound_thenJobIsNull() {
        Long mockId = 2L;

        Mockito.when(jobRepository.findById(mockId)).thenReturn(Optional.empty());

        JobInfo retrievedJobInfo = jobService.findById(mockId);

        Assert.assertNull(retrievedJobInfo);
    }

    // Test update when JobInfo is not found
    @Test
    public void whenJobIdNotFound_thenUpdateReturnsNull() {
        Long mockId = 2L;
        JobInfo mockUpdatedJobInfo = new JobInfo("updatedCompany", "updatedTitle", "www.updatedurl.com", "updatedDescription", new Date(), "updatedName", "updatedEmail@email.email", "555-555-5555", "updatedReferral", true, true, new User());

        Mockito.when(jobRepository.findById(mockId)).thenReturn(Optional.empty());

        JobInfo updatedJobInfo = jobService.update(mockId, mockUpdatedJobInfo);

        Assert.assertNull(updatedJobInfo);
    }

    // TEST COVERAGE FOR JOB SERVICE AT 100%

}
