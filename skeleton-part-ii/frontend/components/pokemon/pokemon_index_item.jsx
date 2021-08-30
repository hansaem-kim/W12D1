import { Link } from "react-router-dom";
import React from "react";
import { withRouter } from "react-router-dom";

class PokemonIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const props = this.props;
        // debugger
        return (
            <Link to={`/pokemon/${props.pokemon.id}`}>
                <li className="pokemon-list-item">
                    <span>{props.pokemon.name}</span>
                    <img src="{props.pokemon.imageUrl}" alt="pokemon picture" />
                </li>
            </Link>
        );
    }
}

export default withRouter(PokemonIndexItem);