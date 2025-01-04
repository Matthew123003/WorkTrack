package com.Tek.Track.Authentication;

// Importing necessary dependencies and classes
import com.Tek.Track.Services.UserService; // Custom service for user management (currently commented out).
import org.springframework.context.annotation.Bean; // Annotation to define beans for the Spring context.
import org.springframework.context.annotation.Configuration; // Marks this class as a configuration class.
import org.springframework.security.authentication.AuthenticationManager; // Core interface for authentication.
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration; // Provides authentication configuration.
import org.springframework.security.config.annotation.web.builders.HttpSecurity; // Configures web-based security for specific HTTP requests.
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity; // Enables Spring Security's web security support.
import org.springframework.security.config.http.SessionCreationPolicy; // Configures session management.
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder; // Provides password hashing using the BCrypt algorithm.
import org.springframework.security.crypto.password.PasswordEncoder; // Interface for encoding passwords.
import org.springframework.security.web.SecurityFilterChain; // Defines the filter chain for Spring Security.
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter; // Filters user authentication via username and password.
import org.springframework.web.cors.CorsConfiguration; // Manages CORS (Cross-Origin Resource Sharing) configuration.
import org.springframework.web.cors.CorsConfigurationSource; // Defines the source for CORS configuration.
import org.springframework.web.cors.UrlBasedCorsConfigurationSource; // Maps URLs to CORS configurations.

@Configuration // Indicates this is a configuration class for Spring.
@EnableWebSecurity // Enables Spring Security and activates web security.
public class SecurityConfig {

    // Dependency injection for JWT Authentication Filter
    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    // Constructor to inject JwtAuthenticationFilter dependency
    public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter; // Initializes the JWT filter for the security chain.
    }

    // Bean to configure the AuthenticationManager
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager(); // Provides a pre-configured AuthenticationManager.
    }
    // Explanation:
    // - The `AuthenticationManager` is used to authenticate users by delegating to the configured `AuthenticationProvider`.

    // Bean to configure password encoding with BCrypt
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // Returns an instance of BCryptPasswordEncoder.
    }
    // Explanation:
    // - `PasswordEncoder` is used to securely hash passwords.
    // - `BCryptPasswordEncoder` automatically handles salting to prevent common password attacks like rainbow tables.

    // Bean to configure the security filter chain
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable()) // Disables CSRF protection (useful for stateless REST APIs).
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/**").permitAll() // Allows unrestricted access to authentication endpoints.
                        .anyRequest().authenticated() // Requires authentication for all other requests.
                )
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) 
                // Configures the session policy as stateless, meaning no session data will be stored server-side.
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class); 
                // Adds the JWT filter before the username/password filter in the chain.

        return http.build(); // Builds the security filter chain and applies the configuration.
    }
    // Extended Notes:
    // - Stateless session management ensures each request is independently authenticated.
    // - The `jwtAuthenticationFilter` intercepts requests to verify JWT tokens before the standard authentication process.

    // Bean to configure CORS settings
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration(); // Create a new CORS configuration object.
        configuration.setAllowCredentials(true); // Allows sending cookies and credentials across origins.
        configuration.addAllowedOriginPattern("*"); // Permits all origins (replace "*" with specific origins in production for security).
        configuration.addAllowedHeader("*"); // Allows all headers to be included in CORS requests.
        configuration.addAllowedMethod("*"); // Allows all HTTP methods (GET, POST, PUT, DELETE, etc.).
        // Explanation:
        // - These settings are permissive for development but should be more restrictive in production.

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource(); // Maps CORS settings to URL patterns.
        source.registerCorsConfiguration("/**", configuration); // Applies the CORS configuration to all endpoints.
        return source; // Returns the CORS configuration source.
    }
    // Extended Notes:
    // - This configuration ensures cross-origin requests are allowed, which is necessary for modern frontend-backend setups.
    // - Fine-tune allowed origins, headers, and methods in production for improved security.
}
