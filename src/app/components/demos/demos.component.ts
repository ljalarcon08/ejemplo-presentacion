import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { Demo } from '../../interfaces/demo';

@Component({
  selector: 'app-demos',
  standalone: true,
  imports: [MatCardModule,MatToolbarModule,CommonModule,FlexLayoutModule,MatTableModule],
  templateUrl: './demos.component.html',
  styleUrl: './demos.component.css'
})
export class DemosComponent {
  columnas:string[]=['nombre','descripcion'];
  datos:Demo[]=[{nombre:'microservicio-getaway',link:'https://github.com/ljalarcon08/microservicio-gateway/',descripcion:'Microservicio gateway con Spring Security'},
    {nombre:'microservicio-usuario',link:'https://github.com/ljalarcon08/microservicio-usuario',descripcion:'Microservicio administracion usuario'},
    {nombre:'common-usuario',link:'https://github.com/ljalarcon08/common-usuario',descripcion:'Librería maven spring-mysql con manejo de tablas'},
    {nombre:'microservicio-eureka',link:'https://github.com/ljalarcon08/microservicio-eureka',descripcion:'Implementación eureka (servidor de direcciones)'},
    {nombre:'pagina-producto',link:'https://github.com/ljalarcon08/pagina-productos',descripcion:'Proyecto Angular administración pagina de productos y usuarios'},
    {nombre:'cliente-soap',link:'https://github.com/ljalarcon08/cliente-soap',descripcion:'Librería maven para creacion de clientes soap'}];

}
