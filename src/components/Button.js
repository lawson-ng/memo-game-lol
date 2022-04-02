import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#968875',
    width: 60,
    borderRadius: 5,
    alignItems: 'center',
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
  },
});
export default Button;
