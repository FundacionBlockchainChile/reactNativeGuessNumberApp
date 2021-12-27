import React from 'react'
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native'
import TextStyle from '../constants/Text-styles'
import MainButton from '../components/MainButton'
import Colors from '../constants/Colors'

const GameOverScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text style={TextStyle.title}>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={2000}
          style={styles.image}
          // source={require('../assets/images/winner.gif')}
          source={{
            uri: 'https://media.giphy.com/media/xT0GqssRweIhlz209i/giphy.gif',
          }}
        />
      </View>
      <View style={styles.resultText}>
        <Text style={[TextStyle.bodyText, styles.alignCenter]}>
          Your Phone needed{' '}
          <Text style={TextStyle.redText}>{props.roundsNumber}</Text> rounds to
          guess the number{' '}
          <Text style={TextStyle.redText}>{props.userNumber}</Text>
        </Text>
      </View>
      <MainButton
        onPress={props.onRestar}
        color={{ backgroundColor: Colors.primary }}
      >
        NEW GAME
      </MainButton>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'red',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultText: {
    width: '80%',
  },
  alignCenter: {
    textAlign: 'center',
    fontSize: 20,
  },
})

export default GameOverScreen
