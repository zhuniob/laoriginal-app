import { Component, OnInit } from '@angular/core';
import { Repuesto } from './repuesto';
import { RepuestoService } from './repuesto.service';

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.component.html',
})
export class RepuestosComponent implements OnInit {

  repuestos: Repuesto[] = [];
  habilitar: boolean = true;

  constructor(private repuestoService: RepuestoService) { }

  ngOnInit() {
    this.repuestoService.getRepuestos().subscribe(
      repuestos => this.repuestos = repuestos
    );
  }

  setHabilitar(): void {
    this.habilitar = (this.habilitar == true) ? false : true;
  }

}
