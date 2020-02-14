import React, {Component} from 'react';
import { Title } from "./componets/Title";
import { SearchForm } from "./componets/SearchForm";
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component{
  render() {
    return (
      <div className="App">
        <Title>Buscar películas</Title>
        <div className="SearchForm-wrapper">
         <SearchForm/>
        </div>
      </div>
    );  
  }
}

export default App;
