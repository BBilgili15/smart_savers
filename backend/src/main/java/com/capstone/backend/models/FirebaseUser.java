package com.capstone.backend.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="firebase_user")
public class FirebaseUser {

    @Id
    private String uid;

    @Column(name = "api_key")
    private String apiKey;

    @Column(name = "app_name")
    private String appName;

    @Column(name = "created_at")
    private String createdAt;

    @Column(name = "display_name")
    private String displayName;

    @Column(name = "email")
    private String email;

    @Column(name = "email_verified")
    private boolean emailVerified;

    @Column(name = "is_anonymous")
    private boolean anonymous;

    @Column(name = "last_login_at")
    private String lastLoginAt;
    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "photo_url")
    private String photoURL;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "firebaseUser")
    private List<ProviderData> providerData;

    @Embedded
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "firebaseUser")
    private TokenManager tokenManager;

    @Column(name = "tenant_id")
    private String tenantId;

    public FirebaseUser() {
    }

    public FirebaseUser(String uid, String apiKey, String appName, String createdAt, String displayName, String email, boolean emailVerified, boolean anonymous, String lastLoginAt, String phoneNumber, String photoURL, List<ProviderData> providerData, TokenManager tokenManager, String tenantId) {
        this.uid = uid;
        this.apiKey = apiKey;
        this.appName = appName;
        this.createdAt = createdAt;
        this.displayName = displayName;
        this.email = email;
        this.emailVerified = emailVerified;
        this.anonymous = anonymous;
        this.lastLoginAt = lastLoginAt;
        this.phoneNumber = phoneNumber;
        this.photoURL = photoURL;
        this.providerData = providerData;
        this.tokenManager = tokenManager;
        this.tenantId = tenantId;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getApiKey() {
        return apiKey;
    }

    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }

    public String getAppName() {
        return appName;
    }

    public void setAppName(String appName) {
        this.appName = appName;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
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

    public boolean isEmailVerified() {
        return emailVerified;
    }

    public void setEmailVerified(boolean emailVerified) {
        this.emailVerified = emailVerified;
    }

    public boolean isAnonymous() {
        return anonymous;
    }

    public void setAnonymous(boolean anonymous) {
        this.anonymous = anonymous;
    }

    public String getLastLoginAt() {
        return lastLoginAt;
    }

    public void setLastLoginAt(String lastLoginAt) {
        this.lastLoginAt = lastLoginAt;
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

    public List<ProviderData> getProviderData() {
        return providerData;
    }

    public void setProviderData(List<ProviderData> providerData) {
        this.providerData = providerData;
    }

    public TokenManager getTokenManager() {
        return tokenManager;
    }

    public void setTokenManager(TokenManager tokenManager) {
        this.tokenManager = tokenManager;
    }

    public String getTenantId() {
        return tenantId;
    }

    public void setTenantId(String tenantId) {
        this.tenantId = tenantId;
    }
}
