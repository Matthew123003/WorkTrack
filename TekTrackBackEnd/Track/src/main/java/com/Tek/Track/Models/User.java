package com.Tek.Track.Models;

import java.util.List;
import java.util.Objects;
import jakarta.persistence.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity // Marks this class as a JPA entity that will be mapped to a database table.
@Table(name = "User") // Specifies the name of the table in the database as "User".
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE) // Enables caching for this entity with a read-write strategy.
public class User {

    @Id // Specifies that the `userId` field is the primary key of the entity.
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Indicates that the primary key should be auto-generated by the database (identity column).
    private long userId; // Defines the `userId` field, which is a unique identifier for the user.

    @Column(name = "first_name", length = 50, nullable = false) // Maps the `fName` field to the "first_name" column in the database, with a maximum length of 50 characters.
    private String firstName; // Defines the `fName` field to store the user's first name.

    @Column(name = "last_name", length = 50, nullable = false) // Maps the `lName` field to the "last_name" column in the database, with a maximum length of 50 characters.
    private String lastName; // Defines the `lName` field to store the user's last name.

    @Column(length = 254, unique = true, nullable = false) // Maps the `email` field to a column in the database with a maximum length of 254 characters and ensures uniqueness.
    private String email; // Defines the `email` field to store the user's email address.

    @Column(length = 50, unique = true, nullable = false) // Maps the `userName` field to a column in the database, ensuring it is unique, not null, and with a max length of 50 characters.
    private String userName; // Defines the `userName` field to store the user's username.

    @JsonIgnore // Prevents the `password` field from being serialized in JSON responses.
    @Column(name = "password_hash", length = 60, nullable = false) // Maps the `password` field to the "password_hash" column in the database, with a max length of 60 characters and not null.
    private String password; // Defines the `password` field to store the user's password.

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<JobInfo> jobInfo;

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

//    public User(String firstName, String lastName, String email, String userName, String password, JobInfo jobInfo) { // Constructor to initialize a User object without `userId`.
//        this.firstName = firstName; // Sets the user's first name.
//        this.lastName = lastName; // Sets the user's last name.
//        this.email = email; // Sets the user's email address.
//        this.userName = userName; // Sets the user's username.
//        this.password = password; // Sets the user's password.
//        this.jobInfo = jobInfo;
//
//    }

//    public User(long userId, String firstName, String lastName, String email, String userName, String password, JobInfo jobInfo) {
//        this.userId = userId; // Sets the user's ID.
//        this.firstName = firstName; // Sets the user's first name.
//        this.lastName = lastName; // Sets the user's last name.
//        this.email = email; // Sets the user's email address.
//        this.userName = userName; // Sets the user's username.
//        this.password = password; // Sets the user's password.
//        this.jobInfo = jobInfo;
//    }

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

    public String getfirstName() { // Getter method for `fName`.
        return firstName; // Returns the user's first name.
    }

    public void setfirstName(String firstName) { // Setter method for `fName`.
        this.firstName = firstName; // Sets the user's first name.
    }

    public String getlastName() { // Getter method for `lName`.
        return lastName; // Returns the user's last name.
    }

    public void setlastName(String lastName) { // Setter method for `lName`.
        this.lastName = lastName; // Sets the user's last name.
    }

    public String getEmail() { // Getter method for `email`.
        return email; // Returns the user's email address.
    }

    public void setEmail(String email) { // Setter method for `email`.
        this.email = email; // Sets the user's email address.
    }

    public String getUserName() { // Getter method for `userName`.
        return userName; // Returns the user's username.
    }

    public void setUserName(String userName) { // Setter method for `userName`.
        this.userName = userName; // Sets the user's username.
    }

    public String getPassword() { // Getter method for `password`.
        return password; // Returns the user's password.
    }

    public void setPassword(String password) { // Setter method for `password`.
        this.password = password; // Sets the user's password.
    }

//    public List<JobInfo> getJobInfo() { // Getter method to retrieve job information.
//        return jobInfo; // Returns the user's job information.
//    }
//
//    public void setJobInfo(List<JobInfo> jobInfo) { // Setter method for job information.
//        this.jobInfo = jobInfo; // Sets the user's job information.
//    }

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
}
