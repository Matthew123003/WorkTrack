package com.Tek.Track.Services;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.*;
import com.Tek.Track.Models.Interviews;
import com.Tek.Track.Repositories.InterviewsRepository;;

@Service
public class InterviewsService {

    //Inject interviewRepository
    @Autowired 
    private InterviewsRepository interviewRepository;

    //Constructor for interviewService to initialize interviewRepository
    public InterviewsService(InterviewsRepository interviewRepository) {
        this.interviewRepository = interviewRepository;
    }

    //Retrieve all interviews from the repository
    public List<Interviews> findAll () { //Return list of interviews
        Iterable<Interviews> interviewIterable = interviewRepository.findAll();
        List<Interviews> interviewList = new ArrayList<>();
        interviewIterable.forEach(interviewList::add);
        return interviewList;
    }

    //Find interview by ID
    public Interviews findById(Long id) {
        Optional<Interviews> optionalInterview = interviewRepository.findById(id);

        if(optionalInterview.isEmpty()){
            return null;
        }

        Interviews interview = optionalInterview.get();
        return interview;
    
    }

    //Crete a new interview
    public Interviews create(Interviews interview) {
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
    public Interviews update(Long id, Interviews newInterviewData) {
        Optional<Interviews> optionalInterview = interviewRepository.findById(id);  // Finds the user by ID, wrapped in an Optional

        // Guard clause: checks if the user was found
        if (optionalInterview.isEmpty()) {
            return null;  // Returns null if the user is not found
        }

        Interviews originalInterview = optionalInterview.get();  
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
