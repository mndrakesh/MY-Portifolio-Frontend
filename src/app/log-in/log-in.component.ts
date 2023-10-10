import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private http: HttpClient, private toastr: ToastrService) {}

  Login() {
    console.log('User object before request:', this.user);
    console.log("EmailId before request: " + this.user.email);
    console.log(this.user.password);

    let bodyData = {
      email: this.user.email,
      password: this.user.password,
    };
    const headers = { 'Content-Type': 'application/json' };

    // Show success toaster with 6 seconds duration
    
   

    // Simulate a loading time of 6 seconds
    setTimeout(() => {
      this.http.post("http://localhost:8080/login", bodyData, { headers, responseType: 'text' }).subscribe(
        (responseText: string) => {
          console.log("Response from the backend:", responseText);

          if (responseText === "Login Success") {
            // Show success toaster with 2 seconds duration
            const config: Partial<IndividualConfig> = {
              timeOut: 1000
            };
            this.toastr.success('Welcome to project page', 'Authentication successful', config);
            
            // Navigate after 3 seconds
            setTimeout(() => {
              this.router.navigateByUrl('/projectmenu');
            }, 2000);
          } else {
            this.toastr.error('Incorrect Email and Password', 'Error');
            console.log("EmailId after request: " + this.user.email);
            console.log("Pass after request: " + this.user.password);
          }
        },
        (error) => {
          const config: Partial<IndividualConfig> = {
            timeOut: 1000
          };
          this.toastr.error('Please enter valid emailid and password', 'Invalid credentials');
          console.error("Error:", error);
        }
      );
    }, 100); // 0.1 seconds delay
  }
}
