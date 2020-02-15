import React, {Component} from 'react';
import { Title } from "./componets/Title";
import { SearchForm } from "./componets/SearchForm";
import { MoviesList } from './componets/MoviesList';

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component{
  state = { results: [] }

  _handleResults = (results) => {
    this.setState({ results })
  }

  render() {
    return (
      <div className="App">
        <Title>Buscar películas</Title>
        <div className="SearchForm-wrapper">
         <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.results.length === 0
          ? <p> Sin Resultados</p>
          : <MoviesList movies={this.state.results}/>
        }
      </div>
    );  
  }
}

export default App;
