import React, {Component} from 'react';
import PropType from 'prop-types'; 

import {
    Text,
    TextInput,
    StyleSheet,
    View,
    TouchableOpacity,
    ImageBackground,
    AsyncStorage
  } from 'react-native';

export default class Search extends Component{
  
    constructor (props){
      super(props);

      this.state = {
          num: 0
      };
    }
    screenUser = () => {
      props.navigation.navigate('Single User')}

    bringUser = async () => {
        try {
          await AsyncStorage.setItem('@User', this.state.num);
        } catch (e) {
          alert(e);
        }
      };

    render() {
    return (
        <View style={styles.container}>
            <ImageBackground
            source={require('../images/fundo.png')}
            style={styles.image}>
                
                <TextInput style={styles.input}
                placeholder = {'ID'}
                keyboardType = 'numeric'
                onChangeText={value => this.setState({ num: value })}
                />

                <TouchableOpacity style = {styles.button}
                title = "Search"
                onPress={() => {this.props.navigation.navigate('Single User')}}>
                    <Text style = {styles.buttonText}>
                        Search
                    </Text>
                </TouchableOpacity >

            </ImageBackground>
        </View>
    );
    }
}

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        height: '100%',
        width: '100%',
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
        fontSize: 15, 
        opacity: 0.8,
        textAlign: 'center'
      }, 
      input: {
        alignItems: 'center',
        justifyContent: 'center', 
        height: 50, 
        width: '40%',
        backgroundColor: '#F2F2F2', 
        borderRadius: 30,
        marginLeft: '25%', 
        marginTop: 300,
        fontSize: 15, 
        opacity: 0.8,
        textAlign: 'center'
      },
    });
    
