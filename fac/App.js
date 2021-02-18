import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,Button} from 'react-native';

class App extends Component {

render() {
  let marca = "Curso do React";  
  let Nome = "Fernando";
  
 return( 
 <View style={Styles.container}>
   <div style={{width:400}}>
   <div style={{position:'relative',left:20}}>
      <Text style={Styles.fonteTitulo}><strong>Seja Bem Vindo no APP</strong></Text>
      <br />
      <Text style={Styles.fonteSubTitulo}>Vamos começar a estudar <strong>{marca}</strong></Text>
      <br />
      <Text style={Styles.fonteSubTitulo,{position:'relative',left:100}}>Ola <strong>{Nome}</strong></Text>
  </div>
  <div>
      <Image style = {Styles.imagem}
        source = {require('./imagem/imagem.png')}
        style={{width:250,height:200, paddingBottom:5,position:'relative',left:50}}
   />
      <Text style={Styles.divImagem}>Logo do React</Text>
  </div>
   <br />
    <div>
    <Image style = {Styles.imagem}
      source = {require('./imagem/imagem2.png')}
      style={{width:250,height:200,position:'relative',left:50}}
   />
   <Text style={Styles.divImagem}>Script do React</Text>

   </div>
   <br />
  <div style={{width:250,position:'relative',left:50}}>
   <Button

          title="Entrar"
          color="#841584"
 
   /> 
  </div>

</div>  


  </View>
 )
}

}

const Styles = StyleSheet.create({
  container:{
    margin: 20,
    padding:5

  },
  
  fonteTitulo:{
    fontSize:25,
    position:'relative',left:20,
    color:'#0000CD'
  },
  fonteSubTitulo:{
    fontSize:12,
    position:'relative',
    left:50
  },

  divImagem:{
    position:'relative',
    left:125

  },
  
  divButton:{
    width: 50
    
  }

})
export default App;
