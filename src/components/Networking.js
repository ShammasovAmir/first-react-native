import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'

export default ({ children }) => {
  const [state, setState] = useState({
    character: '',
  })

  const styles = StyleSheet.create({
    boxContainer: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: 20,
    },
    button: {
      backgroundColor: 'red',
      fontSize: 30,
      borderRadius: 5,
      paddingHorizontal: 30,
      paddingVertical: 15,
    },
    buttonText: {
      color: '#fff',
    },
  })

  const getData = async (name) => {
    try {
      let data = await fetch(
        `https://swapi.dev/api/people/?search=${name}&format=json`
      )
      console.log('================================')
      data = await data.json()
      data = data.results[0].name
      console.log(data)
      setState({ character: data })
    } catch (error) {
      console.error(error)
    }
  }

  // getData('luke')

  return (
    <View style={styles.boxContainer}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => getData('anakin')}
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableHighlight>
      <Text>{state.character}</Text>
    </View>
  )
}
