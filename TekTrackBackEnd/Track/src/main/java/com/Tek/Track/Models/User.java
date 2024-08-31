package com.Tek.Track.Models;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import jakarta.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


@Entity
@Table(name = "User")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;

    @Column(name = "first_name", length = 50, nullable = false)
    private String firstName;

    @Column(name = "last_name", length = 50, nullable = false)
    private String lastName;

    @Column(length = 254, unique = true, nullable = false)
    private String email;

    @Column(length = 50, unique = true, nullable = false)
    private String userName;

    @JsonIgnore // Prevents the `password` field from being serialized in JSON responses.
    @Column(name = "password_hash", length = 60, nullable = false)
    private String password;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<JobInfo> jobInfo;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Internship> internshipList;

    public User() {} // Default constructor, required by JPA.

    public User(String userName) { // Created only for basic Mockito test
        this.userName = userName;
    }

    public User(String firstName, String lastName, String email, String userName, String password) { // Constructor created for testing with Mockito
        this.firstName = firstName; // Sets the user's first name.
        this.lastName = lastName; // Sets the user's last name.
        this.email = email; // Sets the user's email address.
        this.userName = userName; // Sets the user's username.
        this.password = password; // Sets the user's password.
    }

    public User(long userId, String firstName, String lastName, String email, String userName, String password) { // Constructor to initialize a User object with `userId`.
        this.userId = userId; // Sets the user's ID.
        this.firstName = firstName; // Sets the user's first name.
        this.lastName = lastName; // Sets the user's last name.
        this.email = email; // Sets the user's email address.
        this.userName = userName; // Sets the user's username.
        this.password = password; // Sets the user's password.

    }

    public long getUserId() { // Getter method for `userId`.
        return userId; // Returns the user's ID.
    }

    public void setUserId(long userId) { // Setter method for `userId`.
        this.userId = userId; // Sets the user's ID.
    }

    public String getFirstName() { // Getter method for `fName`.
        return firstName; // Returns the user's first name.
    }

    public void setFirstName(String firstName) { // Setter method for `fName`.
        this.firstName = firstName; // Sets the user's first name.
    }

    public String getLastName() { // Getter method for `lName`.
        return lastName; // Returns the user's last name.
    }

    public void setLastName(String lastName) { // Setter method for `lName`.
        this.lastName = lastName; // Sets the user's last name.
    }

    public String getEmail() { // Getter method for `email`.
        return email; // Returns the user's email address.
    }

    public void setEmail(String email) { // Setter method for `email`.
        this.email = email; // Sets the user's email address.
    }

    @Override
    public String getUsername() {
        return userName; // Delegate to the existing method
    }

    public void setUsername(String userName) {
        this.userName = userName; // Existing setter
    }

    @Override
    public String getPassword() {
        return password; // The existing method already matches
    }

    public void setPassword(String password) {
        this.password = password; // Existing setter
    }
    public List<JobInfo> getJobInfo() { // Getter method to retrieve job information.
        return jobInfo; // Returns the user's job information.
    }

    public void setJobInfo(List<JobInfo> jobInfo) { // Setter method for job information.
        this.jobInfo = jobInfo; // Sets the user's job information.
    }

    public List<Internship> getInternshipList() {
        return internshipList;
    }

    public void setInternshipList(List<Internship> internshipList) {
        this.internshipList = internshipList;
    }

    @Override
    public boolean equals(Object o) { // Overridden method to compare User objects for equality.
        if (this == o) return true; // Checks if the compared object is the same as this object.
        if (o == null || getClass() != o.getClass()) return false; // Checks if the compared object is null or of a different class.
        User user = (User) o; // Casts the object to User.
        return userId == user.userId && // Compares the `userId` fields.
                Objects.equals(firstName, user.firstName) && // Compares the `fName` fields.
                Objects.equals(lastName, user.lastName) && // Compares the `lName` fields.
                Objects.equals(userName, user.userName) && // Compares the `userName` fields.
                Objects.equals(password, user.password); // Compares the `password` fields.
    }

    @Override
    public int hashCode() { // Overridden method to generate a hash code for the User object.
        return Objects.hash(userId, firstName, lastName, userName, password); // Returns a hash code based on the `userId`, `fName`, `lName`, `userName`, and `password`.
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // Assuming every user has a "ROLE_USER". Adjust this according to your needs.
        return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;  // Adjust this logic if needed.
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;  // Adjust this logic if needed.
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;  // Adjust this logic if needed.
    }

    @Override
    public boolean isEnabled() {
        return true;  // Adjust this logic if needed.
    }
}
