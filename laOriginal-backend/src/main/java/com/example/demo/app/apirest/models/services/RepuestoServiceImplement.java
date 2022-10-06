package com.example.demo.app.apirest.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.app.apirest.models.dao.IRepuestoDao;
import com.example.demo.app.apirest.models.entity.Repuesto;

@Service
public class RepuestoServiceImplement implements IRepuestoService {

	@Autowired
	private IRepuestoDao RepuestoDao;

	@Override
	@Transactional(readOnly = true)
	public List<Repuesto> findAll() {
		return (List<Repuesto>) RepuestoDao.findAll();
	}

	@Override
	public Repuesto save(Repuesto repuesto) {
		return RepuestoDao.save(repuesto);
	}

	@Override
	@Transactional(readOnly = true)
	public Repuesto findById(Long codigo) {
		return RepuestoDao.findById(codigo).orElse(null);
	}

	@Override
	@Transactional
	public void delete(Long codigo) {
		RepuestoDao.deleteById(codigo);
	}

}
