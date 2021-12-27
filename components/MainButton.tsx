import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'

const MainButton = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.button, props.color]}>
        <Text style={styles.buttonText}>{props.children}</Text>
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
  },
  buttonText: {
    color: 'white',
    fontFamily: 'openSansBold',
    fontSize: 18,
  },
})

export default MainButton
