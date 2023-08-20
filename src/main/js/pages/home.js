const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class PageHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = { peliculas: [], directores: [], studios: [] };
	}
	componentDidMount() {
		client({ method: 'GET', path: '/api/peliculas' }).done(response => {
			this.setState({ peliculas: response.entity._embedded.peliculas });
		});
		client({ method: 'GET', path: '/api/directores' }).done(response => {
			this.setState({ directores: response.entity._embedded.directores });
		});
		client({ method: 'GET', path: '/api/studios' }).done(response => {
			this.setState({ studios: response.entity._embedded.studios });
		});
	}
	render() {
		return (
			<>
                <h1>Aplicación Demo</h1>

				<div style={{"width": "100%","display": "flex"}} >

					<div style={{"width": "calc(100%/3)"}}>
						<Titulo entidad="Pelicula" emoji="🎥" />
						<PeliculaList peliculas={this.state.peliculas} />
						<br />
						<Link to="/nuevo-instrumento">Nueva Pelicula</Link>
					</div>

					<div style={{"width": "calc(100%/3)"}}>
						<Titulo entidad="Director" emoji="🎬" />
						<DirectorList directores={this.state.directores} />
						<br />
						<Link to="/nuevo-musico">Nuevo Director</Link>
					</div>

					<div style={{"width": "calc(100%/3)"}}>
						<Titulo entidad="Studio" emoji="🎞️" />
						<StudioList studios={this.state.studios} />
						<br />
						<Link to="/nueva-banda">Nuevo Studio</Link>
					</div>

				</div>



			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<span>Listado de {props.entidad.toLowerCase()}</span>
			<hr />
		</>
	)
}


class PeliculaList extends React.Component {
	render() {
		const peliculas = this.props.peliculas.map(pelicula =>
			<Pelicula key={pelicula._links.self.href} pelicula={pelicula} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Genero</th>
						<th>Acciones</th>
					</tr>
					{peliculas}
				</tbody>
			</table>
		)
	}
}
class DirectorList extends React.Component {
	render() {
		const directores = this.props.directores.map(director =>
			<Director key={director._links.self.href} director={director} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{directores}
				</tbody>
			</table>
		)
	}
}
class StudioList extends React.Component {
	render() {
		const studios = this.props.studios.map(studio =>
			<Studio key={studio._links.self.href} studio={studio} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{studios}
				</tbody>
			</table>
		)
	}
}

class Pelicula extends React.Component {
	render() {
		const id = this.props.pelicula._links.self.href.split('/').slice(-1);
		return (
			<tr>
				<td>{this.props.pelicula.nombre}</td>
				<td>{this.props.pelicula.genero}</td>
				<td>
					<Link to={'/editar-instrumento/'+id}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Director extends React.Component {
	render() {
		const id = this.props.director._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.director.nombre}</td>
				<td>
					<Link to={`/editar-musico/${id}`}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Studio extends React.Component {
	render() {
		const id = this.props.studio._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.studio.nombre}</td>
				<td>
					<Link to={`/ver-banda/${id}`}>Ver</Link>
				</td>
			</tr>
		)
	}
}

module.exports = PageHome;