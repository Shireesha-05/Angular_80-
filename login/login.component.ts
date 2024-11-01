import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { registerModel } from '../register/register.component';
import { ShareService } from '../share.service';
import 'font-awesome/css/font-awesome.css';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {



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


  loginObj:loginModel= new loginModel();


  
  
  user={
    
    firstName:'',
    password:''
  }


  constructor(private router: Router,public shareService: ShareService) { }

  ngOnInit(): void {
    
  }
  public userData:string | undefined;

  
  onSubmit(form:NgForm){


const localuser=localStorage.getItem('user');
if(localuser != null){
  const user=JSON.parse(localuser);
  const isUserExist=user.find((user:registerModel)=> user.firstName == this.loginObj.firstName && user.password == this.loginObj.password)
if(isUserExist != undefined){
  alert("login successfull");
  this.router.navigate(['/home']);
}else{
  alert("email or password is incorrect");
}

   
  
  }
  this.shareService.userData=this.loginObj.firstName;
  }
}

export class loginModel{

  firstName:string;
    email:string;
    password:string;
   

  constructor(){
   this.firstName="";
    this.email="";
    this.password="";

  }
}
