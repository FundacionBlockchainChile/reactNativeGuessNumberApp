import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native'
import TextStyle from '../constants/Text-styles'
import MainButton from '../components/MainButton'
import Colors from '../constants/Colors'

const GameOverScreen = (props: any) => {
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get('window').width
  )
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get('window').height
  )

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get('window').width)
      setAvailableDeviceHeight(Dimensions.get('window').height)
    }

    Dimensions.addEventListener('change', updateLayout)

    return () => {
      Dimensions.removeEventListener('change', updateLayout)
    }
  })

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={TextStyle.title}>The Game is Over!</Text>
        <View
          style={[
            styles.imageContainer,
            {
              width: availableDeviceWidth * 0.7,
              height: availableDeviceWidth * 0.7,
              borderRadius: (availableDeviceWidth * 0.7) / 2,
              marginVertical: availableDeviceHeight / 30,
            },
          ]}
        >
          <Image
            fadeDuration={2000}
            style={styles.image}
            // source={require('../assets/images/winner.gif')}
            resizeMode="cover"
            source={{
              uri: 'https://media.giphy.com/media/xT0GqssRweIhlz209i/giphy.gif',
            }}
          />
        </View>
        <View
          style={[
            styles.resultText,
            { marginVertical: availableDeviceHeight / 60 },
          ]}
        >
          <Text
            style={[
              TextStyle.bodyText,
              styles.alignCenter,
              { fontSize: availableDeviceHeight < 400 ? 16 : 20 },
            ]}
          >
            Your Phone needed{' '}
            <Text style={TextStyle.redText}>{props.roundsNumber}</Text> rounds
            to guess the number{' '}
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 15,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
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
    marginBottom: 20,
  },
  alignCenter: {
    textAlign: 'center',
  },
})

export default GameOverScreen
