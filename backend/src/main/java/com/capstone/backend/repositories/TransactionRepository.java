package com.capstone.backend.repositories;

import com.capstone.backend.models.Transaction;
import com.capstone.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    @Transactional
    default void saveTransactionAndUpdateUserBalance(Transaction transaction) {
        save(transaction);
        User user = transaction.getUser();

        if (transaction.getCategory().getCategoryType().equals("incoming")) {
            user.setBalance(user.getBalance() + transaction.getAmount());
        } else if (transaction.getCategory().getCategoryType().equals("outgoing")) {
            user.setBalance(user.getBalance() - transaction.getAmount());
        }
    }

//    List<Transaction> findByCategoryCategoryTypeAndUserId(String categoryType, Long userId);


    List<Transaction> findByUser(User user);


}