import React, { Component } from 'react'
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
// import Select from './components/Select'

class App extends Component {
  state = {
    selection: {}
  }

  updateSelection = (e) => {
    // e.preventDefault()
    console.log('i am clicked ;)')
    const option = e.target.value
    this.setState({
      selection: option
    })
    console.log('UPDATED STATE: ', this.state)
  }

  render() {
    const data = [
      {
        name: "Ivel Z3",
        manufacturer: "Ivasim",
        year: 1969,
        origin: "Croatia"
      },
      {
        name: "Bally Astrocade",
        manufacturer: "Bally Consumer Products",
        year: 1977,
        origin: "USA"
      },
      {
        name: "Sord M200 Smart Home Computer",
        manufacturer: "Sord Computer Corporation",
        year: 1971,
        origin: "Japan"
      },
      {
        name: "Commodore 64",
        manufacturer: "Commodore",
        year: 1982,
        origin: "USA"
      }
    ]
    console.log('STATE', this.state)
    return (
      <Provider store={store}>
        <div className="App">
          <select onChange={this.updateSelection}>
            <option value="">-- pick  a model --</option>
            {data.map(model => {
              return <option key ={model.name} value={model.name}>{model.name} ({model.year}) </option>
            })}
          </select>
          {/* <Select select ={this.props.updateSelection}/> */}
        </div>
      </Provider>
    );
  }
}

export default App;
