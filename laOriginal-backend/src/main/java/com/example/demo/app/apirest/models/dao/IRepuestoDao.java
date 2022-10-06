package com.example.demo.app.apirest.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.app.apirest.models.entity.Repuesto;

public interface IRepuestoDao extends CrudRepository<Repuesto, Long> {

}
