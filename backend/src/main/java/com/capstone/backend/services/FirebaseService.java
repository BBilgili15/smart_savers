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

}

