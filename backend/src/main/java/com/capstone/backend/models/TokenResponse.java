package com.capstone.backend.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="token_response")
public class TokenResponse {

    @Id
    @Column(name = "id")
    private Long id;

    @Column(name="email")
    private String email;

    @Column(name="expires_in")
    private String expiresIn;
    @Column(name = "id_token")
    private String idToken;

    @Column(name = "kind")
    private String kind;

    @Column(name = "local_id")
    private String localId;

    @Column(name = "refresh_token")
    private String refreshToken;


    public TokenResponse() {
    }

    public TokenResponse(String email, String expiresIn, String idToken, String kind, String localId, String refreshToken) {
        this.email = email;
        this.expiresIn = expiresIn;
        this.idToken = idToken;
        this.kind = kind;
        this.localId = localId;
        this.refreshToken = refreshToken;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getExpiresIn() {
        return expiresIn;
    }

    public void setExpiresIn(String expiresIn) {
        this.expiresIn = expiresIn;
    }

    public String getIdToken() {
        return idToken;
    }

    public void setIdToken(String idToken) {
        this.idToken = idToken;
    }

    public String getKind() {
        return kind;
    }

    public void setKind(String kind) {
        this.kind = kind;
    }

    public String getLocalId() {
        return localId;
    }

    public void setLocalId(String localId) {
        this.localId = localId;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }
}
