package com.capstone.backend.repositories;

import com.capstone.backend.models.Transaction;
import com.capstone.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    @Transactional
    default void saveTransactionAndUpdateUserBalance(Transaction transaction) {
        save(transaction);
        User user = transaction.getUser();
        double newBalance = user.getBalance() + transaction.getAmount();
        user.setBalance(newBalance);
    }
}
