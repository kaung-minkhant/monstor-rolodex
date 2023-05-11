import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monstors: [],
      searchField: ''
    }
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({monstors: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {monstors, searchField} = this.state;
    const filteredMonstors = monstors.filter(monstor => 
      monstor.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
      <h1>Monstor Rolodex</h1>
      <SearchBox 
        placeholder = 'search monstors'
        handleChange = {this.handleChange}
      />
      <CardList monstors = {filteredMonstors}/>
    </div>
    )
  }
}

export default App;
