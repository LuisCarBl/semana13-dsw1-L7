const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');


const NuevoIntegrantePage = () => {

    let { id } = useParams();
    const [directores, setDirectores] = useState([])
    const [peliculas, setPeliculas] = useState([])
    const [idDirector, setIdDirector] = useState('')
    const [idPelicula, setIdPelicula] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/integrantes',
            entity: {
                studio: 'http://localhost:8080/api/studios/'+id,
                director: 'http://localhost:8080/api/directores/'+idDirector,
                pelicula: 'http://localhost:8080/api/peliculas/'+idPelicula},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/directores'
        }).done(response=>{
            let directores2 = [];
            response.entity._embedded.directores.map(director => {
                directores2.push({value: director._links.self.href.split('/').slice(-1), label: director.nombre})
            })
            setDirectores(directores2)
        })
        client({
            method: 'GET',
            path: '/api/peliculas'
        }).done(response=>{
            let peliculas2 = [];
            response.entity._embedded.peliculas.map(pelicula => {
                peliculas2.push({value: pelicula._links.self.href.split('/').slice(-1), label: pelicula.nombre})
            })
            setPeliculas(peliculas2)
        })

    },[])

    return (
        <>
            <h1>Nuevo Integrante</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='director'>Director</label>
                <select name="director" id="director" onChange={(e)=>{setIdDirector(e.target.value)}}>
                    {directores.map(director => {	
                        return (
                            <option key={director.value} value={director.value}>{director.label}</option>
                        )
                    })}
                </select>
                
                <label>Pelicula</label>
                <select name="pelicula" id="pelicula" onChange={(e)=>{setIdPelicula(e.target.value)}}>
                    {peliculas.map(pelicula => {	
                        return (
                            <option key={pelicula.value} value={pelicula.value}>{pelicula.label}</option>
                        )
                    })}
                </select>

                <input type="submit" value="Nuevo Integrante" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoIntegrantePage;