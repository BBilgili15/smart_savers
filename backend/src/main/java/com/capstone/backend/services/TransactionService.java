package com.capstone.backend.services;

import com.capstone.backend.models.Transaction;
import com.capstone.backend.models.User;
import com.capstone.backend.repositories.TransactionRepository;
import com.capstone.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionService {



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
