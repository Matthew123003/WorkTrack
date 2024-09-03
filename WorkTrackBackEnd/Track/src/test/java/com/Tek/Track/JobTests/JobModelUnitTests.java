package com.Tek.Track.JobTests;

import java.util.Date;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import com.Tek.Track.Models.JobInfo;
import com.Tek.Track.Models.User;

public class JobModelUnitTests {

    private JobInfo jobInfo;
    private JobInfo identicalJobInfo;
    private JobInfo differentJobInfo;

    @Before
    public void setUp() {
        User user = new User();
        Date dateApplied = new Date();

        jobInfo = new JobInfo(1L, "Company", "Job Title", "http://joblink.com", "Job Description", dateApplied, "Contact Name", "contact@example.com", "1234567890", "Referral Name", true, true, user);

        identicalJobInfo = new JobInfo(1L, "Company", "Job Title", "http://joblink.com", "Job Description", dateApplied, "Contact Name", "contact@example.com", "1234567890", "Referral Name", true, true, user);

        differentJobInfo = new JobInfo(2L, "Different Company", "Different Job Title", "http://differentjoblink.com", "Different Job Description", new Date(), "Different Contact Name", "different@example.com", "0987654321", "Different Referral Name", false, false, user);
    }

    @Test
    public void testGettersAndSetters() {
        User user = new User();
        Date dateApplied = new Date();

        jobInfo.setJobInfoId(2L);
        jobInfo.setCompany("Different Company");
        jobInfo.setJobTitle("Different Job Title");
        jobInfo.setJobUrlLink("http://differentjoblink.com");
        jobInfo.setJobDesc("Different Job Description");
        jobInfo.setDateApplied(dateApplied);
        jobInfo.setContactName("Different Contact Name");
        jobInfo.setContactEmail("different@example.com");
        jobInfo.setContactNumber("0987654321");
        jobInfo.setReferral("Different Referral Name");
        jobInfo.setRemote(false);
        jobInfo.setGotResponse(false);
        jobInfo.setUser(user);

        Assert.assertEquals(2L, jobInfo.getJobInfoId());
        Assert.assertEquals("Different Company", jobInfo.getCompany());
        Assert.assertEquals("Different Job Title", jobInfo.getJobTitle());
        Assert.assertEquals("http://differentjoblink.com", jobInfo.getJobUrlLink());
        Assert.assertEquals("Different Job Description", jobInfo.getJobDesc());
        Assert.assertEquals(dateApplied, jobInfo.getDateApplied());
        Assert.assertEquals("Different Contact Name", jobInfo.getContactName());
        Assert.assertEquals("different@example.com", jobInfo.getContactEmail());
        Assert.assertEquals("0987654321", jobInfo.getContactNumber());
        Assert.assertEquals("Different Referral Name", jobInfo.getReferral());
        Assert.assertEquals(false, jobInfo.getRemote());
        Assert.assertEquals(false, jobInfo.getGotResponse());
        Assert.assertEquals(user, jobInfo.getUser());
    }

    @Test
    public void testEquals() {
        // Test reflexive property
        Assert.assertEquals(jobInfo, jobInfo);

        // Test symmetric property
        Assert.assertEquals(jobInfo, identicalJobInfo);
        Assert.assertEquals(identicalJobInfo, jobInfo);

        // Test transitive property
        JobInfo thirdIdenticalJobInfo = new JobInfo(1L, "Company", "Job Title", "http://joblink.com", "Job Description", jobInfo.getDateApplied(), "Contact Name", "contact@example.com", "1234567890", "Referral Name", true, true, null);
        Assert.assertEquals(jobInfo, identicalJobInfo);
        Assert.assertEquals(identicalJobInfo, thirdIdenticalJobInfo);
        Assert.assertEquals(jobInfo, thirdIdenticalJobInfo);

        // Test inequality
        Assert.assertNotEquals(jobInfo, differentJobInfo);

        // Test against null
        Assert.assertNotEquals(null, jobInfo);

        // Test against different object type
        Assert.assertNotEquals(jobInfo, new Object());
    }

    @Test
    public void testHashCode() {
        Assert.assertEquals(jobInfo.hashCode(), identicalJobInfo.hashCode());
        Assert.assertNotEquals(jobInfo.hashCode(), differentJobInfo.hashCode());
    }

    @Test
    public void testConstructor() {
        User user = new User();
        Date dateApplied = new Date();

        JobInfo jobInfo = new JobInfo("Company", "Job Title", "http://joblink.com", "Job Description", dateApplied, "Contact Name", "contact@example.com", "1234567890", "Referral Name", true, true, user);

        Assert.assertEquals("Company", jobInfo.getCompany());
        Assert.assertEquals("Job Title", jobInfo.getJobTitle());
        Assert.assertEquals("http://joblink.com", jobInfo.getJobUrlLink());
        Assert.assertEquals("Job Description", jobInfo.getJobDesc());
        Assert.assertEquals(dateApplied, jobInfo.getDateApplied());
        Assert.assertEquals("Contact Name", jobInfo.getContactName());
        Assert.assertEquals("contact@example.com", jobInfo.getContactEmail());
        Assert.assertEquals("1234567890", jobInfo.getContactNumber());
        Assert.assertEquals("Referral Name", jobInfo.getReferral());
        Assert.assertEquals(true, jobInfo.getRemote());
        Assert.assertEquals(true, jobInfo.getGotResponse());
        Assert.assertEquals(user, jobInfo.getUser());
    }
}
