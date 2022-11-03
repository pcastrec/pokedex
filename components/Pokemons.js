import React from "react"
import { Pokemon } from "./Pokemon"
import { SearchBar } from "./SearchBar"

import '../public/style.css'

export const Pokemons = () => {

    const loader = React.useRef(null)

    const [input, setInput] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [pokemons, setPokemons] = React.useState([])
    const [settings, setSettings] = React.useState({ limit: 20, offset: 0 })

    React.useEffect(() => {
        const options = { root: null, rootMargin: "20px", threshold: 0 }
        const observer = new IntersectionObserver(handleObserver, options)
        if (loader.current) observer.observe(loader.current)
    }, [handleObserver])

    React.useEffect(() => {
        setLoading(true)
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${settings.limit}&offset=${settings.offset}`)
            .then(res => res.json())
            .then(data => setPokemons(prev => [...prev, ...data.results]))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [settings])

    const handleObserver = React.useCallback(entries => {
        if (entries[0].isIntersecting) {
            console.log('loading')
            setSettings(prev => ({ limit: 20, offset: prev.offset + 20 }))
        }
    }, [loading])

    return (
        <>
            <SearchBar input={input} setInput={setInput} />
            <div className="container list" > {/*onScroll={handleScroll}*/}
                {
                    pokemons
                        .filter((p, i) => p.name.includes(input.toLowerCase()))
                        .map((p, i) => <Pokemon key={i} data={p} />)
                }
            </div>
            {!loading && <div ref={loader}></div>}
        </>
    )
}