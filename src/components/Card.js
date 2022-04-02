import React from 'react'
import {Image, StyleSheet, TouchableOpacity} from 'react-native'
import IMAGES from '../assets/images'

const Card = ({image, isOpen, onPress}) => {
  const src = isOpen ? image : IMAGES.DEFAULT

  if (isOpen) {
    return <Image source={src} style={styles.card} />
  }

  return (
    <TouchableOpacity onPress={isOpen ? null : onPress}>
      <Image source={src} style={styles.card} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 150,
    width: 100,
    backgroundColor: '#eab676',
    margin: 5,
  },
})
export default Card
