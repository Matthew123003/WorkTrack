package com.Tek.Track.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import com.Tek.Track.Models.Interview;
import com.Tek.Track.Services.InterviewService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/interview")
public class InterviewsController {

    @Autowired //Inject 'UserService' dependency
    private InterviewService interviewService;

    public InterviewsController(InterviewsService interviewsService) {
        this.interviewsService = interviewsService;
    }

    @GetMapping("/allInterview")  
    public ResponseEntity<List<Interview>> getAllInterview() { 
        return new ResponseEntity<>(interviewService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")  
    public ResponseEntity<Interview> getInterview(@PathVariable Long id) {
        Interview interview = interviewsService.findById(id);
        if ( interview == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(interview, HttpStatus.OK);
    }

    @PostMapping("/newInterview")  
    public ResponseEntity<Interview> create(@RequestBody Interview interview) {
        return new ResponseEntity<>(interviewService.create(interview), HttpStatus.CREATED);
    }
    
    @PutMapping("/updateInterview/{id}")  
    public ResponseEntity<Interview> update(@PathVariable Long id, @RequestBody Interview interview) {
        return new ResponseEntity<>(interviewService.update(id, interview), HttpStatus.OK);
    }

    @DeleteMapping("/deleteInterview/{id}")  
    public ResponseEntity<Boolean> delete(@PathVariable Long id) {
        return new ResponseEntity<>(interviewService.deleteById(id), HttpStatus.OK);
    }

    @PostMapping("/interviews")
    public ResponseEntity<Interview> createInterview(@RequestBody Interview interview) {
        Interview savedInterview = interviewService.create(interview);
        return new ResponseEntity<>(savedInterview, HttpStatus.CREATED);
    }

}
