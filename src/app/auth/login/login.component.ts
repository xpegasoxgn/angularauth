import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import {Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private fb:FormBuilder , private router: Router,
    private authService:AuthService ,
     private messageService:MessageService,
  ){
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }


  onSubmit():void{
    if(this.loginForm.valid){
      const credentials=this.loginForm.value;
      this.authService.login(credentials).subscribe({
        next:(res)=>{
          localStorage.setItem('jwt_token',res.token);
          localStorage.setItem('username',res.username);
          localStorage.setItem('roles',res.roles);
          this.router.navigate(['/home']);
        },
        error:(err)=>{
          const mensaje=err.error?.messagge
          this.messageService.add({severity:'error', summary:'Login Fallido', detail:mensaje})
        }
      })
    }
  }

  goToRegister(): void{
    this.router.navigate(['/auth/register']);
  }
}
