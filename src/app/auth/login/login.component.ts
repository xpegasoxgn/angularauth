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
          localStorage.setItem('token',res.token);
          localStorage.setItem('username',res.username);
          localStorage.setItem('roles',res.roles);
          const token = encodeURIComponent(res.token);
          const username=encodeURIComponent(res.username);
          const roles=encodeURIComponent(JSON.stringify(res.roles));
          //this.router.navigate(['/home']);

          console.log('redirigiendo al : ', `http://localhost:4300?token=${token}&username=${username}&roles=${roles}`) 
          window.location.href=`http://localhost:4300?token=${token}&username=${username}&roles=${roles}`;
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
