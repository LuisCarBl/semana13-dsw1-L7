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

		Pelicula pBlueBeetle = new Pelicula("Blue Beetle", "Acción");
		Pelicula pEscapeBajoFuego = new Pelicula("Escape Bajo Fuego", "Acción");
		Pelicula pHospitalSangriento = new Pelicula("Hospital Sangriento", "Terror");
		this.repositoryP.save(new Pelicula("Transformers: El despertar de las Bestias", "Ciencia Ficci\u00F3n"));
		this.repositoryP.save(new Pelicula("Super Mario Bros. La película","Aventura"));
		this.repositoryP.save(new Pelicula("Megalodon 2","Acción"));
		this.repositoryP.save(new Pelicula("Elementos", "Animación"));
		this.repositoryP.save(pBlueBeetle);
		this.repositoryP.save(pEscapeBajoFuego);
		this.repositoryP.save(pHospitalSangriento);

		Director dAngelManuel = new Director("Ángel Manuel Soto");
		Director dRicRoman = new Director("Ric Roman Waugh");
		Director dDiegoHallivis = new Director("Diego Hallivis");
		this.repositoryD.save(dAngelManuel);
		this.repositoryD.save(dRicRoman);
		this.repositoryD.save(dDiegoHallivis);
		this.repositoryD.save(new Director("Roger Taylor"));

		Studio sCineColorColombia = new Studio("Cine Color Colombia");
		Studio sCinemaARD = new Studio("Cinema ARD");
		Studio sDcStudios = new Studio("DC Studios");
		this.repositoryS.save(sCineColorColombia);
		this.repositoryS.save(sDcStudios);

		Integrante intAngelManuel = new Integrante(sDcStudios, dAngelManuel, pBlueBeetle);
		this.repositoryN.save(intAngelManuel);
		Integrante intRicRoman = new Integrante(sCinemaARD, dRicRoman, pEscapeBajoFuego);
		this.repositoryN.save(intRicRoman);
		Integrante intDiegoHallivis = new Integrante(sCineColorColombia, dDiegoHallivis, pHospitalSangriento);
		this.repositoryN.save(intDiegoHallivis);


	}
}