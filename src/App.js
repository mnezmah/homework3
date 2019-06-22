import React, { Component } from 'react'
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import Select from './components/Select'

class App extends Component {
  render() {
   
    return (
      <Provider store={store}>
        <div className="App">
         <Select />
        </div>
      </Provider>
    );
  }
}

export default App;
