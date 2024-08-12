package Models;

import org.springframework.data.annotation.Id;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;

    private String fName;

    private String lName;

    private String userName;

    private String password;

    public User(){}

    public User(String fName, String lName, String userName, String password){

        this.fName = fName;
        this.lName = lName;
        this.userName = userName;
        this.password = password;
    }

    public User (long userId, String fName, String lName, String userName, String password){
        this.userId = userId;
        this.fName = fName;
        this.lName = lName;
        this.userName = userName;
        this.password = password;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
