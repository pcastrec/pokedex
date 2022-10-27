import React from "react"
import { Pokemon } from "./Pokemon"
import { SearchBar } from "./SearchBar"

import '../public/style.css'

export const Pokemons = () => {

    const [input, setInput] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [pokemons, setPokemons] = React.useState([])

    React.useEffect(() => {
        setLoading(true)
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(data => setPokemons(data.results))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            <SearchBar input={input} setInput={setInput} />
            {
                loading ?
                    <h1>Not Found</h1>
                    :
                    <div className="container list">
                        {
                            pokemons
                            .filter((p, i) => p.name.includes(input.toLowerCase()))
                            .map((p, i) => <Pokemon key={i} data={p} />)
                        }
                    </div>
            }
        </>
    )
}