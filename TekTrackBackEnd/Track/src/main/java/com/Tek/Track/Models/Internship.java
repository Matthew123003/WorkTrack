package com.Tek.Track.Models;

import java.time.LocalDate;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import jakarta.persistence.*;


@Entity
@Table(name = "Internship")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE) //Stores in temp memory before sending to DB to avoid concurrecy(uses softlocks)
public class Internship {
    //Unique table ID
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long internshipId;

    //Table columns
    @Column(nullable = false, length = 100)
    private String company;
    
    @Column(nullable = false, length = 100)
    private String jobTitle;
    
    @Column(name = "date_applied")
    private LocalDate dateApplied;
    
    @Column(nullable = false)
    private String duration; //(Dropbox season)

    @Column()
    private String assessment;

    @Column()
    private Boolean assessment_completed;

    @Column()
    private String contactPersonName;

    @Column()
    private String contactPersonEmail;

    @Column()
    private String contactPersonPhone;

    @Column(length = 250)
    private String jobDescription;

    @Column()
    private String status;

    @Column()
    private Boolean remote;

    @Column()
    private Boolean response;

    @Column(length = 100)
    private String jobLink;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    //Constructors
    public Internship() {} //Default constructor, required by JPA

    public Internship(String company, String jobTitle, LocalDate dateApplied, String duration, String assessment, Boolean assessment_completed, String contactPersonName, String contactPersonEmail, String contactPersonPhone, String jobDescription, String status, Boolean remote, Boolean response, String jobLink) {
        this.company = company;
        this.jobTitle = jobTitle;
        this.dateApplied = dateApplied;
        this.duration = duration;
        this.assessment = assessment;
        this.assessment_completed = assessment_completed;
        this.contactPersonName = contactPersonName;
        this.contactPersonEmail = contactPersonEmail;
        this.contactPersonPhone = contactPersonPhone;
        this.jobDescription = jobDescription;
        this.status = status;
        this.remote = remote;
        this.response = response;
        
    }

    //Getters and Setters
    public Long getInternshipId() {
        return internshipId;
    }

    public void setInternshipId(Long internshipId) {
        this.internshipId = internshipId;
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

    public LocalDate getDateApplied() {
        return dateApplied;
    }

    public void setDateApplied(LocalDate dateApplied) {
        this.dateApplied = dateApplied;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getAssessment() {
        return assessment;
    }

    public void setAssessment(String assessment) {
        this.assessment = assessment;
    }

    public Boolean getAssessmentCompleted() {
        return assessment_completed;
    }

    public void setAssessmentCompleted(Boolean assessmentCompleted) {
        this.assessment_completed = assessmentCompleted;
    }

    public String getContactPersonName() {
        return contactPersonName;
    }

    public void setContactPersonName(String contactPersonName) {
        this.contactPersonName = contactPersonName;
    }

    public String getContactPersonEmail() {
        return contactPersonEmail;
    }

    public void setContactPersonEmail(String contactPersonEmail) {
        this.contactPersonEmail = contactPersonEmail;
    }

    public String getContactPersonPhone() {
        return contactPersonPhone;
    }

    public void setContactPersonPhone(String contactPersonPhone) {
        this.contactPersonPhone = contactPersonPhone;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Boolean getRemote() {
        return remote;
    }

    public void setRemote(Boolean remote) {
        this.remote = remote;
    }

    public Boolean getResponse() {
        return response;
    }

    public void setResponse(Boolean response) {
        this.response = response;
    }

    public String getJobLink() {
        return jobLink;
    }

    public void setJobLink(String jobLink) {
        this.jobLink = jobLink;
    }

}
