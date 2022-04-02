import React, {useState, useEffect} from 'react'
import {View, Text} from 'react-native'

import Card from '../../components/Card'

import CARDS from '../../cards'

import {shuffleArray} from '../../utils/helper'
import audio from '../../utils/Sound'

import styles from './styles'

const INIT_CARDS = shuffleArray([...CARDS, ...CARDS])

const Board = () => {
  const [openCards, setOpenCards] = useState([])
  const [wonCards, setWonCards] = useState([])
  const [score, setScore] = useState(0)

  const upScore = () => setScore(score + 1)

  useEffect(() => {
    setWonCards([])
    setOpenCards([])
    setScore(0)
  }, [])

  useEffect(() => {
    if (score === CARDS.length) {
      alert('WIN')
    }
  }, [score])
  const onPressCard = (index, id) => {
    audio.play()
    if (!openCards.length) {
      return setOpenCards([index])
    }

    let newOpenCards = [...openCards]

    newOpenCards.push(index)
    if (newOpenCards.length > 2) {
      newOpenCards.shift()
    }

    const isMatch = INIT_CARDS[newOpenCards[0]].id === id
    if (isMatch) {
      newOpenCards = []
      setWonCards(wonCards.concat([id]))
      upScore()
    }

    setOpenCards(newOpenCards)
  }

  const renderCards = () => {
    return INIT_CARDS.map((card, index) => {
      return (
        <Card
          key={`${card.name}-${index}`}
          image={card.image}
          isOpen={wonCards.includes(card.id) || openCards.includes(index)}
          onPress={() => {
            onPressCard(index, card.id)
          }}
        />
      )
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Score: {score}</Text>
      <View style={styles.wrapper}>{renderCards()}</View>
    </View>
  )
}

export default Board
