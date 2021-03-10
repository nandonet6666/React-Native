import React,{Component} from 'react';
import { StyleSheet, Text, View,Image, FlatList } from 'react-native';
import ImagemLogo from './src/components/ImagemLogo';
import Produto from './src/Components/Produto';


  class App extends Component {

    constructor(props){
      super(props);
      this.state ={
        supermercado:[
          {PRODUTO:'ARROZ', VALOR: 20.55,MARCA: 'VASCONSELOS',QUANTIDADE: 12,DESCONTO: 10,PROMOÇAO:'Leve 5 e Pague 4',REF: 1},
          {PRODUTO:'FEIJAO', VALOR: 10.48,MARCA: 'VASCONSELOS',QUANTIDADE: 20,DESCONTO: 10,REF: 2,PROMOÇAO:'Leve 5 e Pague 5',REF: 2},
          {PRODUTO:'DETERGENTE', VALOR: 7.29,MARCA: 'YPÉ',QUANTIDADE: 22,DESCONTO: 5,PROMOÇAO:'Leve 10 e Pague 9',REF: 3},
          {PRODUTO:'M PASTEL', VALOR: 8.67,MARCA: 'NAPOLES',DESCONTO: 15,QUANTIDADE: 30,PROMOÇAO:'Leve 5 e Pague 3',REF: 4},
          {PRODUTO:'G ANTATICA', VALOR: 9.17,MARCA: 'ANTATICA',DESCONTO: 10,QUANTIDADE: 60,PROMOÇAO:'Leve 5 e Pague 6',REF: 5},
          {PRODUTO:'G MINEIRO', VALOR: 9.20,MARCA: 'MINEIRO',DESCONTO: 10,QUANTIDADE: 12,PROMOÇAO:'Leve 3 e 2',REF: 7}
        ]
      }
    }







    render() {

      return (
        <View style={{flex: 1,flexDirection:'column' ,JustifyContent:'center'}}>
        
          <View style={{height:90,backgroundColor:'#4169E1'}}>
          <ImagemLogo larguraLogo={50} alturaLogo={50} />
        
         </View>
          <View style={{flex: 1,backgroundColor:'#FFFFFF'}}> </View>
          <Text style={Styles.listaproduto}>Lista De Produtos<br /></Text>
          <FlatList 
          data={this.state.supermercado}
          renderItem= {({item}) => <Produto produto={item.PRODUTO}
                                            marca={item.MARCA}
                                            valor={item.VALOR}
                                            quantidade={item.QUANTIDADE}    
                                          
                                            id={item.REF}  
                                            desconto = {item.DESCONTO}
                                            promocao = {item.PROMOÇAO}/>} 
          />
          <View style={{height:70,backgroundColor:'#696969'}}> </View>

        </View>
        
   
      );




    }
  }


  const Styles = StyleSheet.create({
    listaproduto: {
      position: 'absolute',
      top:88,
      fontSize:22,
      fontWeight: "bold"

    }


  })





export default App;
