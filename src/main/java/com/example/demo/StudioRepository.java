package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "studios", path = "studios")
public interface StudioRepository extends CrudRepository<Studio, Long> {

}