package com.Tek.Track.Controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import com.Tek.Track.Models.Interviews;
import com.Tek.Track.Services.InterviewsService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/interview")
public class InterviewsController {

    @Autowired //Inject 'UserService' dependency
    private InterviewsService interviewsService;

    public InterviewsController(InterviewsService interviewsService) {
        this.interviewsService = interviewsService;
    }

    @GetMapping("/allInterview")  
    public ResponseEntity<List<Interviews>> getAllInterview() { 
        return new ResponseEntity<>(interviewsService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")  
    public ResponseEntity<Interviews> getInterview(@PathVariable Long id) {
        Interviews interview = interviewsService.findById(id);
        if ( interview == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(interview, HttpStatus.OK);
    }

    @PostMapping("/newInterview")  
    public ResponseEntity<Interviews> create(@RequestBody Interviews interview) {
        return new ResponseEntity<>(interviewsService.create(interview), HttpStatus.CREATED);
    }
    
    @PutMapping("/updateInterview/{id}")  
    public ResponseEntity<Interviews> update(@PathVariable Long id, @RequestBody Interviews interview) {
        return new ResponseEntity<>(interviewsService.update(id, interview), HttpStatus.OK);
    }

    @DeleteMapping("/deleteInterview/{id}")  
    public ResponseEntity<Boolean> delete(@PathVariable Long id) {
        return new ResponseEntity<>(interviewsService.deleteById(id), HttpStatus.OK);
    }

    @PostMapping("/interviews")
    public ResponseEntity<Interviews> createInterview(@RequestBody Interviews interview) {
        Interviews savedInterview = interviewsService.create(interview);
        return new ResponseEntity<>(savedInterview, HttpStatus.CREATED);
    }

    @PatchMapping("/patchinterview/{id}")
    public ResponseEntity<Interviews> updateInterview(
            @PathVariable Long id,
            @RequestBody Map<String, Object> updates) {
        try {
            Interviews updatedInterview = interviewsService.updateInterview(id, updates);
            return ResponseEntity.ok(updatedInterview);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

}
