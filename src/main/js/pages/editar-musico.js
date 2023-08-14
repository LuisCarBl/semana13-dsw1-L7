const React = require('react');
const { Link, useParams } = require('react-router-dom');

const client = require('../client');
const { useState, useEffect } = require('react');

function PageEditarMusico() {

    const [musico, setMusico] = useState({});

    // getting id param from route
    let { id } = useParams();

    useEffect(() => {
        client({ method: 'GET', path: '/api/musicos/' + id }).done(response => {
            setMusico(response.entity);
        });
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/musicos/' + id,
            entity: musico,
            headers: { 'Content-Type': 'application/json' }
        }).done(() => window.location = "/");
    };

    return (
        <>
            <h1>Editar Músico</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={musico.nombre} onChange={(e) => setMusico({...musico, nombre: e.target.value })} />
                <input type="submit" value="Editar Músico" />
            </form>
            <hr />
            <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageEditarMusico;