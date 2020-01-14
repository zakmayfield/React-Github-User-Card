import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard'

class App extends React.Component{
  /*
    constructor(){
      super();
      this.state=({
        state: []
      })
    }
  */
  
  state={
    person: [],
    followers: []
  }
  
  //we can use state={} because if we are using arrow functions, constructor() and super() are already built under the hood

  componentDidMount(){
    console.log('Mounted')
    axios.get('https://api.github.com/users/zakmayfield')
      .then(res => {
        console.log('SUCCESS in CDM', res)
        const person = res.data
        this.setState({
          person: person
        })
      })
      .catch(err => {
        console.log('ERROR', err)
      })
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.person !== prevState.person){
      axios.get('https://api.github.com/users/zakmayfield/followers')
        .then(res => {
          console.log('Success in CDU', res)
          const followers = res.data;
          this.setState({
            followers: followers
          })
        })
        .catch(err => {
          console.log('ERROR in componentDidUpdate', err)
        })
    }
  }

  render(){
    console.log('Rendering')
    return(
      <div className="App">
        <h2>Github User Card</h2>
        <UserCard person={this.state.person} followers={this.state.followers} />
      </div>
    )
  }
}

export default App;
