import React, {useEffect, useState, Component} from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {data: {}};
  }

  fetchData = () => {
    const gitHubData = {};
    // fetch("http://localhost:8080/api/steam")
    fetch("https://api.github.com/users/DouglasTavolette/events", {
        headers: {
          Authorization: "token ",
        },
        })
        .then(res => res.json())
        .then(data => Object.assign(gitHubData, data))
        .catch(err => console.error("Fetch error:", err));

        // for (var i = 0; i < gitHubData.length; i++){
        //   gitHubData[i].type ? "PushEvent" : this.setState();
        // }


        // for item in data:
        //   if item.type == "PushEvent":
        //     this.setState(item.payload.commits[0].message)
        //payload.commits[0].message

    // fetch('http://localhost:8080/api/test')
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch clubs');
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("Personal data successfully retrieved")
    //     this.setState({data});
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data: ", error);
    //   });
      };

  componentDidMount(){
    this.fetchData();
  }
  render(){
    const {data} = this.state;
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
          <h1>GitHub User Info</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre> {/* This prints the whole state */}
        </div>
      </div>
    )
  }
}

export default App;
