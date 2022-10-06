import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Repuesto } from './repuesto';
import { RepuestoService } from './repuesto.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  public repuestos: Repuesto = new Repuesto();
  public titulo: string = "Registrar repuesto";

  constructor(private repuestoService: RepuestoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarRepuesto();
  }

  cargarRepuesto(): void {
    this.activatedRoute.params.subscribe(params => {
      let codigo = params['codigo']
      if (codigo)
        this.repuestoService.getRepuesto(codigo).subscribe((repuesto) => this.repuestos = repuesto)
    })
  }

  public create(): void {
    this.repuestoService.create(this.repuestos).subscribe(repuesto => {
      this.router.navigate(['/repuestos'])
      Swal.fire('Registro exitoso!', `Cliente: <b>${repuesto.descripcion}</b> guardado exitosamente`, 'success');
    }
    )
  }

}
