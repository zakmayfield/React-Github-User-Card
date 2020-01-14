import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard'
import SearchForm from './components/SearchForm'

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
    followers: [],
    searchText: "zakmayfield"
  }
  
  //we can use state={} because if we are using arrow functions, constructor() and super() are already built under the hood

  componentDidMount(){
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
      axios.get(`https://api.github.com/users/${this.state.searchText}/followers`)
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

  handleChange = e => {
    this.setState({
      searchText: e.target.value
    })
  }

  fetchPerson = e => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.searchText}`)
      .then(res => {
        console.log('Fetch person Success', res)
        this.setState({
          person: res.data
        })
      })
      .catch(err => {
        console.log('Error', err)
        alert('Please fill out the form before submitting!')
      })
  }

  render(){
    return(
      <div className="App">
        <h2>Github User Card</h2>
        <SearchForm searchText={this.state.searchText} handleChange={this.handleChange} fetchPerson={this.fetchPerson} />
        <UserCard person={this.state.person} followers={this.state.followers} />
      </div>
    )
  }
}

export default App;
