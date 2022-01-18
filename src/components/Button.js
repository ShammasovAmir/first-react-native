import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'

const Button = ({ children, bgColor, fontColor }) => {
  const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: bgColor,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      paddingVertical: 20,
      paddingHorizontal: 40,
      borderRadius: 5,
      marginBottom: 10,
    },
    buttonText: {
      color: fontColor,
    },
  })

  return (
    <TouchableNativeFeedback
      onPress={() => alert(`You pressed the ${bgColor} Button`)}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

export default Button
