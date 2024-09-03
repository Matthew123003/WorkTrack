package com.Tek.Track.Services;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.*;
import com.Tek.Track.Models.Interview;
import com.Tek.Track.Repositories.InterviewRepository;;

@Service
public class InterviewService {

    //Inject interviewRepository
    @Autowired 
    private InterviewRepository interviewRepository;

    //Constructor for interviewService to initialize interviewRepository
    public InterviewService(InterviewRepository interviewRepository) {
        this.interviewRepository = interviewRepository;
    }

    //Retrieve all interviews from the repository
    public List<Interview> findAll () { //Return list of interviews
        Iterable<Interview> interviewIterable = interviewRepository.findAll();
        List<Interview> interviewList = new ArrayList<>();
        interviewIterable.forEach(interviewList::add);
        return interviewList;
    }

    //Find interview by ID
    public Interview findById(Long id) {
        Optional<Interview> optionalInterview = interviewRepository.findById(id);

        if(optionalInterview.isEmpty()){
            return null;
        }

        Interview interview = optionalInterview.get();
        return interview;
    
    }

    //Crete a new interview
    public Interview create(Interview interview) {
        return interviewRepository.save(interview);  
    }

    //Delete by ID
    public Boolean deleteById(Long id) {
        if (interviewRepository.existsById(id)) {
            interviewRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // Update an existing user with new data
    public Interview update(Long id, Interview newInterviewData) {
        Optional<Interview> optionalInterview = interviewRepository.findById(id);  // Finds the user by ID, wrapped in an Optional

        // Guard clause: checks if the user was found
        if (optionalInterview.isEmpty()) {
            return null;  // Returns null if the user is not found
        }

        Interview originalInterview = optionalInterview.get();  
        originalInterview.setInterviewDate(newInterviewData.getInterviewDate());  
        originalInterview.setStage(newInterviewData.getStage());  
        originalInterview.setTyNote(newInterviewData.getTyNote());  
        originalInterview.setInterviewType(newInterviewData.getInterviewType());  
        originalInterview.setInterviewLink(newInterviewData.getInterviewLink());  
        originalInterview.setInterviewStatus(newInterviewData.getInterviewStatus());  
        originalInterview.setInterviewContactName(newInterviewData.getInterviewContactName());  
        originalInterview.setInterviewContactEmail(newInterviewData.getInterviewContactEmail()); 

        return interviewRepository.save(originalInterview);  
    }

}
