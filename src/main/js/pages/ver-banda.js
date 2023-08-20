const React = require('react');
const {useState, useEffect} = require('react');
const {useParams} = require('react-router-dom');
const client = require('../client');
const {Link} = require('react-router-dom');

const VerBandaPage = ()=>{

    let {id} = useParams();
    const [studio, setStudio] = useState({});
    const [integrantes, setIntegrantes] = useState([]);

    useEffect(()=>{

        const url_studio = '/api/studios/'+id

        client({
            method: 'GET',
            path: url_studio
        }).done((response)=>{setStudio(response.entity);})

        client({
            method: 'GET',
            path: url_studio + '/formacion'
        }).done((response)=>{setIntegrantes(response.entity);})

    }, []);

    return (
        <>
            <h1>Ver Studio</h1>

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{studio.nombre}</td>
                    </tr>
                </tbody>
            </table>

            <hr />

            <table border="1">
                <thead>
                    <tr>
                        <th colSpan="2">Integrantes</th>  
                    </tr>
                    <tr>
                        <th>Director</th>
                        <th>Pelicula</th>
                    </tr>
                </thead>
                <tbody>
                    {integrantes.map(integrante => {
                        return (
                            <tr key={integrante.ID}>
                                <td>{integrante.DIRECTOR}</td>
                                <td>{integrante.PELICULA}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Link to={`/ver-banda/${id}/nuevo-integrante`}>Nuevo Integrante</Link> | <Link to="/">Volver</Link>
        </>
    );
}

module.exports = VerBandaPage;