import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DrawSkillLevel from './PokemonSkillLevel'

const PokemonResult = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        displayPokemon();
    }, []);

    const displayPokemon = async () => {
        await axios.get('http://localhost:3030/api/cards').then(res => {
            console.log(res.data.cards);
            setPokemons(res.data.cards);
        })
    }
    const searchMonster = e => {
        e.preventDefault();
        if (e.target.value === '') {
            displayPokemon();
        }
        else {
            var filterObject = pokemons.filter(p => p.name.includes(e.target.value) || p.type.includes(e.target.value));
            setPokemons(filterObject);
        }
    }
    const CheckEmptyData = () => {
        if (pokemons.length > 0) {
            return (
                pokemons.map((m, idx) => (
                    <div className="row pokemonlist" key={m.id} id="dvResult">
                        <div className="col-md-3">
                            <img src={m.imageUrl} className="img"></img>
                        </div>
                        <div className="col-md-7 info" key={m.id}>
                            <ul>
                                <li><p>{m.name}</p></li>
                                <DrawSkillLevel pokemon={m} />
                            </ul>
                        </div>
                        <div id="dvAdd" className="col-md-2">
                            <a href="#">Add</a>
                        </div>
                    </div>
                ))
            )
        }
        else {
            return (
                <div className="row">
                    No results found
                </div>
            )
        }
    }

    return (

        <div className="card-body">
            <h1>Found Pokemon Results</h1>
            <br />

            <div className="row">
                <div className="col-md-12">
                    <input type="text" className="form-control" placeholder="find pokemon" onChange={searchMonster} />
                </div>
            </div>
            <br />
            <div className="row app">
                <CheckEmptyData />
            </div>

        </div>
    );
};

export default PokemonResult;

