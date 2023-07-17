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

//	@Test
	public void can_update_user_balance() {
		userRepository.deleteAll();
		User user = new User("Ben", "parent@test.com");
		userRepository.save(user);

	}

	@Test
	public void canSaveTransactionAndUpdateUserBalance(){
		transactionRepository.deleteAll();
		userRepository.deleteAll();
		User user = new User("Ben", "parent@test.com");
		userRepository.save(user);
		User user2 = new User("Julie", "parent@test.com");
		userRepository.save(user2);
//    changes below
		Category category = Category.EARNINGS;
		Category category1= Category.POCKET_MONEY;
		Category category2 = Category.GIFT;
		Category category3 = Category. OTHER_INCOME;
		Category category4 = Category.ENTERTAINMENT;
		Category category5 = Category.SHOPPING;
		Category category6 = Category.TRANSPORT;
		Category category7 = Category.FOOD;
		Category category8 = Category. OTHER_SPEND;
		Category category9 = Category. FOOD;
//		Category category10 = Category. FOOD;



		Transaction transaction= new Transaction(category,20.00, user);
		Transaction transaction1= new Transaction(category1,10.00, user);
		Transaction transaction2= new Transaction(category2,50.00, user);
		Transaction transaction3= new Transaction(category3,80.00, user);
		Transaction transaction4= new Transaction(category4,40.00, user);
		Transaction transaction5= new Transaction(category5,10.00, user);
		Transaction transaction6= new Transaction(category6,6.00, user);
		Transaction transaction7= new Transaction(category7,7.00, user);
		Transaction transaction8= new Transaction(category8,12.00, user);
		Transaction transaction9= new Transaction(category9,10.00, user2);
//		Transaction transaction10= new Transaction(category10,10.00, user);

		transactionRepository.saveTransactionAndUpdateUserBalance(transaction);
		transactionRepository.saveTransactionAndUpdateUserBalance(transaction1);
		transactionRepository.saveTransactionAndUpdateUserBalance(transaction2);
		transactionRepository.saveTransactionAndUpdateUserBalance(transaction3);
		transactionRepository.saveTransactionAndUpdateUserBalance(transaction4);
		transactionRepository.saveTransactionAndUpdateUserBalance(transaction5);
		transactionRepository.saveTransactionAndUpdateUserBalance(transaction6);
		transactionRepository.saveTransactionAndUpdateUserBalance(transaction7);
		transactionRepository.saveTransactionAndUpdateUserBalance(transaction8);
		transactionRepository.saveTransactionAndUpdateUserBalance(transaction9);
//		transactionRepository.saveTransactionAndUpdateUserBalance(transaction10);

		userRepository.save(user);
		userRepository.save(user2);

		assertEquals(85.00, user.getBalance(),0.0);
		System.out.println(transaction1.getCategory().getCategoryName());
		System.out.println(user.getLevel().getTitle());
//    Super Saver
	}
}
