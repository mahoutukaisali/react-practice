import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    /* super() calls the constructor method on the component class
    so that it enables us to access state property*/
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    // .bind() is an method of any function
    this.handleChange = this.handleChange.bind(this);
  }
  // this component will be readed whenever open a page
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }
  // explicitly "state" what context I want "this" to be. 
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  /* render() will call a state below as soon as state is changed 
    a CardList tag comes from CardList variable in card-list.component.jsx */
  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Monster Roboex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
        
      </div> 
    );
  }
};

export default App;
