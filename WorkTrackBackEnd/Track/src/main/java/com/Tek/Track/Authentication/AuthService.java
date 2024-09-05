package com.Tek.Track.Authentication;

import com.Tek.Track.Models.User;
import com.Tek.Track.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtTokenService jwtTokenService;

    public String authenticateUser(String username, String password) {
        // Authenticate user
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Load user details and generate the JWT token
        final UserDetails userDetails = userService.loadUserByUsername(username);
        return jwtTokenService.generateToken(userDetails);
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        return jwtTokenService.validateToken(token, userDetails);
    }

    public String getUsernameFromToken(String token) {
        return jwtTokenService.getUsernameFromToken(token);
    }
}
