import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  userData: any[]=[];
  searchText:any;
 
  
  constructor(private router:Router,public shareService:ShareService, private api:ApiService) { }

 ngOnInit(): void {
  const localuser=localStorage.getItem('user');
  this.api.getApi().subscribe((data:any)=>{
    console.log("get api data",data);
    this.userData=data;
    console.log("Api Array Printed",data);
    
  })

   
 }
 edit(id:any){
  console.log(id);
  this.router.navigate(['/edit', id], { state: { data: id} });
 }
 

}
