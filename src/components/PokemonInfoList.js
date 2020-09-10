import React from "react";

class PokemonInfoList extends React.Component {
  render() {
    return (
      <div>
        <textarea
          name="pokemon info"
          value={this.props.pokemonJSON.name}
        ></textarea>
        <div>
          {console.log(this.props.pokemonJSON)}
          <img
            src={
              this.props.pokemonJSON.sprites
                ? this.props.pokemonJSON.sprites.front_default
                : ""
            }
            alt={this.props.pokemonJSON.name}
          ></img>
        </div>
      </div>
    );
  }
}

export default PokemonInfoList;
