import React from "react"
import { Link, useParams } from "react-router-dom"

export const Detail = () => {

    const { p } = useParams()

    const [pokemon, setPokemon] = React.useState({})

    React.useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${p}`)
            .then(res => res.json())
            .then(data => setPokemon(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container column">
            <h1 className="capitalize">{pokemon.name}</h1>
            <div className="images">
                <img height="200px" src={pokemon.sprites?.front_default} />
                <img height="200px" src={pokemon.sprites?.back_default} />
            </div>
            <div className="infos">
                <div>
                    <p>Taille: {pokemon.height / 10}</p>
                    <p>Poid: {pokemon.weight / 10}</p>
                </div>
                <ul className="types">
                    {pokemon.types?.map((t, i) => <li className="cap-pokemon" key={i}>{t.type.name}</li>)}
                </ul>
            </div>
            <Link className="link-btn" to={'/'}>Retour</Link>
        </div>
    )
}