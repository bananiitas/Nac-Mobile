import React, {Component} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native'; 
import PropType from 'prop-types'; 

export default function Home(props){

    return(
      <View style = {styles.container}>
        <ImageBackground
        source={require('../images/fundo.png')}
        style={styles.image}>
        <Text style = {styles.title}> 
          Welcome Stranger!
        </Text>

        <Text style = {styles.text}> 
          Click on the button to see the users.
        </Text>
       
         <TouchableOpacity style = {styles.button}
         title = "Search by ID"
         onPress={() => {props.navigation.navigate('Search User')}}>
             <Text style = {styles.buttonText}>
                Search by ID
            </Text>
        </TouchableOpacity >

        <TouchableOpacity style = {styles.button}
        title = "User List"
        onPress={() => {props.navigation.navigate('List')}}>
            <Text style = {styles.buttonText}>
                User List
            </Text>
        </TouchableOpacity>

        </ImageBackground>

      </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center', 
    },
    image: {
      height: '100%',
       width: '100%',
       flex: 1
    },
    title: {
      marginTop: '50%',
      fontSize: 25, 
      padding: 20,
      fontWeight: 'bold',
      color: '#F2F2F2', 
      textAlign: 'center',
    },
    text: {
      marginTop: 5,
      fontSize: 20, 
      padding: 30,
      color: '#F2F2F2', 
      fontWeight: 'bold',
      textAlign: 'center',
    },
    button:{
      alignItems: 'center',
      justifyContent: 'center', 
      height: 50, 
      width: '50%',
      backgroundColor: '#F2F2F2', 
      borderRadius: 30,
      marginLeft: '25%', 
      marginTop: 15,
      opacity: 0.8,
    }, 
    buttonText:{
      color: '#000000',
      fontSize: 15, 
    },
    input: {
        alignItems: 'center',
        justifyContent: 'center', 
        height: 50, 
        width: '40%',
        backgroundColor: '#F2F2F2', 
        borderRadius: 30,
        marginLeft: '25%', 
        marginTop: 15,
        fontSize: 15, 
        opacity: 0.8,
        textAlign: 'center'
      },
    });

