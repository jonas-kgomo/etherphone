import React, { Component } from 'react';
import { StyleSheet, Text, View, Image , TouchableOpacity} from 'react-native';
const { LinearGradient } = Components;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.grad}>
        
        <Text>ETHERPHONE</Text>
        {/* <TouchableOpacity>
        <Image style={styles.logo} source={require("../etherfone/assets/gammusic.jpg")}/>
        </TouchableOpacity> */}
       
        <LinearGradient
          colors={['rgba(0,0,0,0.6)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 300,
          }}

          />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  grad: {
    flex: 1,
    backgroundColor: 'orange',
    //backgroundColor: radial-gradient(red, green, blue),
    alignItems: 'center',
    justifyContent: 'center',
  },

 
});
