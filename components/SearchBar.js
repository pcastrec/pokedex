import React from "react"

export const SearchBar = ({ input, setInput }) => {

    const handleChange = e => {
        setInput(e.target.value)
    }

    return (
        <div className="container">
            <input className="search" placeholder="Recherche" value={input} onChange={handleChange}/>
        </div>
    )
}