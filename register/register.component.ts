import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareService } from '../share.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit {
 
  // @ViewChild(HomeComponent) view !:HomeComponent
  
registerObj:registerModel= new registerModel();


  constructor(private router:Router, public shareService:ShareService) { }

  public userData:string | undefined;

  ngOnInit(): void {

  }

  password!: string;
  passwordV:boolean=false;

  toggle(){
    this.passwordV=!this.passwordV;
    const passInput=document.getElementById('password');
    if(this.passwordV){
      passInput?.setAttribute('type','text');
      
    }else{
      passInput?.setAttribute('type','password');
    }

  }

 


register(form:NgForm){
 
  this.shareService.userData= this.registerObj.firstName;

  const localuser=localStorage.getItem('user');
  if(localuser !=null){
    const user=JSON.parse(localuser);
    user.push(this.registerObj);
    localStorage.setItem('user',JSON.stringify(user));
    alert("registration succesfull");
    this.router.navigate(['/Login']);
  }else{
    const user=[];
    user.push(this.registerObj);
    localStorage.setItem('user',JSON.stringify(user))
    this.router.navigate(['/Login']);
  }

  
  
 
}

}

export class registerModel{
  firstName:string;
  lastName:string;
  
    email:string;
    password:string;
    city:string;
    state:string;
    phoneNumber:string;


  constructor(){
    this.firstName="";
    this.lastName="";
    this.email="";
    this.password="";
    this.city="";
    this.state="";
    this.phoneNumber="";

  }
  
}

