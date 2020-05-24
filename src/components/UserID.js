import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  ImageBackground,
  Image,
  ActivityIndicator,
  AsyncStorage,
} 
from 'react-native'; 
import PropTypes from 'prop-types'; 

export default class UserID extends Component{
  
  constructor (props){
    super(props);

    this.state = {
      loading: true,
      image_source: '',
      first_name: '',
      last_name: '',
      email: '',
    };

  }
  
  async componentDidMount(){

    let valueID = 0;

    try{
     valueID = await AsyncStorage.getItem("@User");
      
      if(valueID === null){
        valueID = 1;
      }
    } catch(e){
      alert(e);
    }   
  
      fetch("https://reqres.in/api/users/5")
      .then(response => response.json())
      .then((responseJson)=> {
        var id = responseJson['data']['id']
        var image_source = responseJson['data']['avatar']
        var first_name = responseJson['data']['first_name']
        var last_name = responseJson['data']['last_name']
        var email = responseJson['data']['email']
        
        this.setState({
          id: id,
          image_source: image_source,
          first_name: first_name,
          last_name: last_name,
          email: email,
          loading: false
         })
      })
      .catch(error => console.log(error))
  }
  
  render(){

    return(
      <View style = {styles.container}>
         
        <ImageBackground
        source={require('../images/fundo.png')}
        style={styles.image}>

        <Text style = {styles.text}>
        {'About User ID: '}
        </Text>

         <Image
        style={styles.avatar}
        source={{uri: this.state.image_source}}
        />

        <View style = {styles.info}>
        <Text>{'Name:' + ' ' + this.state.first_name}</Text>
        <Text>{'Last Name:' + ' ' + this.state.last_name}</Text>
        <Text>{'Email:' + ' ' + this.state.email}</Text>
        </View>
        </ImageBackground>

      </View>
    )}
  }
//}

const styles = StyleSheet.create({
  // loading: {
  //   flex: 1, 
  //   justifyContent: 'center', 
  //   alignItems: 'center',
  // },
  // loadingText:{
  //   fontSize: 10,
  //   color: '#F2F2F2',
  // },
  // imageLoading: {
  //   height: '100%',
  //   width: '100%',
  // },
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  info:{
    textAlign: 'center', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: '5%',
    width: '80%',
    marginLeft: '10%', 
    backgroundColor: '#F2F2F2',
    color: '#262626',
    borderRadius: 50,
  },
  avatar: {
    width: 200,
    height: 200,
    marginTop: 15,
    marginLeft: '25%',
    borderRadius: 200
  }, 
  text: {
    marginTop: '20%',
    fontSize: 25, 
    padding: 20,
    fontWeight: 'bold',
    color: '#F2F2F2', 
    textAlign: 'center',
  },
});