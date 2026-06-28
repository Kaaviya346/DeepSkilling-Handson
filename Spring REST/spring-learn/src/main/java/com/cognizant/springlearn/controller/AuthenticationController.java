package com.cognizant.springlearn.controller;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.model.AuthenticationResponse;
import com.cognizant.springlearn.util.JwtUtil;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class AuthenticationController {

	@GetMapping("/authenticate")
	public AuthenticationResponse authenticate(HttpServletRequest request) {

	    String authorizationHeader = request.getHeader("Authorization");

	    // STEP 1: Validate header exists
	    if (authorizationHeader == null || !authorizationHeader.startsWith("Basic ")) {
	        throw new RuntimeException("Invalid Authorization Header");
	    }

	    // STEP 2: Extract Base64 part
	    String base64Credentials = authorizationHeader.substring("Basic ".length());

	    // STEP 3: Decode
	    byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);

	    String credentials = new String(decodedBytes, StandardCharsets.UTF_8);

	    // STEP 4: Split username & password
	    String[] values = credentials.split(":");

	    String username = values[0];

	    // STEP 5: Generate JWT
	    String token = JwtUtil.generateToken(username);

	    return new AuthenticationResponse(token);
	}
}
