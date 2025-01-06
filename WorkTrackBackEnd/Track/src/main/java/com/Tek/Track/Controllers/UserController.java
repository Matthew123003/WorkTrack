package com.Tek.Track.Controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import com.Tek.Track.Models.User;
import com.Tek.Track.Services.UserService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;


    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/authuser")
    public ResponseEntity<User> getAuthenticatedUser() throws Exception {
        // Get the currently authenticated user
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = userDetails.getUsername();

        // Fetch and return the user's details
        return new ResponseEntity<>(userService.findByUserName(username), HttpStatus.OK);
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return new ResponseEntity<>(userService.findById(id), HttpStatus.OK);
    }

    @GetMapping("/user/{username}")
    public ResponseEntity<User> getUserByUserName(@PathVariable String username) throws Exception {
        return new ResponseEntity<>(userService.findByUserName(username), HttpStatus.OK);
    }

    @PostMapping("/newuser")
    public ResponseEntity<User> create(@RequestBody User user) {
        return new ResponseEntity<>(userService.create(user), HttpStatus.CREATED);
    }
    
    @PutMapping("/update_user/{id}")
    public ResponseEntity<User> update(@PathVariable Long id, @RequestBody User user) {
        return new ResponseEntity<>(userService.update(id, user), HttpStatus.OK);
    }

    @DeleteMapping("/delete_user/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable Long id) {
        return new ResponseEntity<>(userService.deleteById(id), HttpStatus.OK);
    }

    @DeleteMapping("/delete_user_2/{userName}")
    public ResponseEntity<Boolean> deleteByUserName(@PathVariable String userName) {
        return new ResponseEntity<>(userService.deleteByUserName(userName), HttpStatus.OK);
    }

    @PatchMapping("/update_user/{id}")
    public ResponseEntity<User> partialUpdateUser(@PathVariable Long id, @RequestBody Map<String, Object> updates) {
    try {
        // Call the service method to apply partial updates
        User updatedUser = userService.partialUpdate(id, updates);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    } catch (Exception e) {
        // Handle potential exceptions (e.g., user not found, invalid updates)
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
}
