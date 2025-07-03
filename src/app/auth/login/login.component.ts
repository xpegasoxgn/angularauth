import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private fb:FormBuilder){
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }


  onSubmit():void{
    if(this.loginForm.valid){
      console.log('Login ', this.loginForm.value);
    }
  }

}
