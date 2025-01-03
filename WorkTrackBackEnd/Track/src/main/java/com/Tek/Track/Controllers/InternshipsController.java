package com.Tek.Track.Controllers;

import java.util.List;
import com.Tek.Track.Models.User;
import com.Tek.Track.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import com.Tek.Track.Models.Internships;
import com.Tek.Track.Services.InternshipsService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/internships")
public class InternshipsController {

    @Autowired //Inject Service dependency
    private InternshipsService internshipService;

    @Autowired
    UserService userService;

    public InternshipsController(InternshipsService internshipService, UserService userService) {
        this.internshipService = internshipService;
        this.userService = userService;
    }

    @GetMapping("/authintern")
    public ResponseEntity<List<Internships>> getJobsForAuthenticatedUser() throws Exception {
        // Get the currently authenticated user
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = userDetails.getUsername();

        // Fetch the user by username to get the userId
        User user = userService.findByUserName(username);
        Long userId = user.getUserId();

        // Fetch and return jobs for the authenticated user
        return new ResponseEntity<>(internshipService.findJobsByUserId(userId), HttpStatus.OK);
    }

    @GetMapping("/internship")
    public ResponseEntity<List<Internships>> getAllInternship() { 
        return new ResponseEntity<>(internshipService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/internship/{id}")
    public ResponseEntity<Internships> getInternship(@PathVariable Long id) {
        Internships internship = internshipService.findById(id);
        if ( internship == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(internship, HttpStatus.OK);
    }

    @PostMapping("/newInternship")  
    public ResponseEntity<Internships> create(@RequestBody Internships internship) {
        return new ResponseEntity<>(internshipService.create(internship), HttpStatus.CREATED);
    }
    
    @PutMapping("/updateInternship/{id}")  
    public ResponseEntity<Internships> update(@PathVariable Long id, @RequestBody Internships internship) {
        return new ResponseEntity<>(internshipService.update(id, internship), HttpStatus.OK);
    }

    @DeleteMapping("/deleteInternship/{id}")  
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        boolean deleted = internshipService.deleteById(id);
        if(deleted){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
