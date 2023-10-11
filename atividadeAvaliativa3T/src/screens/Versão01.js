import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-web';

const Versão01 = () => {
  const [valorA, setValorA] = useState('')
  const [valorB, setValorB] = useState('')
  const [resultado, setResultado] = useState()

  return (
    <View style={styles.principalStyle}>
      <View style={styles.inputViewStyle}>
        <Text style={styles.textStyle}>Valor A:</Text>
        <TextInput
          style={styles.txtInputStyle}
          value={valorA}
          onChangeText={(text) => setValorA(text)}
        />

        <Text style={styles.textStyle}>Valor B:</Text>
        <TextInput
          style={styles.txtInputStyle}
          value={valorB}
          onChangeText={(text) => setValorB(text)}></TextInput>
      </View>

      <View style={styles.btnViewStyle}>
        <TouchableOpacity style={styles.btnStyle}
          onPress={() => {

            setResultado(parseFloat(valorA) + parseFloat(valorB))

            console.log({resultado})

          }}
        ><Text style={styles.textStyle}>"Soma A + B"</Text></TouchableOpacity>

        <TouchableOpacity style={styles.btnStyle}
          onPress={() => {

            setResultado(parseFloat(valorA) - parseFloat(valorB))

            console.log({resultado})

          }}
        ><Text style={styles.textStyle}>"Subtrai A - B"</Text></TouchableOpacity>

        <TouchableOpacity style={styles.btnStyle}
          onPress={() => {
            setResultado(parseFloat(valorA) * parseFloat(valorB))

            console.log({resultado})

          }}
        ><Text style={styles.textStyle}>"Multiplica A * B" </Text></TouchableOpacity>

        <TouchableOpacity style={styles.btnStyle}
          onPress={() => {

            setResultado(parseFloat(valorA) / parseFloat(valorB))

              console.log({resultado})

          }}
        ><Text style={styles.textStyle}> "Divide A / B" </Text></TouchableOpacity>
      </View>
      <Text style={styles.txtResultStyle}>Resultado: {resultado}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  principalStyle: {
    padding: 20,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inputViewStyle: {

  },
  textStyle: {
    fontSize: 25,
  },
  txtResultStyle: {
    fontSize: 25,
    width: '100%',
    textAlign: 'center',
    fontWeight: "bold",
  },
  txtInputStyle: {
    fontSize: 45,
    borderColor: 'black',
    borderWidth: 2,
  },
  btnViewStyle: {
    height: '50%',
    justifyContent: 'space-between',

  },
  btnStyle: {
    height: '20%',
    backgroundColor: '#DAE8FC',
    borderWidth: 2,
    borderColor: '#96B0D6',
    textAlign: 'center',
    justifyContent: 'center',
  }
})

// PART 4 - EXPORT THE COMPONENT SO WE CAN USE IT ELSEWHERE IN OUR PROJECT
export default Versão01



