package com.capstone.backend;

import com.capstone.backend.models.Category;
import com.capstone.backend.models.Level;
import com.capstone.backend.models.Transaction;
import com.capstone.backend.models.User;
import com.capstone.backend.repositories.GoalRepository;
import com.capstone.backend.repositories.TransactionRepository;
import com.capstone.backend.repositories.UserRepository;
import com.capstone.backend.services.FirebaseService;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.ValueEventListener;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

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

	@Autowired
	private FirebaseService firebaseService;
	@Autowired
	private DatabaseReference databaseReference;


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
//		changes below
		Category category = Category.EARNINGS;
		Transaction transaction1= new Transaction(category,20.00, user);
		transactionRepository.saveTransactionAndUpdateUserBalance(transaction1);
		userRepository.save(user);

		assertEquals(20.00, user.getBalance(),0.0);
		System.out.println(transaction1.getCategory().getCategoryName());
		System.out.println(user.getLevel().getTitle());
//		Super Saver
	}

//	@Test
	public void can_update_user_balance() {
		userRepository.deleteAll();
		User user = new User("Ben", "parent@test.com");
		userRepository.save(user);

	}
}
