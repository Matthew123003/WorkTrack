package Services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import Models.Internship;
import Models.Internship;
import Repositories.InternshipRepository;
import Repositories.InternshipRepository;

public class InternshipService {

        //Inject interviewRepository
    @Autowired 
    private InternshipRepository internshipRepository;

    //Constructor for interviewService to initialize interviewRepository
    public InternshipService(InternshipRepository internshipRepository) {
        this.internshipRepository = internshipRepository;
    }

    //Retrieve all interviews from the repository
    public List<Internship> findAll () { //Return list of interviews
        Iterable<Internship> internshipIterable = internshipRepository.findAll();
        List<Internship> internshipList = new ArrayList<>();
        internshipIterable.forEach(internshipList::add);
        return internshipList;
    }

    //Find interview by ID
    public Internship findById(Long id) {
        Optional<Internship> optionalInternship = internshipRepository.findById(id);

        if(optionalInternship.isEmpty()){
            return null;
        }

        Internship internship = optionalInternship.get();
        return internship;
    
    }

    //Crete a new interview
    public Internship create(Internship internship) {
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
    public Internship update(Long id, Internship newInternshipData) {
        Optional<Internship> optionalInternship = internshipRepository.findById(id);  // Finds the user by ID, wrapped in an Optional

        // Guard clause: checks if the user was found
        if (optionalInternship.isEmpty()) {
            return null;  // Returns null if the user is not found
        }

        Internship originalInternship = optionalInternship.get();  
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
