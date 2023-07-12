package com.capstone.backend.repositories;

import com.capstone.backend.models.Goal;
import com.capstone.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GoalRepository extends JpaRepository<Goal, Long> {

    default void updateSavingGoalBalance(double amount, Goal goal){
        User user = goal.getUser();
        double newBalance = user.getBalance() - amount;
        user.setBalance(newBalance);
        double newGoalAmountSaved = goal.getAmountSaved()+amount;
        goal.setAmountSaved(newGoalAmountSaved);
    }
}
