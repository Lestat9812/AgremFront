import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
import { AgremiadoService } from 'src/app/services/agremiado.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  agremiados: any[] = [];
  constructor(private rou: Router, private authS: LoginService,private agremiado: AgremiadoService) { }
  logOut() {
    this.authS.logOut();
  }

  ngOnInit() {
    this.getAgremiados();
  }

  getAgremiados() {
    this.agremiado.getVerAdmin().subscribe(
      (data) => {
        this.agremiados = data; // Asigna los datos recibidos al arreglo agremiados
        console.log('Datos obtenidos:', this.agremiados); // Muestra los datos en la consola
      },
      (error) => {
        console.error('Error al obtener agremiados:', error);
      }
    );
  }

  confirmarAlert() {
    Swal.fire({
    title: 'Deseas Cerrar Sesión?',
     icon: 'warning',
    showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
     confirmButtonText: 'Si'
   }).then((result) => {
    if (result.isConfirmed) {
        this.logOut();
        Swal.fire(
          'Cerrando Sesión',
          'Has cerrado tu sesión correctamente.',
          'success'
        );
    }
  });
  }

}
