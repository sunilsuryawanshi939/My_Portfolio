import React from 'react';
import ReactDOM from 'react-dom';
//to change the css dynamically

class Content extends React.Component {
   constructor() {
      super();
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
   };
   
   findDomNodeHandler() {
      var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'red';
   }
   render() {
      return (
         <div>
            <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
            <div id = "myDiv">
            <h1>NODE</h1></div>
         </div>
      );
   }
}
export default Content;