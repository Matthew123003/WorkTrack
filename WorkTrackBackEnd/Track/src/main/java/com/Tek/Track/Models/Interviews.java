package com.Tek.Track.Models;


import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonBackReference;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import jakarta.persistence.*;

@Entity
@Table(name= "Interview")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Interviews {

    //Unique table ID
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long interviewId;

    //Table columns
    @Column(name = "interview_date", nullable = false)
    private LocalDate interviewDate;
  
    @Column(name = "interview_stage", nullable = false, length = 50)
    private String stage; //Possible ENUM (1st, 2nd, Final)
    
    @ Column(name = "ty_note")
    private Boolean tyNote;

    @Column(name = "interview_type")
    private String interviewType; //Possible ENUM (In Person, Virtual, Zoom, GoogleMeets, Phone)

    @Column(name = "interview_link", length = 154)
    private String interviewLink;

    @Column(name = "interview_status")
    private String interviewStatus;

    @Column(name = "interview_contact_name")
    private String interviewContactName;

    @Column(name = "interview_contact_email")
    private String interviewContactEmail;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "job_info_id")
    @JsonBackReference
    private JobInfo jobInfo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "internship_id")
    @JsonBackReference
    private Internships internships;
   
    //Constructors
    public Interviews() {}

    public Interviews(LocalDate interviewDate, String stage, Boolean tyNote, String interviewType, String interviewLink, String interviewStatus, String interviewContactName, String interviewContactEmail, JobInfo jobInfo, Internships internships) {
        this.interviewDate = interviewDate;
        this.stage = stage;
        this.tyNote = tyNote;
        this.interviewType = interviewType;
        this.interviewLink = interviewLink;
        this.interviewStatus = interviewStatus;
        this.interviewContactName = interviewContactName;
        this.interviewContactEmail = interviewContactEmail;
        this.jobInfo = jobInfo;
        this.internships = internships;
    }
    
    // Getters and Setters 
    public Long getInterviewId() {
        return interviewId;
    }

    public void setInterviewId(Long interviewId) {
        this.interviewId = interviewId;
    }

    public LocalDate getInterviewDate() {
        return interviewDate;
    }

    public void setInterviewDate(LocalDate interviewDate) {
        this.interviewDate = interviewDate;
    }

    public String getStage() {
        return stage;
    }

    public void setStage(String stage) {
        this.stage = stage;
    }

    public Boolean getTyNote() {
        return tyNote;
    }

    public void setTyNote(Boolean tyNote) {
        this.tyNote = tyNote;
    }

    public String getInterviewType() {
        return interviewType;
    }

    public void setInterviewType(String interviewType) {
        this.interviewType = interviewType;
    }

    public String getInterviewLink() {
        return interviewLink;
    }

    public void setInterviewLink(String interviewLink) {
        this.interviewLink = interviewLink;
    }

    public String getInterviewStatus() {
        return interviewStatus;
    }

    public void setInterviewStatus(String interviewStatus) {
        this.interviewStatus = interviewStatus;
    }

    public String getInterviewContactName() {
        return interviewContactName;
    }

    public void setInterviewContactName(String interviewContactName) {
        this.interviewContactName = interviewContactName;
    }

    public String getInterviewContactEmail() {
        return interviewContactEmail;
    }

    public void setInterviewContactEmail(String interviewContactEmail) {
        this.interviewContactEmail = interviewContactEmail;
    }

    public JobInfo getJobInfo() {
        return jobInfo;
    }

    public void setJobInfo(JobInfo jobInfo) {
        this.jobInfo = jobInfo;
    }

    public Internships getInternship() {
        return internships;
    }

    public void setInternship(Internships internship) {
        this.internships = internship;
    }

//Creating an interview for a job
//JobInfo job = jobService.findById(jobId);
//Interview interview = new Interview();
//interview.setInterviewDate(LocalDate.now());
//interview.setStage("First Round");
//interview.setJobInfo(job);
//interviewService.create(interview);
//
//Creating an interview for an internship
//Internship internship = internshipService.findById(internshipId);
//Interview interview = new Interview();
//interview.setInterviewDate(LocalDate.now());
//interview.setStage("Final Round");
//interview.setInternship(internship);
//interviewService.create(interview);

//    public enum Stage {
//        FIRST_ROUND,
//        SECOND_ROUND,
//        FINAL_ROUND,
//        HR_INTERVIEW
//    }
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "interview_stage", nullable = false, length = 50)
//    private Stage stage;
//
//    public enum InterviewType {
//        IN_PERSON,
//        VIRTUAL,
//        PHONE,
//        ZOOM,
//        GOOGLE_MEET
//    }
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "interview_type", nullable = false, length = 50)
//    private InterviewType interviewType;
}