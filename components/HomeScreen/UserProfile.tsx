import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import { getUser } from '../../services/UserServices';
import {useState, useEffect} from 'react'
import React from 'react'

import FoxImage from '../../images/FoxCB.png'
import OwlImage from '../../images/OwlCB.png';
import RaccoonImage from '../../images/RaccoonCB.png';
import SnakeImage from '../../images/SnakeCB.png';
import GiraffeImage from '../../images/GiraffeCB.png';

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
            return OwlImage;
          case 'raccoon':
            return RaccoonImage;
          case 'snake':
            return SnakeImage;
          case 'giraffe':
            return GiraffeImage;
          default:
            break;
        }
      }
      // Fox is the default image source if no favourite animal is set or currentUser is not available
      return require('../../images/Giraffe.png');
    };

    const getUserLevelText = () => {
      if (currentUser && currentUser.level === 'ONE') {
        return 'Money Explorer';
      } else if (currentUser && currentUser.level === 'TWO') {
        return 'Saving Star';
      } else if (currentUser && currentUser.level === 'THREE') {
        return 'Financial Wizard';
      } else {
        return null;
      }
    };

    const getUserProfileStyle = () => {
      if (currentUser && currentUser.level === 'TWO') {
        return styles.profileImageBorderTwo;
      } else if (currentUser && currentUser.level === 'THREE') {
        return styles.profileImageBorderThree;
      } else {
        return styles.profileImageBorderDefault;
      }
    };
     

  return (
      <View style={styles.container}>
        <Text style={styles.textSub}>{getUserLevelText()}</Text>
        <View style={[styles.imageContainer, getUserProfileStyle()]}>
          <Image source={getProfileImage()} style={styles.image} />
        </View>
        <Text style={styles.textMain}>Welcome {currentUser ? currentUser.displayName : null}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    borderWidth: 10,
    borderColor: 'gray',
    borderRadius: 20,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 10,
    margin: 0,
  }, 
  profileImageBorderDefault: {
    borderColor: '#CD7F32',
  },
  profileImageBorderTwo: {
    borderColor: '#C0C0C0',
  },
  profileImageBorderThree: {
    // borderWidth: 10,
    borderColor: '#FFD700',
  },
  container: {
    // backgroundColor: 'lightpink',
    alignItems: 'center',
    margin: 20,
  }, 
  textMain: {
    // backgroundColor: 'lightblue',
    fontSize: 30,
    fontWeight: 'bold'
  },
  textSub: {
    // backgroundColor: 'lightgreen',
    fontSize: 20,
  }
})

export default UserProfile;
