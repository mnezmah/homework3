import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { addModel } from './actions/addModel'
import Models from './components/Models'

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

class App extends Component {
  state = {
    selection: ""
  }

  updateSelection = (e) => {
    const option = e.target.value
    this.setState({
      selection: option
    })
  }

  onClickHandler = (e) => {
    e.preventDefault()
    const rightItem = data.find(entry => {
      if (this.state.selection === entry.name) {
        return entry
      }
    })
    this.props.addModel(rightItem)
  }

  render() {
    return (
      <div className="App">
        {this.props.selectedModels.map(selectedModel => {
          return <Models
            key={selectedModel.name}
            name={selectedModel.name}
            manufacturer={selectedModel.manufacturer}
            year={selectedModel.year}
            origin={selectedModel.origin} />
        })
        }
        <select onChange={this.updateSelection}>
          <option value="">-- pick  a model --</option>
          {data.map(model => {
            return <option
              key={model.name}
              value={model.name}>
              {model.name} ({model.year})
            </option>
          })}
        </select>
        <button onClick={this.onClickHandler}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedModels: state.reducer
  }
}

export default connect(mapStateToProps,
  {
    addModel
  }
)(App);

