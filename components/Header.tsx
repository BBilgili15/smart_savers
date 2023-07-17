import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';
import { FirebaseAuth } from '../FirebaseConfig';
import { err } from 'react-native-svg/lib/typescript/xml';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {

  const handleSignOut = async () => {
    try {
      await FirebaseAuth.signOut();
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <Image source={require('../images/pig.png')} style={styles.imageLogo} />
        <Text style={styles.text}>SmartSavers</Text>
      </View>
      <View style={styles.headerRight}>
      <TouchableOpacity onPress={handleSignOut}>
      <Image source={require('../images/logout.png')} style={styles.imageLogout} />
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    height: 75,
    // borderBottomWidth: 3,
    // borderBottomColor: 'black',
    backgroundColor: '#ffffff',
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 5,
    shadowRadius: 4,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    alignSelf: 'center',
  },
  imageLogo: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  imageLogout: {
    height: 30,
    width: 30,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#FF69B4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  headerRight: {
    // backgroundColor: '#87CEFA',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 10,
  },
});

export default Header;