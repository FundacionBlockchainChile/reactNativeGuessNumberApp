import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Header from './components/Header'
import StarGameScreen from './screens/StarGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOver'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import CardExample from './components/ExampleCards'

const fetchFonts = () => {
  return Font.loadAsync({
    ariana: require('./assets/fonts/ArianaVioleta-dz2K.ttf'),
    debrosee: require('./assets/fonts/Debrosee-ALPnL.ttf'),
    openSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    openSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [userNumber, setUserNumber]: [userNumber: any, setUserNumber: any] =
    useState()
  const [guessRounds, setGuessRounds] = useState(0)
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.error(err)}
      />
    )
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0)
    setUserNumber(undefined)
  }

  const _cacheResourcesAsync = async () => {
    await setTimeout(() => console.log('waited'), 5000)
    return
  }

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }

  const gameOverHandler = (numOfRounds: number) => {
    setGuessRounds(numOfRounds)
  }

  let content = <StarGameScreen onStartGame={startGameHandler} />

  // Replace Main content here

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    )
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onRestar={configureNewGameHandler}
      />
    )
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})
