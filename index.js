import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Pokemons } from './components/Pokemons'
import { Detail } from './components/Detail'

const root = document.getElementById('root')
const app = createRoot(root)

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Pokemons />} />
                <Route path='/:p' element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

app.render(
    <React.StrictMode><App /></React.StrictMode>
)