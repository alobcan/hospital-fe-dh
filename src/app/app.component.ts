import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital-client';

  constructor(private router:Router){}

  ListarPacientes(){
    this.router.navigate(["listarPaciente"]);
  }
  NuevoPaciente(){
    this.router.navigate(["addPaciente"]);
  }
  ListarDoctores(){
    this.router.navigate(["listarDoctor"]);
  }
  NuevoDoctor(){
    this.router.navigate(["addDoctor"]);
  }
}
