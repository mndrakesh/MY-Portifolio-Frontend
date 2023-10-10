import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import{ FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';



import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import{} from '@angular/forms';
import { ProjectmenuComponent } from './projectmenu/projectmenu.component';
import { CalculatorComponent } from './projectmenu/calculator/calculator.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NseHomeComponent } from './projectmenu/nse-home/nse-home.component';
import { NseMasterComponent } from './projectmenu/nse-master/nse-master.component';








const routes:any=[
  {path:'',component:HomeComponent},
  {path:'log_in',component:LogInComponent},
  {path:'sign_up',component:SignUpComponent},
  {path:'projectmenu',component:ProjectmenuComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'nse-home',component:NseHomeComponent},
  {path:'nse-master',component:NseMasterComponent},
 
 
  
]





@NgModule({
  declarations: [
    AppComponent,
   LogInComponent,
    SignUpComponent,
    HomeComponent,
    ProjectmenuComponent,
    CalculatorComponent,
    NseHomeComponent,
    NseMasterComponent,
  
   
  
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
     ToastrModule.forRoot( { preventDuplicates: true,})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



