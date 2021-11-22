import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const [numero, setNumero] = useState(0);

  function handleNumero() {
    const novo_numero = Math.floor(Math.random() * 60);
    setNumero(novo_numero);
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={style.botao}>
        <Text>Gerar Número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#de2d10',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {
    fontSize: 38,
    color: '#fff',
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#fff',
    width: '90%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default App;
