import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Repuesto } from './repuesto';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RepuestoService {

  private urlEndPoint: string = 'http://localhost:8080/api/repuestos/enlist';

  private urlSaveRepuesto: string = 'http://localhost:8080/api/repuestos/save';
  private urlSearchRepuesto: string = 'http://localhost:8080/api/repuestos/findbyid';
  private urlEditRepuesto: string = 'http://localhost:8080/api/repuestos/edit';
  private urlDeleteRepuesto: string = 'http://localhost:8080/api/repuestos/delete';


  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }

  getRepuestos(): Observable<Repuesto[]> {
    return this.http.get(this.urlEndPoint).pipe(map(response => response as Repuesto[]));
  }

  create(repuesto: Repuesto): Observable<Repuesto> {
    return this.http.post<Repuesto>(this.urlSaveRepuesto, repuesto, { headers: this.httpHeaders })
  }

  getRepuesto(codigo: number): Observable<Repuesto> {
    return this.http.get<Repuesto>(`${this.urlSearchRepuesto}/${codigo}`);
  }

}
