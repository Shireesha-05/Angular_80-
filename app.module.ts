import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { ShareService } from './share.service';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { EditComponent } from './edit/edit.component';
import { AuthhttpInterceptor } from './interceptor/authhttp.interceptor';




// import {ChangeDetectionStrategy, Component} from '@angular/core';
// import {MatButtonModule} from '@angular/material/button';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatIconModule} from '@angular/material/icon';
// import {MatInputModule} from '@angular/material/input';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    EditComponent,
    
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,

    // BrowserAnimationsModule,
    // MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,
   
 
    
    
  ],
  providers: [ShareService,{provide:HTTP_INTERCEPTORS,useClass:AuthhttpInterceptor,multi:true}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
