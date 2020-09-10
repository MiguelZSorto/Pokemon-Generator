import React from "react";
import PokemonInfoList from "./PokemonInfoList";

class GetPokemonButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonInfoJSON: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
  }

  // There are 802 pokemon as of 2018, so we generate a random number in that range
  generatePokemonID() {
    return Math.floor(Math.random() * (802 - 1 + 1) + 1); // return Math.random() * (max - min) + min
  }

  handleError(error) {
    console.warn(error);
    return new Response(
      JSON.stringify({
        code: 400,
        message: "Network Error",
      })
    );
  }

  // button event listener. Currently logs pokemon's name but will send this info to the
  // GetPokemonButton component
  // FIXME: ADD ERROR HANDLING IN THEN STATEMENT
  async handleClick() {
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${this.generatePokemonID()}/`
    );
    response = await response.json();
    this.handleRequest(response);
  }
  x;
  // function to handle setting the state after a button press
  handleRequest(response) {
    this.setState({
      pokemonInfoJSON: response,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Get Pokemon!</button>
        <PokemonInfoList
          pokemonJSON={this.state.pokemonInfoJSON}
        ></PokemonInfoList>
      </div>
    );
  }
}

export default GetPokemonButton;
