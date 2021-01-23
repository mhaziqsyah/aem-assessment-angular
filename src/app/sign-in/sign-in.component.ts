import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthServiceService, private route: Router, private fb: FormBuilder) { }

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.form = this.fb.group({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    })
    
  }

  get username(){return this.form.get('username')}

  signIn(){
    const val = this.form.value;

    if(val.username && val.password){
      this.authService.signIn(val.username , val.password).subscribe(res=>{
        console.log(res);
        localStorage.setItem('bearer', res)
        this.route.navigate(['/home']);
      })
    }
    
  }

}
