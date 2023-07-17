package com.capstone.backend;

import com.capstone.backend.models.Category;
import com.capstone.backend.models.Goal;
import com.capstone.backend.models.Transaction;
import com.capstone.backend.models.User;
import com.capstone.backend.repositories.GoalRepository;
import com.capstone.backend.repositories.TransactionRepository;
import com.capstone.backend.repositories.UserRepository;
import com.capstone.backend.services.TransactionService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@ActiveProfiles("test")
@SpringBootTest
class GoalTests {

    @Autowired
    UserRepository userRepository;
    @Autowired
    TransactionRepository transactionRepository;
    @Autowired
    GoalRepository goalRepository;


    @Test
    void contextLoads() {
    }

    @Test
    public void canAddGoal(){
        userRepository.deleteAll();
        User user = new User("Bobbi1", "parent@test.com");
        userRepository.save(user);
        Goal goal = new Goal("Shoes",100.00, user);
        goalRepository.save(goal);
        assertEquals("Shoes", goalRepository.findAll().get(0).getGoalName());
    }

    @Test
    public void canUpdateSavingGoalBalance(){
        transactionRepository.deleteAll();
        userRepository.deleteAll();
        goalRepository.deleteAll();
        User user = new User("Ben", "parent@test.com");
        userRepository.save(user);
        Transaction transaction1= new Transaction(Category.EARNINGS,20.00, user);
        TransactionService.saveTransactionAndUpdateUserBalance(transaction1, transactionRepository, userRepository);
        userRepository.save(user);
        Goal goal = new Goal("Shoes",100.00, user);
        goalRepository.save(goal);
        goalRepository.updateSavingGoalBalance(10.00, goal);
        userRepository.save(user);
        goalRepository.save(goal);
        assertEquals(10.00, goal.getAmountSaved(),0.0);
        assertEquals(10.00, user.getBalance(),0.0);
    }
}
