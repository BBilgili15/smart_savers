package com.capstone.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    private String firebaseUserId;

    @Column(name="user_name")
    private String userName;

    @Column(name="parent_email")
    private String parentEmail;

    @Column(name="points")
    private int points;

    @Enumerated(EnumType.STRING)
    private Level level;

    @Column(name="balance")
    private double balance;

    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties({"user"})
    private List<Goal> goals;

    @OneToMany(mappedBy = "user", cascade = CascadeType.MERGE)
    @JsonIgnoreProperties({"user"})
    private List<Transaction> transactions;

    public User() {
    }

    public User(String userName, String parentEmail) {
        this.userName = userName;
        this.parentEmail = parentEmail;
        this.points = 0;
        this.level = Level.ONE;
        this.balance = 0.0;
    }

    public Long getId() {
        return id;
    }

    public String getFirebaseUserId() {
        return firebaseUserId;
    }

    public void setFirebaseUserId(String firebaseUserId) {
        this.firebaseUserId = firebaseUserId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getParentEmail() {
        return parentEmail;
    }

    public void setParentEmail(String parentEmail) {
        this.parentEmail = parentEmail;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public Level getLevel() {
        return level;
    }

    public void setLevel(Level level) {
        this.level = level;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }
}
