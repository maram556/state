import React from "react";
import './App.css';
import './LinaNecib.jpg'



class App extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
      fullName: "Lina Necib",
      bio: "Professor Necib is an astroparticle physicist from tunisia, interested in understanding the origin of Dark Matter. She uses a combination of simulations and observational data to correlate the dynamics of Dark Matter with that of the stars in the Milky Way, and infer properties of Dark Matter.",
      imgSrc: './LinaNecib.jpg',
      profession:"Assistant Professor of Physics,As a theoretical astroparticle physicist, I work on using Galactic dynamics to understand properties of Dark Matter",
      bool: false,
      counter: 0,
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }, 1000);
  };

  toggle() {
    this.setState({ bool: !this.state.bool });
    if (!this.state.bool) {
      this.setState({ counter: 0 });
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.bool ? (
          <div>
            <h1  style={{ color: " #5B11E5" }}>
              {" "}
              If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you.{" "}
            </h1>
            <h2 style={{ color: "#0DB8EF" }}>Lina Necib bio</h2>
            <h3 style={{ color: "#9C9EAD" }}>
              This is {this.state.fullName}. {this.state.bio} .
            </h3>
            <img 
              src={this.state.imgSrc}
              width="400px"
              height="400px"
              alt="Lina Necib"
            />
            <h2 style={{ color: "#0DB8EF" }}>Profession</h2>
            <h3  style={{ color: "#9C9EAD" }}>{this.state.profession}</h3>
          </div>
        ) : null}
        <br /> <br />
        {this.state.bool ? (
          <div>
            <span style={{ color: "white" }}>
              {" "}
              {this.state.counter}
              {" Seconds"} <br />
              <br />
            </span>
            <button onClick={() => this.toggle()}>Hide It</button>
          </div>
        ) : (
          <button onClick={() => this.toggle()}>Show It</button>
        )}
        <br />
      </div>
    );
  }
}


export default App;
