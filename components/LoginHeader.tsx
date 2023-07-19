import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

type LoginHeaderProps = {};

const LoginHeader: React.FC<LoginHeaderProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <Image style={styles.imageLogo} source={require('../images/pig.png')} />
        <Text style={styles.text}>SMART SAVERS LOGIN</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 125,
    backgroundColor: '#ffffff',
    shadowColor: '#716f6f',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderRadius: 20,
    marginBottom:30,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#35d0ba',
    alignSelf: 'center',
    fontFamily: 'OpenDyslexic-Regular',
  },
  imageLogo: {
    height: 70,
    width: 70,
    marginRight: 0,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default LoginHeader;
