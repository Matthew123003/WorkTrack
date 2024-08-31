package com.Tek.Track.UserTests;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import com.Tek.Track.Models.User;
import com.Tek.Track.Services.UserService;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.test.context.ActiveProfiles;

import com.Tek.Track.Controllers.UserController;

@WebMvcTest(controllers = UserController.class)
@ActiveProfiles("test")
public class UserControllerTests {

    @Mock
    private UserService userService;

    @Mock
    private SecurityContextHolder securityContextHolder;

    @Mock
    private UserDetails userDetails;

    @InjectMocks
    private UserController userController;

    private User user1;
    private User user2;

    @Before
    public void setUp() {
        MockitoAnnotations.openMocks(this);

        user1 = new User();
        user1.setUserId(1L);
        user1.setUsername("john_doe");

        user2 = new User();
        user2.setUserId(2L);
        user2.setUsername("jane_doe");

        when(SecurityContextHolder.getContext().getAuthentication().getPrincipal()).thenReturn(userDetails);
        when(userDetails.getUsername()).thenReturn("john_doe");
    }

    @Test
    public void testGetAuthenticatedUser() throws Exception {
        when(userService.findByUserName("john_doe")).thenReturn(user1);

        ResponseEntity<User> response = userController.getAuthenticatedUser();

        Assert.assertEquals(HttpStatus.OK, response.getStatusCode());
        Assert.assertEquals(user1, response.getBody());
        verify(userService, times(1)).findByUserName("john_doe");
    }

    @Test
    public void testGetAllUsers() {
        List<User> users = new ArrayList<>();
        users.add(user1);
        users.add(user2);
        when(userService.findAll()).thenReturn(users);

        ResponseEntity<List<User>> response = userController.getAllUsers();

        Assert.assertEquals(HttpStatus.OK, response.getStatusCode());
        Assert.assertEquals(2, response.getBody().size());
        verify(userService, times(1)).findAll();
    }

    @Test
    public void testGetUserById() {
        when(userService.findById(1L)).thenReturn(user1);

        ResponseEntity<User> response = userController.getUserById(1L);

        Assert.assertEquals(HttpStatus.OK, response.getStatusCode());
        Assert.assertEquals(user1, response.getBody());
        verify(userService, times(1)).findById(1L);
    }

    @Test
    public void testGetUserByUserName() throws Exception {
        when(userService.findByUserName("john_doe")).thenReturn(user1);

        ResponseEntity<User> response = userController.getUserByUserName("john_doe");

        Assert.assertEquals(HttpStatus.OK, response.getStatusCode());
        Assert.assertEquals(user1, response.getBody());
        verify(userService, times(1)).findByUserName("john_doe");
    }

    @Test
    public void testCreateUser() {
        when(userService.create(any(User.class))).thenReturn(user1);

        ResponseEntity<User> response = userController.create(user1);

        Assert.assertEquals(HttpStatus.CREATED, response.getStatusCode());
        Assert.assertEquals(user1, response.getBody());
        verify(userService, times(1)).create(user1);
    }

    @Test
    public void testUpdateUser() {
        when(userService.update(eq(1L), any(User.class))).thenReturn(user1);

        ResponseEntity<User> response = userController.update(1L, user1);

        Assert.assertEquals(HttpStatus.OK, response.getStatusCode());
        Assert.assertEquals(user1, response.getBody());
        verify(userService, times(1)).update(1L, user1);
    }

    @Test
    public void testDeleteUserById() {
        when(userService.deleteById(1L)).thenReturn(true);

        ResponseEntity<Boolean> response = userController.delete(1L);

        Assert.assertEquals(HttpStatus.OK, response.getStatusCode());
        Assert.assertEquals(true, response.getBody());
        verify(userService, times(1)).deleteById(1L);
    }

    @Test
    public void testDeleteUserByUserName() {
        when(userService.deleteByUserName("john_doe")).thenReturn(true);

        ResponseEntity<Boolean> response = userController.deleteByUserName("john_doe");

        Assert.assertEquals(HttpStatus.OK, response.getStatusCode());
        Assert.assertEquals(true, response.getBody());
        verify(userService, times(1)).deleteByUserName("john_doe");
    }

    // TEST COVERAGE 100%
}
