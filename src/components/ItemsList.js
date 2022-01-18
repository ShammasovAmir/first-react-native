import React from 'react'
import { View, StyleSheet, Text, FlatList, SectionList } from 'react-native'

const names = [
  'Hermes Tresmagistus',
  'Rama',
  'Krishna',
  'Zarathushtra',
  'Perseus',
  'Hercules',
  'Socrates',
  'Pythagoras',
  'Buddha',
  'Plato',
  'Aristotle',
  'Appuleius',
  'Marcus Aurelius',
  'Porphory',
  'Plotinus',
  'Iamblichus',
  'Julian',
  'Proclus',
  'Thomas Taylor',
]

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
    item: {
      padding: 20,
    },
    listTitle: {
      backgroundColor: 'black',
      fontSize: 20,
      color: 'white',
    },
  })

  return (
    <View style={styles.boxContainer}>
      {/* <FlatList
        data={names}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      /> */}
      <SectionList
        sections={[
          { title: 'E', data: ['Empedocles', 'Euclid'] },
          { title: 'C', data: ['Cicero'] },
        ]}
        renderSectionHeader={({ section }) => (
          <Text style={styles.listTitle}>{section.title}</Text>
        )}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}
