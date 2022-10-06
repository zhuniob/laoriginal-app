package com.example.demo.app.apirest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.app.apirest.models.entity.Repuesto;
import com.example.demo.app.apirest.models.services.IRepuestoService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class RepuestoRestController {

	@Autowired
	private IRepuestoService repuestoService;

	@GetMapping("/repuestos/enlist")
	public List<Repuesto> indext() {
		return repuestoService.findAll();
	}

	@GetMapping("/repuestos/findbyid/{codigo}")
	public Repuesto show(@PathVariable Long codigo) {
		return repuestoService.findById(codigo);
	}

	@PostMapping("/repuestos/save")
	@ResponseStatus(HttpStatus.CREATED)
	public Repuesto create(@RequestBody Repuesto repuesto) {
		return repuestoService.save(repuesto);
	}

	@PutMapping("/repuestos/edit/{codigo}")
	public Repuesto update(@RequestBody Repuesto repuesto, @PathVariable Long codigo) {
		Repuesto repuestoActual = repuestoService.findById(codigo);
		repuestoActual.setDescripcion(repuesto.getDescripcion());
		repuestoActual.setMarca(repuesto.getMarca());
		repuestoActual.setAnio(repuesto.getAnio());
		repuestoActual.setTipo(repuesto.getTipo());
		return repuestoService.save(repuestoActual);
	}

	@DeleteMapping("/repuestos/delete/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long codigo) {
		repuestoService.delete(codigo);
	}
}
