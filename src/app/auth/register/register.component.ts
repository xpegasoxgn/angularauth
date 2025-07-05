import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../models/usuario.model';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm:FormGroup;
  rolesDisponibles= [
    {label:'ADMIN', value:'ADMI'},
    {label:'USUARIO', value:'USER'}
    
  ];
  constructor(private fb:FormBuilder, 
    private authService:AuthService ,
    private messageService:MessageService,
    private confirmationService:ConfirmationService){

    this.registerForm=this.fb.group({
      username:['',Validators.required],
      nombre:['',Validators.required],
      paterno:['',Validators.required],
      materno:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      roles:[[],Validators.required],
    })
  }

  onSubmit(){
    if(this.registerForm.valid){
      this.confirmationService.confirm({
        message: 'Desea Registrar este usuario?',
        header:'Confirmación',
        icon:'pi pi-question-circle',
        acceptLabel:'Si',
        rejectLabel:'No',
        accept:()=>{
          const usuario: Usuario=this.registerForm.value;
          this.authService.register(usuario).subscribe({
            next:(res)=>{
              this.messageService.add({severity:'success', summary:'Registro exitoso', detail: res ||'Usuario registrado exitosamente'})
            },
            error:(err) =>{
              this.messageService.add({severity:'error', summary:'ERROR', detail: err.error?.message || 'No se pudo registrar'})
            }
          })
        }
      })
    }
  }

}
