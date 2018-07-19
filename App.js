import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import Constants from "expo";
import Counter from "./Components/Counter";

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      decerasing:"true",
    }
  }
  switch(){
      if(this.state.decerasing=="true")
      this.setState({
        decerasing:"false",
      })
      else
        this.setState({
        decerasing:"true",
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.counter}>
          <Counter  type="white" who={this.state.decerasing} id="true"/>   
        </View>
          
        <View style={{height:20}}>
          <Button title="SWITCH!!" onPress={()=>this.switch()} style={styles.but} color="#414a4c" />
        </View>

        <View style={styles.counter}>
          <Counter  type="black" who={this.state.decerasing} id="false"/>   
        </View>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    paddingTop:Constants.StatusBarHeight,
  },
  counter:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  but:{
    fontSize:30,
    backgroundColor:"#fff",
    color:"#fff"
  }
});
