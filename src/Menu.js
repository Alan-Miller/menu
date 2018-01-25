import React, { Component } from 'react';
import './styles/App.css';
import axios from 'axios'

class Menu extends Component {
  constructor() {
    super()

    this.state = {
      foods: [],
      faves: [],
      discount: null
    }
    this.discount = this.discount.bind(this)
    this.addFave = this.addFave.bind(this)
  }

  componentWillMount() {
    axios.get('/api/foods').then(foods => { this.setState({ foods: foods.data }) })
    axios.get('/api/faves').then(faves => { this.setState({ faves: faves.data }) })
  }

  addFave(food) {
    axios.post('/api/faves', { food }).then(faves => { this.setState({ faves: faves.data }) })
  }

  removeFave(id) {
    axios.delete(`/api/faves/${id}`).then(faves => { this.setState({ faves: faves.data }) })
  }

  discount() {
    axios.put(`/api/foods/${this.state.discount}`).then(foods => { this.setState({ foods: foods.data }) })
  }

  render() {
    return (
      <div className="Menu main">

        <div className="foods list">
          <h2>Foods</h2>

          {this.state.foods.map((food, indx) => (
            <div className="food" key={indx} onClick={() => this.addFave(food)}>
              <span>{food.dish}</span>
              <span>${food.price}</span>
            </div>
          ))}

        </div>

        <div className="discount" >
          <input value={this.state.discount} onChange={e => this.setState({ discount: e.target.value })} />
          <div onClick={this.discount} >Discount!</div>
        </div>

        <div className="faves list">
          <h2>Faves</h2>

          {this.state.faves.map((fave, indx) => (
            <div className="fave" key={indx} onClick={() => this.removeFave(fave.id)}>
              <span>{fave.dish} </span>
              <span>({fave.cuisine})</span>
            </div>
          ))}

        </div>

      </div>
    );
  }
}

export default Menu;
