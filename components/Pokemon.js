import { Link } from "react-router-dom"

export const Pokemon = ({ data }) => {

    const index = data.url.split('/')[6]
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`

    return (
        <Link className="card" to={data.name}>
            <p className="capitalize">{index} - {data.name}</p>
            <img height='250px' src={img} />
        </Link>
    )
}