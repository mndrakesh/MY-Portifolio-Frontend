import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User = new User();
  msg = '';

  constructor(private _service: UserService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {}

  registerUser() {
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log('response received');
        this.msg = 'User Registration Successfully done';

        // Show success toaster with 6 seconds duration
        const config: Partial<IndividualConfig> = {
          timeOut: 2000
        };
        this.toastr.success('Congratulations! You have successfully created an account.', 'Success', config);

        // Navigate after 6 seconds
        setTimeout(() => {
          this.router.navigate(['log-in']);
        }, 2000);
      },
      error => {
        console.log('exception occurred');
        this.msg = error.error;
    

        this.toastr.error('This email address is already registered. Please log in or use a different email', 'Warning');
      }
    );
  }
}
