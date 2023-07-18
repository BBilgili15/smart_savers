package com.capstone.backend.controllers;

import com.capstone.backend.models.Level;
import com.capstone.backend.models.User;
import com.capstone.backend.repositories.UserRepository;
import com.capstone.backend.services.FirebaseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;

    @Autowired
    private FirebaseService firebaseService;

    @GetMapping(value = "/users")
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @GetMapping(value = "/users/{firebaseUserId}")
    public Optional<User> getUser(@PathVariable String firebaseUserId){
        logger.info("Firebase userID: {}", firebaseUserId);
        return userRepository.findByFirebaseUserId(firebaseUserId);
    }


    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    @PostMapping(value = "/users")
    public ResponseEntity<User> postUser(@RequestBody User user) {
        try {
            logger.info("Received Payload: {}", user.toString());
            String firebaseUserId = user.getFirebaseUserId();
            user.setFirebaseUserId(firebaseUserId);
            user.setPoints(0);
            user.setBalance(0.00);
            user.setLevel(Level.ONE);
            user.setEmail(user.getEmail());
            user.setDisplayName(user.getDisplayName());
            user.setFavouriteAnimal(user.getFavouriteAnimal());
            User savedUser = userRepository.save(user);

            return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PutMapping(value = "/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        Optional<User> optionalUser = userRepository.findById(id);

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setDisplayName(updatedUser.getDisplayName());
            user.setBalance(updatedUser.getBalance());
            user.setLevel(updatedUser.getLevel());
            user.setPoints(updatedUser.getPoints());

            userRepository.save(user);

            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
