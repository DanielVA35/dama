import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const Menu = (props) => {
  console.log(props)
  const navigation = props.navigation

  return (
    <View style={styles.principalStyle}>

      <Text style={styles.text}>Calculadora</Text>

      <View style={styles.viewV1}>
        <TouchableOpacity style={styles.btnStyle} onPress={() => {
          console.log('button pressed')
          navigation.navigate('Versão 01')
        }}><Text style={styles.text2}> Versão 01</Text></TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnStyle} onPress={() => {
        console.log('button pressed')
        navigation.navigate('Versão 02')
      }}><Text style={styles.text2}> Versão 02 </Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  principalStyle: {
    padding: 20,
  },
  text: {
    fontSize: 30
  },
  text2: {
    fontSize: 20
  },
  viewV1: {
    paddingTop: 15, 
    paddingBottom: 15,
  },
  btnStyle: {
    paddingTop: 15,
    paddingBottom: 15,
    height: '20',
    backgroundColor: '#DAE8FC',
    borderWidth: 2,
    borderColor: '#96B0D6',
    textAlign: 'center',
    justifyContent: 'center',
  }
})

export default Menu