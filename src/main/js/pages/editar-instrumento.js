const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const EditarInstrumentoPage = () => {

    const [pelicula, setPelicula] = useState({});

    let { id } = useParams();

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/peliculas/' + id
        }).done(response => {
            setPelicula(response.entity);
        })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/peliculas/' + id,
            entity: pelicula,
            headers: {'Content-Type': 'application/json'}
        }).done(() => window.location = "/");
    }


    return (
        <>
            <h1>Editar Pelicula</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={pelicula.nombre} onChange={(e)=>setPelicula({...pelicula, nombre: e.target.value})} />
                <label htmlFor="genero">Genero</label>
                <input type="text" id="genero" name="genero" value={pelicula.genero} onChange={(e)=>setPelicula({...pelicula, genero: e.target.value})} />
                <input type="submit" value="Editar Pelicula" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = EditarInstrumentoPage;