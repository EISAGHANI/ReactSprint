import { Component } from 'react';
import './App.css';


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

  render() {
    const filteredMonsters = this.state.monsters.filter( (monster)  => {
      return monster.name.toLowerCase().includes(this.state.searchValue);
    })

    return (
      <div className="App">
        <input 
          className='search-box' 
          type='text'
          onChange={(event) => {
            const searchValue = event.target.value.toLowerCase();
            this.setState(() => {
              return {searchValue}
            })
          }}
        />
        {
          filteredMonsters.map ( (monster) => {
            return (
              <div key= {monster.id}>
                <h1>{monster.name}</h1>
              </div>
            ) 
            }
          )
        }
      </div>
    );
  }
}


export default App;
