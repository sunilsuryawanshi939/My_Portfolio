import React from "react";

class Counter extends React.Component{
	constructor(){
		super();
		this.state={
			count :0
		};
		this.increase=this.increase.bind(this);
		this.reset=this.reset.bind(this);
	}
	
increase(){
	this.setState({count : this.state.count +1});
}

reset(){
	this.setState({count : 0});
}

	render(){
		return (
			<div style={{margin:'30px',textAlign:'center'}}>
			<h1>Counter App </h1>
			<h1 style={{fontSize:'50px'}}>{this.state.count}</h1>

			<div style={btndiv}> 
				<button style={btn} onClick={this.increase}> + </button>
				<button style={btn} onClick={this.reset}> Reset </button></div>
			</div>
		)
	}
}

var btn={
	// display: 'flex',
	//padding :'0px 20px',
	margin: '0px 20px',
	justifyContent: 'center',
    alignItems: 'center',
	color : 'blue',
	fontSize :'20px',
	height: "80px",
    width: "80px",
	cursor: 'pointer',
	borderRadius :'50%',
	background: '#fcfcfc', 
    boxShadow:  '5px 5px 23px #8c8c8c,-5px -5px 23px #ffffff',  //8c8c8c
};

var btndiv={
	display:'flex',
	padding :'15px',
	justifyContent :'center'
};


export default Counter;
