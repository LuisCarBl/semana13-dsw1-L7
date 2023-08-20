package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "directores", path = "directores")
public interface DirectorRepository extends CrudRepository<Director, Long> {

}