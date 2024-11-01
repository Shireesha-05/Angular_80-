import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 
  

  Clickbutton(path:string){
    this.router.navigate(['Login'])
  }

  clickAbout(path:string){
    this.router.navigate(['about'])

  }
  clickService(path:string){
    this.router.navigate(['service'])
  }

  clickContact(path:string){
    this.router.navigate(['contact'])
  }
  


}
