package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Pelicula {

	private @Id @GeneratedValue Long id;
	private String nombre;
	private String genero;

	private Pelicula() {}

	public Pelicula(String nombre, String genero) {
		this.nombre = nombre;
		this.genero = genero;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Pelicula pelicula = (Pelicula) o;
		return Objects.equals(id, pelicula.id) &&
			Objects.equals(nombre, pelicula.nombre) &&
			Objects.equals(genero, pelicula.genero);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre, genero);
	}

	@Override
	public String toString() {
		return "Pelicula{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			", genero='" + genero + '\'' +
			'}';
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}
	

}