import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { TRegisterUserData } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  constructor(private userService: UserService) {}

  registerForm = new FormGroup({
    name: new FormControl<string | null>(null),
    email: new FormControl<string | null>(null),
    password: new FormControl<string | null>(null),
    job: new FormControl<string | null>(null),
  })

  submit(){
    const data = this.registerForm.value as TRegisterUserData;
    this.userService.register(data);
    this.registerForm.reset();
  }
}
