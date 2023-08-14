const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class PageHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = { instrumentos: [], musicos: [] };
	}
	componentDidMount() {
		client({ method: 'GET', path: '/api/instrumentos' }).done(response => {
			this.setState({ instrumentos: response.entity._embedded.instrumentos });
		});
		client({ method: 'GET', path: '/api/musicos' }).done(response => {
			this.setState({ musicos: response.entity._embedded.musicos });
		});
	}
	render() {
		return (
			<>
                <h1>Aplicación Demo</h1>

				<Titulo entidad="Instrumento" />
				<InstrumentoList instrumentos={this.state.instrumentos} />
				<br />
				<Link to="/nuevo-instrumento">Nuevo Instrumento</Link>

				<Titulo entidad="Músico" />
				<MusicoList musicos={this.state.musicos} />
				<br />
				<Link to="/nuevo-musico">Nuevo Músico</Link>
			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.entidad}</h2>
			<span>Listado de {props.entidad.toLowerCase()}</span>
			<hr />
		</>
	)
}


class InstrumentoList extends React.Component {
	render() {
		const instrumentos = this.props.instrumentos.map(instrumento =>
			<Instrumento key={instrumento._links.self.href} instrumento={instrumento} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Categoría</th>
						<th>Descripción</th>
						<th>Acciones</th>
					</tr>
					{instrumentos}
				</tbody>
			</table>
		)
	}
}
class MusicoList extends React.Component {
	render() {
		const musicos = this.props.musicos.map(musico =>
			<Musico key={musico._links.self.href} musico={musico} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{musicos}
				</tbody>
			</table>
		)
	}
}

class Instrumento extends React.Component {
	render() {
		const id = this.props.instrumento._links.self.href.split('/').slice(-1);
		return (
			<tr>
				<td>{this.props.instrumento.nombre}</td>
				<td>{this.props.instrumento.categoria}</td>
				<td>{this.props.instrumento.descripcion}</td>
				<td>
					<Link to={'/editar-instrumento/'+id}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Musico extends React.Component {
	render() {
		const id = this.props.musico._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.musico.nombre}</td>
				<td>
					<Link to={`/editar-musico/${id}`}>Editar</Link>
				</td>
			</tr>
		)
	}
}

module.exports = PageHome;