package com.capstone.backend.services;

import com.capstone.backend.models.User;
import com.capstone.backend.repositories.UserRepository;

import com.google.firebase.database.DatabaseReference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;



@Service
public class FirebaseService {

    private final UserRepository userRepository;
    private final DatabaseReference databaseReference;

    @Autowired
    public FirebaseService(UserRepository userRepository, DatabaseReference databaseReference) {
        this.userRepository = userRepository;
        this.databaseReference = databaseReference;
    }

    public void insertUserDataToFirebase(User user) {
        DatabaseReference userRef = databaseReference.child("users").child(user.getId().toString());

        Map<String, Object> userData = new HashMap<>();
        userData.put("userName", user.getUserName());
        userData.put("parentEmail", user.getParentEmail());
        userData.put("points", user.getPoints());
        userData.put("level", user.getLevel().toString());
        userData.put("balance", user.getBalance());

        userRef.setValue(userData,  (error, ref) -> {
            if (error == null) {
                System.out.println("Data saved successfully.");
            } else {
                System.out.println("Failed to save data: " + error.getMessage());
            }
        });
    }
}

