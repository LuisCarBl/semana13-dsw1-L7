const React = require('react');
const {useState, useEffect} = require('react');
const {useParams} = require('react-router-dom');
const client = require('../client');

const VerBandaPage = ()=>{

    let {id} = useParams();
    const [banda, setBanda] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/bandas/'+id
        }).done((response)=>{
            setBanda(response.entity);
        })
    }, []);

    return (
        <>
            <h1>Ver Banda</h1>

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{banda.nombre}</td>
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
                        <th>Musico</th>
                        <th>Instrumento</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>musico...</td>
                        <td>instrumento...</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

module.exports = VerBandaPage;