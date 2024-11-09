import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchValue: '',

    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => (response.json()))
      .then((users) => 
      this.setState(
        () => {
          return {monsters : users}
        },
        () => {
          console.log(this.state)
        }
      ) 
    )
  }

  onSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    this.setState(() => {
      return {searchValue}
    })
  }

  render() {
    const {monsters, searchValue } = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter( (monster)  => {
      return monster.name.toLowerCase().includes(searchValue);
    })

    return (
      <div className="App">
        
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox className= 'monster-search-box' placeholder = 'search monsters' onChangeHandler = {onSearchChange}/>
        <CardList monsters = {filteredMonsters} />
      </div>
    );
  }
}


export default App;
