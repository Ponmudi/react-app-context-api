import React, { Component, Fragment } from 'react';
import './App.css';
//import Person from './components/Person';

const MyContext = React.createContext();

class MyProvider extends Component {

  state = {
    name: 'Ponmudi',
    age: 35
  };

  render(){
    return (
      <MyContext.Provider value=
      {{
        name: this.state.name,
        age: this.state.age,
        makeAgeOlder: () => {
          this.setState((prevState) => ({
            age: prevState.age + 1
          }))
        }
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = (props) => {
  return (
    <div className="family">
      <Person />
    </div>
  )
}

class Person extends Component{
  render (){
    return (
      <div className="person">
        <MyContext.Consumer>
        {context => <Fragment>
            <p>Name: {context.name}</p>
            <p>Age: {context.age}</p>
            <button onClick={context.makeAgeOlder}>Make Age Older</button>
          </Fragment>
        }
        </MyContext.Consumer>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
    <MyProvider>
      <div className="App">
        <h2>My first context app</h2>
        <Family />
      </div>
    </MyProvider>
    );
  }
}

export default App;
