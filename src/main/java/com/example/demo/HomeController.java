package com.example.demo;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @RequestMapping(value = "/")
    public String home(){
        return "index";
    }

    @GetMapping(path = "/api/studios/{id}/formacion")
    public @ResponseBody List<Map<String, Object>> formacion(@PathVariable Integer id){
        String sql = "SELECT integrante.id as ID, director.nombre as DIRECTOR, pelicula.nombre as PELICULA FROM integrante JOIN director ON integrante.id_director = director.id JOIN pelicula ON integrante.id_pelicula = pelicula.id WHERE integrante.id_studio = ?";
        List<Map<String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
        return queryResult;
    }
    /**
     * [
     *   {"campo": "Valor"},
     *   {"campo": 2},
     * ]
     * List<Map<String, Object>>
     */


}
