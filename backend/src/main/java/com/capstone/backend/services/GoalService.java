package com.capstone.backend.services;

import com.capstone.backend.models.Goal;
import com.capstone.backend.models.Transaction;
import com.capstone.backend.models.User;
import com.capstone.backend.repositories.GoalRepository;
import com.capstone.backend.repositories.TransactionRepository;
import com.capstone.backend.repositories.UserRepository;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Logger;

@Service
public class GoalService {

    static public void saveGoalAndUpdateUserGoals(Goal goal, GoalRepository goalRepository, UserRepository userRepository){
        goalRepository.save(goal);
        System.out.println("this is test for goal service: " +goal);

        System.out.println("this is test for user: " +goal.getGoalName());
        User user = goal.getUser();
//        System.out.println("this is test for user: " +goal.getUser());
        List<Goal> goalList = user.getGoals();
        goalList.add(goal);
        user.setGoals(goalList);
        userRepository.save(user);

    }





    static public void saveTransactionAndUpdateUserBalance(Transaction transaction, TransactionRepository transactionRepository, UserRepository userRepository) {
        transactionRepository.save(transaction);
        User user = transaction.getUser();
        if (transaction.getCategory().getCategoryType().equals("incoming")) {
            user.setBalance(user.getBalance() + transaction.getAmount());
            userRepository.save(user);

        } else if (transaction.getCategory().getCategoryType().equals("outgoing")) {
            user.setBalance(user.getBalance() - transaction.getAmount());
            userRepository.save(user);
        }
    }




}
