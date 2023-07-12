package com.capstone.backend;

import com.capstone.backend.models.Category;
import com.capstone.backend.models.Transaction;
import com.capstone.backend.models.User;
import com.capstone.backend.repositories.GoalRepository;
import com.capstone.backend.repositories.TransactionRepository;
import com.capstone.backend.repositories.UserRepository;
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
class BackendApplicationTests {

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
	public void canGetAllUsers(){
		userRepository.deleteAll();
		User user = new User("Bobbi1", "parent@test.com");
		userRepository.save(user);
		User user2 = new User("Sam", "samsmum@test.com");
		userRepository.save(user2);
		assertEquals(2, userRepository.findAll().size());

	}

	@Test
	public void canSaveTransactionAndUpdateUserBalance(){
		transactionRepository.deleteAll();
		userRepository.deleteAll();
		User user = new User("Ben", "parent@test.com");
		userRepository.save(user);
		Transaction transaction1= new Transaction(Category.EARNINGS,20.00, user);
		transactionRepository.saveTransactionAndUpdateUserBalance(transaction1);
		userRepository.save(user);
		assertEquals(20.00, user.getBalance(),0.0);
	}
}
