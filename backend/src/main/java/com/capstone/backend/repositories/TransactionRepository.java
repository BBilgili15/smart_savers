package com.capstone.backend.repositories;

import com.capstone.backend.models.Transaction;
import com.capstone.backend.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {




    List<Transaction> findByUser(User user);


}
