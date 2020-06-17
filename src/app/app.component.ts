import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './Service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital-client';

  constructor(private router:Router, private service:ServiceService){}
  
  ngOnInit(): void {
    this.router.navigate(["listarHospital"]);
  }

  Home(){
    localStorage.clear();
    localStorage.setItem("id_hospital", "1");
    this.router.navigate(["listarHospital"]);
    
  }
}
