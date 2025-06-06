import React, {useEffect, useState, Component} from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {data: []};
  }

  fetchData = () => {
    fetch('http://localhost:8080/test')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch clubs');
        }
        return response.json();
      })
      .then((data) => {
        console.log("Personal data successfully retrieved")
        //map data from api to a JS object so that it can be added to the state
        const formattedData = data.map()
      });
  };
  render(){
    return(
      <div className = "App">
        <div className = "Spacer"></div>
        <div className = "Box">
          <div className = "header">About Me</div>
          <div className = "content">My name is Douglas Tavolette, and I'm currently studying Software Engineering at Rochester Institute of Technology. 
            I've finished 2 years of classes, and I've worked with Java, Python, SQL, and JavaScript, alongside other languages at RIT. 
            You can see some of the projects I've worked on both in and out of class on my {" "}
            <a href = "https://github.com/Doug-Tavolette" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            .
            </div>
        </div>
      </div>
    )
  }
}

export default App;
