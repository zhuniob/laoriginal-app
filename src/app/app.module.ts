import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RepuestosComponent } from './repuestos/repuestos.component';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './repuestos/form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RepuestoService } from './repuestos/repuesto.service';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'repuestos', component: RepuestosComponent },
  { path: 'repuestos/form', component: FormComponent },
  { path: 'clientes/form/:codigo', component: FormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RepuestosComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],

  providers: [RepuestoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
