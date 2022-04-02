import Sound from 'react-native-sound'

Sound.setCategory('Playback')

const audio = new Sound(require('./../assets/sounds/flip.mp3'), error => {
  if (error) {
    console.log('failed to load the sound', error)
    return
  }
})

export default audio
