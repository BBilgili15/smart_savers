import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import { getUser } from '../../services/UserServices';
import {useState, useEffect} from 'react'
import React from 'react'

import FoxImage from  '../../images/Fox.png';
import OwlImage from '../../images/Owl.png';
import RacoonImage from '../../images/Racoon.png';
import SnakeImage from '../../images/Snake.png';
import GiraffeImage from '../../images/Giraffe.png';

  type UserProfileProps = {
    currentUser: any
  };

  const UserProfile: React.FC<UserProfileProps> = ({currentUser}) => {

    const getProfileImage = () => {
      if (currentUser && currentUser.favouriteAnimal){
        switch (currentUser.favouriteAnimal) {
          case 'fox':
            return FoxImage
          case 'owl':
            return require('../../images/Owl.png');
          case 'racoon':
            return require('../../images/Racoon.png');
          case 'snake':
            return require('../../images/Snake.png');
          case 'giraffe':
            return require('../../images/Giraffe.png');
          default:
            break;
        }
      }
      // Fox is the default image source if no favourite animal is set or currentUser is not available
      return require('../../images/Giraffe.png');
    };
     

  return (
      <View style={styles.container}>
        <Text style={styles.textSub}>{currentUser ? (currentUser.level === "ONE" ? "Savvy Spender" : "Test") : null}</Text>
        <Image source={getProfileImage()} style={styles.image}/>
        <Text style={styles.textMain}>Welcome {currentUser ? currentUser.displayName : null}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    borderRadius: 15,
    margin: 25,
  }, 
  container: {
    // backgroundColor: 'lightpink',
    alignItems: 'center',
    margin: 20,
  }, 
  textMain: {
    // backgroundColor: 'lightblue',
    fontSize: 30,
  },
  textSub: {
    backgroundColor: 'lightgreen',
    fontSize: 20,
  }
})

export default UserProfile


// import { View, Text, Image, StyleSheet } from 'react-native';
// import React from 'react';

// type UserProfileProps = {
//   currentUser: any;
// };

// const UserProfile: React.FC<UserProfileProps> = ({ currentUser }) => {
//   const getProfileImage = () => {
//     if (currentUser && currentUser.favouriteAnimal) {
//       const imageSource = require(`../../images/${currentUser.favouriteAnimal}.png`);
//       return imageSource;
//     }
//     // Default image source if no favorite animal is set or currentUser is not available
//     return require('../../images/Fox.png');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.textSub}>{currentUser ? (currentUser.level === 'ONE' ? 'Savvy Spender' : 'Test') : null}</Text>
//       <Image source={getProfileImage()} style={styles.image} />
//       <Text style={styles.textMain}>Welcome {currentUser ? currentUser.displayName : null}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   image: {
//     height: 250,
//     width: 250,
//     borderRadius: 15,
//     margin: 25,
//   },
//   container: {
//     alignItems: 'center',
//     margin: 20,
//   },
//   textMain: {
//     fontSize: 30,
//   },
//   textSub: {
//     backgroundColor: 'lightgreen',
//     fontSize: 20,
//   },
// });

// export default UserProfile;