package com.capstone.backend.repositories;

import com.capstone.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByFirebaseUserId(String firebaseUserId);

    Optional<User> findByEmail(String email);

//    Long findUserIdByFirebaseUserId(@Param("firebaseUserId") String firebaseUserId);

}
