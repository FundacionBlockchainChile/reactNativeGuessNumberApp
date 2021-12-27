import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Alert, ScrollView } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import MainButton from '../components/MainButton'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import DefaultStyles from '../constants/Text-styles'

const generateRandomBetween: any = (
  min: number,
  max: number,
  exclude: number
) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const rndNum = Math.floor(Math.random() * (max - min)) + min
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return rndNum
  }
}

const renderListItem = (value: any, index: number) => (
  <View key={value} style={styles.listItem}>
    <Text>#{index}</Text>
    <Text style={DefaultStyles.redText}>{value}</Text>
  </View>
)

const GameScreen = (props: any) => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [pastGuesses, setpastGuesses] = useState([initialGuess])
  const [rounds, setRounds] = useState(0)

  const currentLow = useRef(1)
  const currentHight = useRef(100)

  const { userChoice, onGameOver } = props

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length)
    }
  }, [currentGuess, userChoice, onGameOver])

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ])
      return
    }
    if (direction === 'lower') {
      currentHight.current = currentGuess
    } else {
      currentLow.current = currentGuess + 1
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHight.current,
      currentGuess
    )
    setCurrentGuess(nextNumber)
    setpastGuesses((curPastGuesses) => [nextNumber, ...curPastGuesses])
  }

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton
          onPress={() => nextGuessHandler('lower')}
          color={{ backgroundColor: Colors.primary }}
        >
          <Ionicons name="remove" size={24} color="white" />
        </MainButton>
        <MainButton
          onPress={() => nextGuessHandler('greater')}
          color={{ backgroundColor: Colors.secondary }}
        >
          <Ionicons name="add" size={24} color="white" />
        </MainButton>
      </Card>

      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
  listContainer: {
    flex: 1,
    width: '80%',
  },
  list: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  listItem: {
    width: '50%',
    borderColor: Colors.primary,
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})

export default GameScreen
