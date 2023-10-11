import React, { useState } from 'react'
// IMPORT FlatList
import { Text, StyleSheet } from 'react-native'
import { TouchableOpacity, View } from 'react-native-web'

const Versão02 = () => {
  // CREATE AN ARRAY OF OBJECTS
  const [n1, setN1] = useState('')
  const [n2, setN2] = useState('')
  const [operacao, setOperacao] = useState('')
  const [txt, setTxt] = useState('')
  const descobreV2 = (op, n) => {

    if (op == '') {
      setN1(n1 + n)
    } else {
      setN2(n2 + n)
    }
    setTxt(txt + n)
  }
  const calculo = () => {
    switch (operacao) {
      case '+':
        setTxt(parseFloat(n1) + parseFloat(n2))
        setN1(parseFloat(n1) + parseFloat(n2))
        break
      case '-':
        setTxt(parseFloat(n1) - parseFloat(n2))
        setN1(parseFloat(n1) - parseFloat(n2))
        break
      case 'x':
        setTxt(parseFloat(n1) * parseFloat(n2))
        setN1(parseFloat(n1) * parseFloat(n2))
        break
      case '/':
        setTxt(parseFloat(n1) / parseFloat(n2))
        setN1(parseFloat(n1) / parseFloat(n2))
        break
    }
    setOperacao('')
    setN2('')
    
    console.log(txt, ' ', n1, ' ', n2, ' ', operacao)
  }

  return (
    <View style={styles.principalStyle}>
      <View style={styles.clearStyle}>
        <TouchableOpacity style={styles.btnClearStyle}
          onPress={() => {
            setN1('')
            setN2('')
            setTxt('')
            setOperacao('')
          }}>
          <Text style={styles.txtStyle}>C</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.fakeInputStyle}>{txt}</Text>

      <View style={styles.viewTecladoStyle}>
        <View style={styles.viewBtnNumtyle}>
          <View style={styles.viewBtnNumHorizontalStyle}>
            <TouchableOpacity style={styles.btnNumberStyle}
              onPress={() => {
                descobreV2(operacao, '7')
              }}
            >
              <Text style={styles.txtStyle}>7</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnNumberStyle}
              onPress={() => {
                descobreV2(operacao, '8')

              }}>
              <Text style={styles.txtStyle}>8</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnNumberStyle}
              onPress={() => {
                descobreV2(operacao, '9')


              }}>
              <Text style={styles.txtStyle}>9</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewBtnNumHorizontalStyle}>
            <TouchableOpacity style={styles.btnNumberStyle}
              onPress={() => {
                descobreV2(operacao, '4')


              }}>
              <Text style={styles.txtStyle}>4</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnNumberStyle}
              onPress={() => {
                descobreV2(operacao, '5')

              }}>
              <Text style={styles.txtStyle}>5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnNumberStyle}
              onPress={() => {
                descobreV2(operacao, '6')


              }}>
              <Text style={styles.txtStyle}>6</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewBtnNumHorizontalStyle}>
            <TouchableOpacity style={styles.btnNumberStyle}
              onPress={() => {
                descobreV2(operacao, '1')


              }}>
              <Text style={styles.txtStyle}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnNumberStyle}
              onPress={() => {
                descobreV2(operacao, '2')


              }}>
              <Text style={styles.txtStyle}>2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnNumberStyle}
              onPress={() => {
                descobreV2(operacao, '3')


              }}>
              <Text style={styles.txtStyle}>3</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewBtnNumHorizontalStyle}>
            <TouchableOpacity style={styles.btnNumberStyle}
              onPress={() => {
                descobreV2(operacao, '0')


              }}>
              <Text style={styles.txtStyle}>0</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnResStyle}
              onPress={() => {
                calculo()

              }}>
              <Text style={styles.txtStyle}>=</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.ViewBtnOperadoresStyle}>
          <TouchableOpacity style={styles.btnOperadoresStyle}
            onPress={() => {
              setOperacao('+')
              setTxt(txt + '+')
            }}>
            <Text style={styles.txtStyle}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnOperadoresStyle}
            onPress={() => {
              setOperacao('-')
              setTxt(txt + '-')
              console.log(txt)
            }}>
            <Text style={styles.txtStyle}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnOperadoresStyle}
            onPress={() => {
              setOperacao('x')
              setTxt(txt + 'x')
              console.log(txt)
            }}>
            <Text style={styles.txtStyle}>x</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnOperadoresStyle}
            onPress={() => {
              setOperacao('/')
              setTxt(txt + '/')
              console.log(txt)
            }}>
            <Text style={styles.txtStyle}>/</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  principalStyle: {
    padding: 20,
    width: '100%',
    height: '100%',

  },
  fakeInputStyle: {

    height: 45,
    borderWidth: 2,
    fontSize: 25,
  },
  viewTecladoStyle: {
    paddingTop: 15,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  viewBtnNumtyle: {
    justifyContent: 'space-between',
    height: 300,
    width: '75%',
  },
  viewBtnNumHorizontalStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnClearStyle: {
    backgroundColor: '#F8CECC',
    borderColor: '#C36B67',
    borderWidth: 2,
    width: 60,
    height: 60,
    textAlign: 'center',
    justifyContent: 'center',
  },
  btnNumberStyle: {
    backgroundColor: '#DAE8FC',
    borderColor: '#96B0D6',
    borderWidth: 2,
    width: 60,
    height: 60,
    textAlign: 'center',
    justifyContent: 'center',
  },
  btnResStyle: {
    backgroundColor: '#D5E8D4',
    borderColor: '#98C082',
    borderWidth: 2,
    height: 60,
    width: '60%',
    justifyContent: 'center',
    textAlign: 'center',
  },
  ViewBtnOperadoresStyle: {
    justifyContent: 'space-between',
  },
  btnOperadoresStyle: {
    backgroundColor: '#E1D5E7',
    borderColor: '#B095BC',
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    height: 60,
    width: 60,

  },
  txtStyle: {
    fontSize: 20,
  },
  clearStyle: {
    alignItems: 'flex-end',
    paddingBottom: 15,
  }
})

export default Versão02