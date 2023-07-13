import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <Image source={require('../images/pig.png')} style={styles.imageLogo} />
        <Text style={styles.text}>SmartSavers</Text>
      </View>
      <View style={styles.headerRight}>
      <Image source={require('../images/logout.png')} style={styles.imageLogout} />
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
    borderBottomWidth: 3,
    borderBottomColor: 'black',
    backgroundColor: '#ffffff'
  },
  text: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: '#000000',
    alignSelf: 'center',
    backgroundColor: 'lightpink',
  },
  imageLogo: {
    height: 75,
    width: 75,
  },
  imageLogout: {
    height: 30,
    width: 30,
  },
  headerLeft: {
    backgroundColor: 'lightpink',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  headerRight: {
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    padding: 20,
  }
});

export default Header;
