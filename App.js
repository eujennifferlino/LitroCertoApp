import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Keyboard } from "react-native";

export default function App(){
  const myImage = require('./src/images/logo.png');
  const myImage2 = require('./src/images/gas.png');
  const [result, setResult] = useState(null);
  const [alcoholPrice, setAlcoholPrice] = useState('');
  const [gasPrice, setGasPrice] = useState('');
  const [showResult, setShowResult] = useState(false);

  const calculate = () => {
    const division = parseFloat(alcoholPrice) / parseFloat(gasPrice);
    if (division < 0.7) {
      setResult('Compensa usar o Álcool!');
    } else {
      setResult('Compensa usar a Gasolina!');
    }
    setShowResult(true);
    Keyboard.dismiss();
  };

  const reset = () => {
    setResult(null);
    setAlcoholPrice('');
    setGasPrice('');
    setShowResult(false);
  };

  return(
    <View style={styles.container}>
      {showResult ? (
        <>
          <Image source={myImage2} style={styles.img} />
          <Text style={[styles.result, { color: '#0CDF1B' }]}>{result}</Text>
          <TouchableOpacity style={styles.buttonResult} onPress={reset}>
            <Text style={styles.buttonTextResult}>Calcular novamente</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Image source={myImage} style={styles.img} />
          <Text style={styles.text}>Qual é mais vantajoso?</Text>
          <TextInput
            style={[styles.input, { textAlign: 'center' }]}
            placeholder='Preço do álcool por litro'
            placeholderTextColor="#CDCDCD"
            keyboardType='numeric'
            value={alcoholPrice}
            onChangeText={setAlcoholPrice}
            onSubmitEditing={Keyboard.dismiss}
          />
          <TextInput
            style={[styles.input, { textAlign: 'center' }]}
            placeholder='Preço da gasolina por litro'
            placeholderTextColor="#CDCDCD"
            keyboardType='numeric'
            value={gasPrice}
            onChangeText={setGasPrice}
            onSubmitEditing={Keyboard.dismiss}
          />
          <TouchableOpacity style={styles.button} onPress={calculate}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#121212',
    justifyContent:'center'
  },
  img:{
    width:180,
    height:180,
    alignSelf: 'center',
  },
  text:{
    fontSize:28,
    fontWeight:'bold',
    color:'#F3F9FF',
    margin:18,
    textAlign:'center'
  },
  input:{
    backgroundColor:'#F3F9FF',
    borderRadius:10,
    margin:15,
    padding:10,
    fontSize:20,
    color:'#000',
  },
  button:{
    backgroundColor:'red',
    borderRadius:10,
    margin:15,
    padding:10,
    fontSize:20,
  },
  buttonText:{
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    color:'#F3F9FF'
  },
  result:{
    fontSize:28,
    fontWeight:'bold',
    color:'#F3F9FF',
    margin:18,
    textAlign:'center'
  },
  buttonResult:{
    backgroundColor:'transparent',
    borderRadius:10,
    borderWidth:2,
    borderColor:'red',
    padding:10,
    fontSize:20,
    margin:15,
  },
  buttonTextResult:{
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    color:'red'
  }
})
