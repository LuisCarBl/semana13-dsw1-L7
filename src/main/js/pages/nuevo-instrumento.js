const React = require('react');
const { Link } = require('react-router-dom');

const client = require('../client');
const {useState} = require('react');

function PageNuevoInstrumento() {

    const [nombre, setNombre] = useState("");
    const [genero, setGenero] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/peliculas',
            entity: { nombre: nombre, genero: genero},
            headers: { 'Content-Type': 'application/json' }
        }).done( () => window.location = "/");
    };

    return (
        <>
            <h1>Nueva Pelicula</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={(e)=>setNombre(e.target.value)} /><br />
                
                <label htmlFor="genero">Genero</label>
                <input type="text" id="genero" name="genero" onChange={(e)=>setGenero(e.target.value)} /><br />

                <input type="submit" value="Nueva Pelicula" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageNuevoInstrumento;