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

    @Column(name="display_name")
    private String displayName;

    @Column(name="parent_email")
    private String email;

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

    public User(String userName, String parentEmail, String firebaseUserId) {
        this.displayName = userName;
        this.email = parentEmail;
        this.points = 0;
        this.level = Level.ONE;
        this.balance = 0.0;
        this.firebaseUserId = firebaseUserId;
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

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public List<Goal> getGoals() {
        return goals;
    }

    public void setGoals(List<Goal> goals) {
        this.goals = goals;
    }

    public List<Transaction> getTransactions() {
        return transactions;
    }

    public void setTransactions(List<Transaction> transactions) {
        this.transactions = transactions;
    }

    @Override
    public String toString() {
        return "User{" +
                "firebaseUserId='" + firebaseUserId + '\'' +
                ", displayName='" + displayName + '\'' +
                ", email='" + email + '\'' +
                ", username='" + displayName + '\'' +
                '}';
    }
}
