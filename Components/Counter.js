import React from "react";
import {Text,View,StyleSheet,Button} from "react-native";

export default class Counter extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			min:5,
			sec:0,
		};
	}

	dec(){
		if(this.props.who == this.props.id)
			if(this.state.min==0 && this.state.sec==0)
			{
				this.setState({
					min:5,
					sec:0,
				})
			}
			else if(this.state.sec==0)
			{
				this.setState({
					min:this.state.min-1,
					sec:59,
				})
			}
			else
			{
				this.setState({
					min:this.state.min,
					sec:this.state.sec-1,
				})
			}
	}
	componentDidMount(){
		setInterval(()=>this.dec(),1000);
	}

	 render() {
	 	if(this.props.type=="white")
		    return (
		      <View style={styles.counter}>
		        <Text style={styles.timer}> {this.state.min}:{this.state.sec} </Text>
		      </View>
		    );
		else 
			return(
				<View style={styles.counter2}>
		        	<Text style={styles.timer2}> {this.state.min}:{this.state.sec} </Text>
		        </View>
				);
  }
}

const styles = StyleSheet.create({
	timer:{
		fontSize:75,
	},
	timer2:{
		fontSize:75,
		color:"#fff",
		backgroundColor:"#000",
	},
	counter:{
		flex:1,
    alignItems:"center",
    justifyContent:"center"
	},
	counter2:{
		flex:1,
    alignItems:"center",
    justifyContent:"center",
	backgroundColor:"#000",
	width:"100%",
	}
});