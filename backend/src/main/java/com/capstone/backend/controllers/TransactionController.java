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
    public List<Transaction> getAllTransactions(){
        return transactionRepository.findAll();
    }

    @GetMapping(value="/transactions/{id}")
    public Optional<Transaction> getTransactionsById(@PathVariable Long id){
        return transactionRepository.findById(id);
    }

    @PostMapping(value = "/transactions")
    public ResponseEntity<Transaction> postTransaction(@RequestBody Transaction transaction){
        transactionRepository.saveTransactionAndUpdateUserBalance(transaction);
        return new ResponseEntity<>(transaction, HttpStatus.CREATED);
    }


}
