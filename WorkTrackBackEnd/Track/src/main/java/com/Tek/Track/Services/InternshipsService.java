package com.Tek.Track.Services;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.Tek.Track.Models.Internships;
import com.Tek.Track.Repositories.InternshipsRepository;
import org.springframework.stereotype.Service;

@Service
public class InternshipsService {

    @Autowired 
    private InternshipsRepository internshipRepository;

    public InternshipsService(InternshipsRepository internshipRepository) {
        this.internshipRepository = internshipRepository;
    }

    public List<Internships> findJobsByUserId(Long userId) {
        return internshipRepository.findByUserUserId(userId);
    }

    //Retrieve all interviews from the repository
    public List<Internships> findAll () { //Return list of interviews
        Iterable<Internships> internshipIterable = internshipRepository.findAll();
        List<Internships> internshipList = new ArrayList<>();
        internshipIterable.forEach(internshipList::add);
        return internshipList;
    }

    //Find interview by ID
    public Internships findById(Long id) {
        Optional<Internships> optionalInternship = internshipRepository.findById(id);

        if(optionalInternship.isEmpty()){
            return null;
        }

        Internships internship = optionalInternship.get();
        return internship;
    
    }

    //Crete a new interview
    public Internships create(Internships internship) {
        return internshipRepository.save(internship);  
    }

    //Delete by ID
    public Boolean deleteById(Long id) {
        if (internshipRepository.existsById(id)) {
            internshipRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // Update an existing user with new data
    public Internships update(Long id, Internships newInternshipData) {
        Optional<Internships> optionalInternship = internshipRepository.findById(id);  // Finds the user by ID, wrapped in an Optional

        // Guard clause: checks if the user was found
        if (optionalInternship.isEmpty()) {
            return null;  // Returns null if the user is not found
        }

        Internships originalInternship = optionalInternship.get();  
        originalInternship.setCompany(newInternshipData.getCompany());  
        originalInternship.setJobTitle(newInternshipData.getJobTitle());  
        originalInternship.setDateApplied(newInternshipData.getDateApplied());  
        originalInternship.setDuration(newInternshipData.getDuration());  
        originalInternship.setAssessment(newInternshipData.getAssessment());  
        originalInternship.setAssessmentCompleted(newInternshipData.getAssessmentCompleted());  
        originalInternship.setContactPersonPhone(newInternshipData.getContactPersonPhone());  
        originalInternship.setContactPersonEmail(newInternshipData.getContactPersonEmail()); 
        originalInternship.setJobDescription(newInternshipData.getJobDescription());
        originalInternship.setStatus(newInternshipData.getStatus());  
        originalInternship.setRemote(newInternshipData.getRemote()); 
        originalInternship.setResponse(newInternshipData.getResponse()); 
        originalInternship.setJobLink(newInternshipData.getJobLink()); 

        return internshipRepository.save(originalInternship);  
    }
}