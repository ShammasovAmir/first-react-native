import React from 'react'
import { View, StyleSheet } from 'react-native'

const Box = ({ children }) => {
  const styles = StyleSheet.create({
    boxContainer: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: 20,
    },
  })

  return <View style={styles.boxContainer}>{children}</View>
}

export default Box
