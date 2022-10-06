package com.example.demo.app.apirest.models.services;

import java.util.List;

import com.example.demo.app.apirest.models.entity.Repuesto;

public interface IRepuestoService {

	public List<Repuesto> findAll();

	public Repuesto save(Repuesto repuesto);

	public Repuesto findById(Long codigo);

	public void delete(Long codigo);

}
