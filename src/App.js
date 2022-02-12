import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  // mount is when react renders component on the DOM for the first time
  // when that happens, react renders whatever is in componentDidMount
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        {/* - setState is an asynchronous function call
            - synchronous actions happen immediatey and js knows amount of time it would take.
            - js would wait for synchronous action to finish before continuing
            - asynchronous action takes indefinite amount of time that js does not know
            - js runs rest of code and returns to asynchronous action when it has finished running */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
