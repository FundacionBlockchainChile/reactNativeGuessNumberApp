import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../constants/Colors'

export default StyleSheet.create({
  firstFont: {
    fontFamily: 'openSans',
  },
  bodyText: {
    fontFamily: 'openSans',
    fontSize: Dimensions.get('window').height > 600 ? 20 : 15,
  },
  title: {
    fontFamily: 'ariana',
    fontSize: 40,
  },
  redText: {
    color: Colors.primary,
    fontFamily: 'openSansBold',
  },
})
