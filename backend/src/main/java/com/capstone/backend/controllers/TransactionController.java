package com.capstone.backend.controllers;

import com.capstone.backend.models.Transaction;
import com.capstone.backend.models.User;
import com.capstone.backend.repositories.TransactionRepository;
import com.capstone.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TransactionController {
    @Autowired
    TransactionRepository transactionRepository;
    @Autowired
    UserRepository userRepository;


    @GetMapping(value="/transactions")
    public ResponseEntity<List<Transaction>> getAllTransactions(@RequestParam(name = "byUserId", required = false) Long userId){
        if (userId != null) {
            Optional<User> user = userRepository.findById(userId);
            System.out.println(user);
            if (user.isPresent()) {
                List<Transaction> transactions = transactionRepository.findByUser(user.get());
                return new ResponseEntity<>(transactions, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } else {
            List<Transaction> transactions = transactionRepository.findAll();
            return new ResponseEntity<>(transactions, HttpStatus.OK);
        }
    }

    @PostMapping(value = "/transactions")
    public ResponseEntity<Transaction> postTransaction(@RequestBody Transaction transaction){
        transactionRepository.saveTransactionAndUpdateUserBalance(transaction);
        return new ResponseEntity<>(transaction, HttpStatus.CREATED);
    }

    @GetMapping(value = "/transactions/{transactionId}")
    public ResponseEntity<Transaction> getTransactionById(@PathVariable Long transactionId) {
        Optional<Transaction> transaction = transactionRepository.findById(transactionId);
        if (transaction.isPresent()) {
            return new ResponseEntity<>(transaction.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

//    @GetMapping("/transactions")
//    public List<Transaction> getTransactionsByCategoryTypeAndUserId(
//            @RequestParam("categoryType") String categoryType,
//            @RequestParam("userId") Long userId
//    ) {
//        return transactionRepository.findByCategoryCategoryTypeAndUserId(categoryType, userId);
//    }

}
