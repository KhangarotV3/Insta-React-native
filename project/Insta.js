import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Insta = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="instagram" style={styles.logo} />
      <FontAwesome name="caret-down" style={styles.icon} />
      <View style={styles.iconsContainer}>
       
        <FontAwesome name="heart" style={styles.icon} />
        <FontAwesome name="comment-o" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:38,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  logo: {
    fontSize: 30,
    color: '#000',
    marginRight: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  icon: {
    fontSize: 25,
    color: '#000',
    marginLeft: 10,
  },
});

export default Insta;
