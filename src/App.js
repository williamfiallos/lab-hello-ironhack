import React, { Component } from "react";
import "./App.css";

class App extends Component {

  render() {

    const formatName = (user) => {
      return `${user.firstName} ${user.lastName}`;
    }
   
    const user = {
      firstName: 'Harper',
      lastName: 'Perez',
      avatarUrl:'http://www.kodlamaker.com/wp-content/uploads/2015/10/codingforkids.png'
    };
  
    const displayAvartar = (user) => {
      if(user.avatarUrl){
        return <img src={user.avatarUrl} />
      } else {
        return <img src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' width='300' height='300'/>
      }
    }
    
    const element = (
      <h2>
        Hello, {formatName(user)}!
      </h2>
    );
 
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
        {element}
        {displayAvartar(user)}
      </div>
    );
  }
}

export default App;