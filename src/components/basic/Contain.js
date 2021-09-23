import React, { Component } from 'react'
// import './Contain.css'
import Counter from './Counter';

var contain ={
    color:'red' ,
    //backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
    margin:'5% 25%',
    //for neumorphic
    border: '1px solid black',
    borderRadius: '23px',
    background: '#fcfcfc', // eaf0f1
    boxShadow:  '5px 5px 23px #8c8c8c,-5px -5px 23px #ffffff',

};

export default class Contain extends Component {
    render() {
        return (
        <div style={contain}>
            <Counter/>  
          </div>
  
        // <div className="contain">
        //   <h1> Hello World  </h1>  
        // </div>

        )
    }
}



