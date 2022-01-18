import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native'

const Images = ({ children }) => {
  const styles = StyleSheet.create({
    boxContainer: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: 20,
    },
    goku: {
      width: 300,
      height: 300,
    },
  })

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      }}
      resizeMode="cover"
      style={styles.boxContainer}
    >
      <Image
        source={{
          uri: 'http://vignette.wikie.nocookie.net/vsbattles/images/5/56/Goku_%28Base%29.png/revision/latest?cb=20160315175220',
        }}
        resizeMode="contain"
        style={styles.goku}
      ></Image>
      {/* <Image
        source={require('../../assets/images/Goku.png')}
        style={styles.goku}
      ></Image> */}
    </ImageBackground>
  )
}

export default Images
