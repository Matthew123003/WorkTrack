package com.Tek.Track;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@SpringBootApplication
public class TrackApplication {

	public static void main(String[] args) {
		SpringApplication.run(TrackApplication.class, args);
	}
	// JWTAuth WORKING AND RUNNING, ADDED AUTH SERVICE FOR REDUNDANCY AND CODE SIMPLICITY
	// EVERYTHING STILL WORKING, NEED TO TEST WITH POSTMAN
}
