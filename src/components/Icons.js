import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default ({ children }) => {
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

  return (
    <View style={styles.boxContainer}>
      <Ionicons name="ios-play" size={32} color="red" />
    </View>
  )
}
