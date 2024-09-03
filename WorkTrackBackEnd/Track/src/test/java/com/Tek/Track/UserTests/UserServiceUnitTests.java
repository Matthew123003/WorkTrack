package com.Tek.Track.UserTests;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import com.Tek.Track.TrackApplication;
import com.Tek.Track.Models.User;
import com.Tek.Track.Repositories.UserRepository;
import com.Tek.Track.Services.UserService;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;

@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = TrackApplication.class)
public class UserServiceUnitTests {

    @MockBean // Mock the UserRepository to isolate service layer tests
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Test // Test findByUsername
    public void whenUserNameIsProvided_thenRetrievedUserNameIsCorrect() throws Exception {
        String mockUserName = "Username";

        User mockUser = new User();
        mockUser.setUsername(mockUserName);

        Mockito.when(userRepository.findByUserName(mockUserName)).thenReturn(mockUser);

        String testName = userService.findByUserName(mockUserName).getUsername();

        Assert.assertEquals(mockUserName, testName);
    }


    @Test // Test findById
    public void whenUserIdIsProvided_thenRetrievedUserIsCorrect() {
        Long mockId = 2L;
        String mockFirstName = "FirstName";
        String mockLastName = "LastName";
        String mockEmail = "Email@email.email";
        String mockUserName = "Username";
        String mockPassword = "Qq!1";

        User mockUser = new User(mockFirstName, mockLastName, mockEmail, mockUserName, mockPassword);
        mockUser.setUserId(mockId);

        Mockito.when(userRepository.findById(mockId)).thenReturn(Optional.of(mockUser));

        User retrievedUser = userService.findById(mockId);

        Assert.assertNotNull(retrievedUser);
        Assert.assertEquals(mockFirstName, retrievedUser.getFirstName());
        Assert.assertEquals(mockLastName, retrievedUser.getLastName());
        Assert.assertEquals(mockEmail, retrievedUser.getEmail());
        Assert.assertEquals(mockUserName, retrievedUser.getUsername());
        Assert.assertEquals(mockPassword, retrievedUser.getPassword());
    }

    @Test // Test create method in User Service
    public void whenNewUserIsProvided_thenNewUserIsCreated() {
        User mockUser = new User("first", "last", "email@email.com", "username", "password");

        Mockito.when(userRepository.save(mockUser)).thenReturn(mockUser);

        User createdUser = userService.create(mockUser);

        Assert.assertNotNull(createdUser);
        Assert.assertEquals(mockUser.getUsername(), createdUser.getUsername());
    }

    @Test // Test Update method in User Service
    public void whenUserIsUpdated_thenUserDetailsAreUpdated() {
        Long mockId = 2L;
        User existingUser = new User("OldFirstName", "OldLastName", "old.email@email.email", "OldUsername", "OldPassword");
        existingUser.setUserId(mockId);

        User updatedUser = new User("NewFirstName", "NewLastName", "new.email@email.email", "NewUsername", "NewPassword");
        updatedUser.setUserId(mockId);

        Mockito.when(userRepository.findById(mockId)).thenReturn(Optional.of(existingUser));
        Mockito.when(userRepository.save(updatedUser)).thenReturn(updatedUser);

        User result = userService.update(mockId, updatedUser);

        Assert.assertNotNull(result);
        Assert.assertEquals(updatedUser.getFirstName(), result.getFirstName());
        Assert.assertEquals(updatedUser.getLastName(), result.getLastName());
        Assert.assertEquals(updatedUser.getEmail(), result.getEmail());
        Assert.assertEquals(updatedUser.getUsername(), result.getUsername());
        Assert.assertEquals(updatedUser.getPassword(), result.getPassword());
    }

    @Test // Test deleteById method in User Service
    public void whenUserIsDeletedById_thenReturnTrue() {
        Long mockId = 2L;

        Mockito.when(userRepository.existsById(mockId)).thenReturn(true);
        Mockito.doNothing().when(userRepository).deleteById(mockId);

        boolean isDeleted = userService.deleteById(mockId);

        Assert.assertTrue(isDeleted);
    }

    @Test // Test deleteByUsername method in User Service
    public void whenUserIsDeletedByUsername_thenReturnTrue() {
        String mockUserName = "Username";

        Mockito.when(userRepository.findByUserName(mockUserName)).thenReturn(new User());
        Mockito.doNothing().when(userRepository).findByUserName(mockUserName);

        boolean isDeleted = userService.deleteByUserName(mockUserName);

        Assert.assertTrue(isDeleted);
    }

    @Test // Test findAll method in User Service
    public void whenFindAllUsers_thenReturnUserList() {
        List<User> mockUsers = new ArrayList<>();
        mockUsers.add(new User("FirstName1", "LastName1", "email1@example.com", "user1", "password1"));
        mockUsers.add(new User("FirstName2", "LastName2", "email2@example.com", "user2", "password2"));

        Mockito.when(userRepository.findAll()).thenReturn(mockUsers);

        List<User> result = userService.findAll();

        Assert.assertNotNull(result);
        Assert.assertEquals(2, result.size());
    }

    @Test // Test optional user return in service
    public void whenUserIdDoesNotExist_thenReturnNull() {
        Long mockId = 99L;

        Mockito.when(userRepository.findById(mockId)).thenReturn(Optional.empty());

        User result = userService.findById(mockId);

        Assert.assertNull(result);
    }

    @Test // test optional username return in service
    public void whenUserNameDoesNotExist_thenReturnNull() throws Exception {
        String mockUserName = "NonExistentUser";

        Mockito.when(userRepository.findByUserName(mockUserName)).thenReturn(null);

        User result = userService.findByUserName(mockUserName);

        Assert.assertNull(result);
    }

}
