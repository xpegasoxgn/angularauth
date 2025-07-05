import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';

//material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from './register/register.component';

//prime 
import { ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService} from 'primeng/api';
import { InputTextModule} from 'primeng/inputtext';
import { ButtonModule} from 'primeng/button';
import { PasswordModule} from 'primeng/password';
import { DropdownModule} from 'primeng/dropdown';
import { ToastModule} from 'primeng/toast';
import { MessagesModule} from 'primeng/messages';
import { MessageService} from 'primeng/api';
import { CardModule} from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    DropdownModule,
    ToastModule,
    MessagesModule,
    CardModule,
    MultiSelectModule,
    ConfirmDialogModule

  ],
  providers:[
    MessageService,
    ConfirmationService
  ]
})
export class AuthModule { }
