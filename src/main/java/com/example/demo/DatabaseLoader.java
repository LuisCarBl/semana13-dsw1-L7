package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final PeliculaRepository repositoryP;
	private final DirectorRepository repositoryD;
	private final StudioRepository repositoryS;
	private final IntegranteRepository repositoryN;

	@Autowired
	public DatabaseLoader(
		PeliculaRepository repositoryP,
		DirectorRepository repositoryD,
		StudioRepository repositoryS,
		IntegranteRepository repositoryN
		) {
		this.repositoryP = repositoryP;
		this.repositoryD = repositoryD;
		this.repositoryS = repositoryS;
		this.repositoryN = repositoryN;
	}

	@Override
	public void run(String... strings) throws Exception {

		Pelicula pBlueBeetle = new Pelicula("Blue Beetle", "Accion");
		Pelicula pEscapeBajoFuego = new Pelicula("Escape Bajo Fuego", "Accion");
		Pelicula pHospitalSangriento = new Pelicula("Hospital Sangriento", "Terror");
		this.repositoryP.save(new Pelicula("Transformers: El despertar de las Bestias", "Ciencia Ficcion"));
		this.repositoryP.save(new Pelicula("Super Mario Bros. La pelicula","Aventura"));
		this.repositoryP.save(new Pelicula("Megalodon 2","Accion"));
		this.repositoryP.save(new Pelicula("Elementos", "Accion"));
		this.repositoryP.save(pBlueBeetle);
		this.repositoryP.save(pHospitalSangriento);
		this.repositoryP.save(pEscapeBajoFuego);

		Director dAngelManuel = new Director("Angel Manuel Soto");
		Director dRicRoman = new Director("Ric Roman Waugh");
		Director dDiegoHallivis = new Director("Diego Hallivis");
		this.repositoryD.save(dAngelManuel);
		this.repositoryD.save(dRicRoman);
		this.repositoryD.save(dDiegoHallivis);
		this.repositoryD.save(new Director("Roger Taylor"));

		Studio sCineColor = new Studio("Cine Color Colombia");
		Studio sCinemaARD = new Studio("Cinema ARD");
		Studio sDcStudios = new Studio("DC Studios");
		this.repositoryS.save(sCineColor);
		this.repositoryS.save(sCinemaARD);
		this.repositoryS.save(sDcStudios);

		Integrante intAngelManuel = new Integrante(sDcStudios, dAngelManuel, pBlueBeetle);
		this.repositoryN.save(intAngelManuel);
		Integrante intRicRoman = new Integrante(sCineColor, dRicRoman, pEscapeBajoFuego);
		this.repositoryN.save(intRicRoman);
		Integrante intDiegoHallivis = new Integrante(sCinemaARD, dDiegoHallivis, pHospitalSangriento);
		this.repositoryN.save(intDiegoHallivis);
	}

}