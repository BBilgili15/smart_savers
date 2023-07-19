package com.capstone.backend.controllers;

import com.capstone.backend.models.Goal;
import com.capstone.backend.models.Transaction;
import com.capstone.backend.models.User;
import com.capstone.backend.repositories.GoalRepository;
import com.capstone.backend.repositories.TransactionRepository;
import com.capstone.backend.repositories.UserRepository;
import com.capstone.backend.services.GoalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class GoalController {
    @Autowired
    GoalRepository goalRepository;
    @Autowired
    UserRepository userRepository;

    @GetMapping(value="/goals/{id}")
    public Optional<Goal> getGoalById(@PathVariable Long id){
        return goalRepository.findById(id);
    }

    @GetMapping(value="/goals")
    public ResponseEntity<List<Goal>> getAllGoals(@RequestParam(name = "byUserId", required = false) Long userId){
        if (userId != null) {
            Optional<User> user = userRepository.findById(userId);
            System.out.println(user);
            if (user.isPresent()) {
                List<Goal> goals = goalRepository.findByUser(user.get());
                return new ResponseEntity<>(goals, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } else {
            List<Goal> goals = goalRepository.findAll();
            return new ResponseEntity<>(goals, HttpStatus.OK);
        }
    }





    @PostMapping(value = "/goals")
    public ResponseEntity<Goal> postGoal(@RequestBody Goal goal) {
        // Assuming you have the user ID available
        User user = userRepository.findById(goal.getUser().getId()).orElse(null); // Fetch the user from the repository

        if (user != null) {
            goal.setUser(user); // Set the user object on the goal

            // Call the service method to save the goal and update user goals
            GoalService.saveGoalAndUpdateUserGoals(goal, goalRepository, userRepository);

            return new ResponseEntity<>(goal, HttpStatus.CREATED);
        } else {
            // Handle the case when the user is not found
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PatchMapping(value = "/goals/{id}")
    public ResponseEntity<Goal> updateGoalAmountSaved(@PathVariable Long id, @RequestBody Goal updatedGoal) {
        Optional<Goal> optionalGoal = goalRepository.findById(id);

        if (optionalGoal.isPresent()) {
            Goal goal = optionalGoal.get();

            if (updatedGoal.getAmountSaved() != null) {
                double currentAmountSaved = goal.getAmountSaved();
                double updatedAmountSaved = updatedGoal.getAmountSaved();
                double newAmountSaved = currentAmountSaved + updatedAmountSaved;
                goal.setAmountSaved(newAmountSaved);
            }

            Goal savedGoal = goalRepository.save(goal);

            return ResponseEntity.ok(savedGoal);
        } else {
            return ResponseEntity.notFound().build();
        }
    }



    @PutMapping(value = "/goals/{id}")
    public ResponseEntity<Goal> updateGoal(@PathVariable Long id, @RequestBody Goal updatedGoal) {
        Optional<Goal> optionalGoal = goalRepository.findById(id);

        if (optionalGoal.isPresent()) {
            Goal goal = optionalGoal.get();

            if (updatedGoal.getAmountSaved() != null) {
                goal.setAmountSaved(updatedGoal.getAmountSaved());
            }
            if (updatedGoal.getTargetAmount() != null) {
                goal.setTargetAmount(updatedGoal.getTargetAmount());
            }
            if (updatedGoal.getGoalName() != null) {
                goal.setGoalName(updatedGoal.getGoalName());
            }

            Goal savedGoal = goalRepository.save(goal);

            return ResponseEntity.ok(savedGoal);
        } else {
            return ResponseEntity.notFound().build();
        }
    }





    @DeleteMapping(value = "/goals/{id}")
    public String deleteGoal(@PathVariable Long id){
        goalRepository.deleteById(id);
        return String.format("Goal with ID %s was deleted", id);
    }



}
