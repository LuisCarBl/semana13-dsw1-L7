package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

@Entity
public class Integrante {

	private @Id @GeneratedValue Long id;

	@ManyToOne()
	@JoinColumn(name = "id_studio")
	private Studio studio;

	@ManyToOne()
	@JoinColumn(name = "id_director")
	private Director director;

	@ManyToOne()
	@JoinColumn(name = "id_pelicula")
	private Pelicula pelicula;

	public Integrante() {}

	public Integrante(Studio studio, Director director, Pelicula pelicula) {
		this.studio = studio;
		this.director = director;
		this.pelicula = pelicula;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

    public Studio getStudio() {
        return studio;
    }

    public void setStudio(Studio studio) {
        this.studio = studio;
    }

    public Director gDirector() {
        return director;
    }

    public void setDirector(Director director) {
        this.director = director;
    }

    public Pelicula getPelicula() {
        return pelicula;
    }

    public void setPelicula(Pelicula pelicula) {
        this.pelicula = pelicula;
    }

	

}