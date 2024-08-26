package com.Tek.Track.Models;

import java.util.Date;
import java.util.Objects;

import jakarta.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;


@Entity
@Table(name = "Job_Information")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class JobInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long jobInfoId;

    @Column(name = "company_name", length = 100, nullable = false)
    private String company;

    @Column(name = "job_title", length = 100, nullable = false)
    private String jobTitle;

    @Column(name = "job_link", length = 254)
    private String jobUrlLink;

    @Column(name = "job_description", length = 254)
    private String jobDesc;

    @Column(name = "date_applied", length = 50, nullable = false)
    private Date dateApplied;

    @Column(name = "contact_name", length = 100)
    private String contactName;

    @Column(name = "contact_email", length = 150)
    private String contactEmail;

    @Column(name = "contact_number", length = 50)
    private String contactNumber;

    @Column(name = "referral_name", length = 100)
    private String referral;

    @Column(name = "remote")
    private Boolean remote;

    @Column(name = "got_response")
    private Boolean gotResponse;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;


    public JobInfo() {
    }

    public JobInfo(String company, String jobTitle, String jobUrlLink, String jobDesc, Date dateApplied, String contactName, String contactEmail, String contactNumber, String referral, Boolean remote, Boolean gotResponse, User user) {
        this.company = company;
        this.jobTitle = jobTitle;
        this.jobUrlLink = jobUrlLink;
        this.jobDesc = jobDesc;
        this.dateApplied = dateApplied;
        this.contactName = contactName;
        this.contactEmail = contactEmail;
        this.contactNumber = contactNumber;
        this.referral = referral;
        this.remote = remote;
        this.gotResponse = gotResponse;
        this.user = user;
    }

    public JobInfo(long jobInfoId, String company, String jobTitle, String jobUrlLink, String jobDesc, Date dateApplied, String contactName, String contactEmail, String contactNumber, String referral, Boolean remote, Boolean gotResponse, User user) {
        this.jobInfoId = jobInfoId;
        this.company = company;
        this.jobTitle = jobTitle;
        this.jobUrlLink = jobUrlLink;
        this.jobDesc = jobDesc;
        this.dateApplied = dateApplied;
        this.contactName = contactName;
        this.contactEmail = contactEmail;
        this.contactNumber = contactNumber;
        this.referral = referral;
        this.remote = remote;
        this.gotResponse = gotResponse;
        this.user = user;
    }

    public long getJobInfoId() {
        return jobInfoId;
    }

    public void setJobInfoId(long jobInfoId) {
        this.jobInfoId = jobInfoId;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getJobUrlLink() {
        return jobUrlLink;
    }

    public void setJobUrlLink(String jobUrlLink) {
        this.jobUrlLink = jobUrlLink;
    }

    public String getJobDesc() {
        return jobDesc;
    }

    public void setJobDesc(String jobDesc) {
        this.jobDesc = jobDesc;
    }

    public Date getDateApplied() {
        return dateApplied;
    }

    public void setDateApplied(Date dateApplied) {
        this.dateApplied = dateApplied;
    }

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getReferral() {
        return referral;
    }

    public void setReferral(String referral) {
        this.referral = referral;
    }

    public Boolean getRemote() {
        return remote;
    }

    public void setRemote(Boolean remote) {
        this.remote = remote;
    }

    public Boolean getGotResponse() {
        return gotResponse;
    }

    public void setGotResponse(Boolean gotResponse) {
        this.gotResponse = gotResponse;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    JobInfo jobInfo = (JobInfo) o;
    return jobInfoId == jobInfo.jobInfoId &&
           Objects.equals(company, jobInfo.company) &&
           Objects.equals(jobTitle, jobInfo.jobTitle) &&
           Objects.equals(jobUrlLink, jobInfo.jobUrlLink) &&
           Objects.equals(jobDesc, jobInfo.jobDesc) &&
           Objects.equals(dateApplied, jobInfo.dateApplied) &&
           Objects.equals(contactName, jobInfo.contactName) &&
           Objects.equals(contactEmail, jobInfo.contactEmail) &&
           Objects.equals(contactNumber, jobInfo.contactNumber) &&
           Objects.equals(referral, jobInfo.referral) &&
           Objects.equals(remote, jobInfo.remote) &&
           Objects.equals(gotResponse, jobInfo.gotResponse) &&
           Objects.equals(user, jobInfo.getUser());
}


    @Override
    public int hashCode() { // Overridden method to generate a hash code for the User object.
        return Objects.hash(jobInfoId, company, jobTitle, jobUrlLink, dateApplied, contactName, contactEmail, contactNumber, referral, remote, gotResponse, user); // Returns a hash code
    }
}

