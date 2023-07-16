package com.capstone.backend.models;

import javax.persistence.*;

@Entity
@Table(name = "provider_data")
public class ProviderData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private FirebaseUser firebaseUser;


    private String email;
    private String phoneNumber;
    private String photoURL;

    public ProviderData() {
    }

    public ProviderData(FirebaseUser firebaseUser, String email, String phoneNumber, String photoURL) {
        this.firebaseUser = firebaseUser;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.photoURL = photoURL;
    }

    public FirebaseUser getFirebaseUser() {
        return firebaseUser;
    }

    public void setFirebaseUser(FirebaseUser firebaseUser) {
        this.firebaseUser = firebaseUser;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPhotoURL() {
        return photoURL;
    }

    public void setPhotoURL(String photoURL) {
        this.photoURL = photoURL;
    }
}
