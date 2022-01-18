import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native'
import Box from './src/components/Box'
import Button from './src/components/Button'
import Icons from './src/components/Icons'
import Images from './src/components/Images'
import ItemsList from './src/components/ItemsList'

const App = () => {
  const [name, setName] = useState('')

  const handleInputChange = (text) => setName(text)

  return (
    <View style={styles.appContainer}>
      <ItemsList />
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  label: {
    color: 'black',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: 'white',
    padding: 10,
    width: 200,
    fontSize: 18,
  },
  output: {
    fontSize: 40,
  },
})

export default App
