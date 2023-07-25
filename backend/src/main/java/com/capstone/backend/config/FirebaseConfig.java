package com.capstone.backend.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.FileInputStream;
import java.io.IOException;

@Configuration
public class FirebaseConfig {

    @Bean
    public FirebaseApp firebaseApp() throws IOException {

        // /Users/benbilgili/Desktop/codeclan/professional-software/projects/capstone/capstone_project/backend/src/main/resources/smartsavers-c0852-firebase-adminsdk-8qvm9-c817f7022d.json

       // FileInputStream serviceAccount = new FileInputStream("/Users/user/CodeClan_work/finalProject/capstone_project/backend/src/main/resources/smartsavers-c0852-firebase-adminsdk-8qvm9-c817f7022d.json");

//        /Users/bartram/codeclan_work/CAPSTONE PROJECT/capstone_project/backend/src/main/resources/smartsavers-c0852-firebase-adminsdk-8qvm9-c817f7022d.json

        if (FirebaseApp.getApps().isEmpty()) {


            FileInputStream serviceAccount = new FileInputStream("/Users/benbilgili/Desktop/codeclan/professional-software/projects/capstone/capstone_project/backend/src/main/resources/smartsavers-c0852-firebase-adminsdk-8qvm9-c817f7022d.json");


            FirebaseOptions options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .setDatabaseUrl("https://smartsavers-c0852-default-rtdb.europe-west1.firebasedatabase.app/")
                    .build();

            return FirebaseApp.initializeApp(options);
        } else {
            return FirebaseApp.getInstance();
        }
    }

    @Bean
    public DatabaseReference databaseReference(FirebaseApp firebaseApp) {
        if (firebaseApp == null || firebaseApp.getOptions() == null) {
            throw new IllegalStateException("FirebaseApp has not been properly initialized.");
        }

        return FirebaseDatabase.getInstance(firebaseApp).getReference();
    }
}
