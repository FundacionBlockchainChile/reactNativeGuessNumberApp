import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Alert,
} from 'react-native'
import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import Colors from '../constants/Colors'
import DefaultStyles from '../constants/Text-styles'
import MainButton from '../components/MainButton'

const StarGameScreen = (props: any) => {
  const [enteredValue, setenteredValue] = useState('')
  const [confirmed, setconfirmed] = useState(false)
  const [selectedNumber, setselectedNumber]: [
    selectedNumber: any,
    setselectedNumber: any
  ] = useState(undefined)

  const numberInputHandler = (inputText: string) => {
    setenteredValue(inputText.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setenteredValue('')
    setconfirmed(false)
  }
  const confirmInputHandler = () => {
    const chosenNumber: number = parseInt(enteredValue)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Incorrect Number', 'Number must be between 1-99.', [
        {
          text: 'Okey',
          onPress: resetInputHandler,
          style: 'destructive',
        },
        // { text: 'OK', onPress: () => console.log('OK Pressed') },
      ])

      return
    }
    setconfirmed(true)
    setselectedNumber(chosenNumber)
    setenteredValue('')
    Keyboard.dismiss()
  }

  let confirmedNumber

  if (confirmed) {
    confirmedNumber = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton
          onPress={() => props.onStartGame(selectedNumber)}
          color={{ backgroundColor: Colors.primary }}
        >
          START GAME
        </MainButton>
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.screen}>
        <Text style={[styles.title, DefaultStyles.title]}>
          Star a new Game!
        </Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            {/* <View style={styles.btn}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.primary}
              />
            </View>
            <View style={styles.btn}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.secondary}
              />
            </View> */}
            <MainButton
              onPress={resetInputHandler}
              color={{ backgroundColor: Colors.primary }}
            >
              Reset
            </MainButton>
            <MainButton
              onPress={confirmInputHandler}
              color={{ backgroundColor: Colors.secondary }}
            >
              Confirm
            </MainButton>
          </View>
        </Card>
        {confirmedNumber}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '90%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  btn: {
    width: 100,
    marginVertical: 10,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
})

export default StarGameScreen
