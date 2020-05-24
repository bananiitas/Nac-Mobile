import React,{Component, useState} from 'react';
import {
Text,
View,
StyleSheet,
FlatList,
SafeAreaView,
TouchableHighlight, 
Image, 
ImageBackground} from 'react-native';
import Constants from 'expo-constants';

var count = 1;

//função que gera cada elemento
function Item({avatar, nome, sobrenome}){ 

  return(
    <View style = {styles.container}>
    <View style={styles.item}>
      <Image source = {{uri:avatar}} style = {styles.avatar}/>
      <Text style = {styles.text}>{nome} {sobrenome}</Text>
    </View>
    </View>
  );
}

class App extends Component{
  
  constructor(props) {
      super(props);
      
      this.state = {
        listdata: [],
      };
  }

  componentDidMount(){
    this.fetchJSON();

  }

  fetchJSON(){
    fetch("https://reqres.in/api/users?page=" + count)
    .then(response => response.json())
    .then((responseJson)=> {

      var list = responseJson['data']

      this.setState({listdata: list})

    })
    .catch(error=>console.log(error))
  }



  render(){
    return(
    <View style={styles.container}>
     <ImageBackground
        source={require('../images/fundo.png')}
        style={styles.image}>
       <Text style = {styles.textPage}> User's List
         </Text>
      <FlatList
        data={this.state.listdata}
        renderItem={({item}) =>             
            <Item avatar = {item.avatar} nome={item.first_name} sobrenome={item.last_name}/>
        }/> 
             <TouchableHighlight style = {styles.button}
        title = "Next Page"
              onPress={() =>{count= count==1?2:1 
              this.fetchJSON()}}>
              <Text style={styles.buttonText}>
              Next Page</Text>
            </TouchableHighlight>
        </ImageBackground> 
    </View>
    )
  }
}
export default App

const styles = StyleSheet.create({
  container:{
      flex: 1, 
      justifyContent: 'center', 
  },
  image:{
    height: '100%',
    width: '100%',
  },
  
  item: {
    borderRadius: 30,
    backgroundColor: '#F2F2F2',
    //borderWidth: 2,
    marginTop: 20,
    width: '80%',
    marginLeft: '10%',
    height: 50,
    flexDirection: 'row'
    
  },
  avatar: {
    borderRadius: 50,
        width: 50,
        height: 50,
  }, 
  text:{
    fontSize: 15,
    marginTop: '5%',
    marginLeft: '5%'
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center', 
    height: 50, 
    width: '50%',
    backgroundColor: '#F2F2F2', 
    borderRadius: 30,
    marginLeft: '25%', 
    marginBottom: 80,
    opacity: 0.8,
    },

//   buttonText:{
//       color: '#000000',
//       fontSize: 15, 
//   }, 
  textPage:{
    marginTop: 10,
    color: '#F2B705', 
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});