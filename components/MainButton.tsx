import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import Colors from '../constants/Colors'

const MainButton = (props: any) => {
  const [buttonMinWidth, setbuttonMinWidth] = useState(100)
  const [fontSize, setfontSize] = useState(18)

  useEffect(() => {
    const updateButtonMinWidth = () => {
      if (Dimensions.get('window').width > 380) {
        setbuttonMinWidth(120)
      }
      if (Dimensions.get('window').width < 380) {
        setbuttonMinWidth(100)
      }
    }
    Dimensions.addEventListener('change', updateButtonMinWidth)
    return () => {
      Dimensions.removeEventListener('change', updateButtonMinWidth)
    }
  }, [Dimensions.get('window').width])

  useEffect(() => {
    const updateFontSize = () => {
      if (Dimensions.get('window').width > 380) {
        setfontSize(18)
      }
      if (Dimensions.get('window').width < 380) {
        setfontSize(12)
      }
    }
    Dimensions.addEventListener('change', updateFontSize)
    return () => {
      Dimensions.removeEventListener('change', updateFontSize)
    }
  }, [Dimensions.get('window').width])

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.button, props.color, { minWidth: buttonMinWidth }]}>
        <Text style={[styles.buttonText, { fontSize }]}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
    minWidth: Dimensions.get('window').width > 300 ? 120 : 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'openSansBold',
    fontSize: Dimensions.get('window').width > 300 ? 18 : 12,
  },
})

export default MainButton
