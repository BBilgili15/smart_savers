package com.capstone.backend.controllers;

import com.capstone.backend.models.Goal;
import com.capstone.backend.models.Transaction;
import com.capstone.backend.models.User;
import com.capstone.backend.repositories.GoalRepository;
import com.capstone.backend.repositories.TransactionRepository;
import com.capstone.backend.repositories.UserRepository;
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

    @GetMapping(value="/goals")
    public List<Goal> getAllGoals(){
        return goalRepository.findAll();
    }

    @GetMapping(value="/goals/{id}")
    public Optional<Goal> getGoalById(@PathVariable Long id){
        return goalRepository.findById(id);
    }

    @PostMapping(value = "/goals")
    public ResponseEntity<Goal> postGoal(@RequestBody Goal goal){
        goalRepository.save(goal);
        return new ResponseEntity<>(goal, HttpStatus.CREATED);
    }

    @PutMapping(value = "/goals/{id}")
    public ResponseEntity<Goal> updateGoal(@PathVariable Long id, @RequestBody Goal updatedGoal) {
        Optional<Goal> optionalGoal = goalRepository.findById(id);

        if (optionalGoal.isPresent()) {
            Goal goal = optionalGoal.get();
            goal.setAmountSaved(updatedGoal.getAmountSaved());
            goal.setTargetAmount(updatedGoal.getTargetAmount());
            goal.setGoalName(updatedGoal.getGoalName());

            goalRepository.save(goal);

            return new ResponseEntity<>(goal, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @DeleteMapping(value = "/goals/{id}")
    public String deleteGoal(@PathVariable Long id){
        goalRepository.deleteById(id);
        return String.format("Goal with ID %s was deleted", id);
    }



}
