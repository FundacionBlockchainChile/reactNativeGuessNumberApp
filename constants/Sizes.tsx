import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  fullHeight: {
    height: Dimensions.get('window').height,
  },
  fullwidth: {
    width: Dimensions.get('window').width,
  },
  width_50_percent: {
    width: Dimensions.get('window').width / 2,
  },
  width_33_percent: {
    width: Dimensions.get('window').width / 3,
  },
  width_25_percent: {
    width: Dimensions.get('window').width / 4,
  },
})
