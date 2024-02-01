import { Injectable, signal } from '@angular/core';
import {
  TLoginUserData,
  TRegisterUserData,
  TUserReturn,
} from '../interfaces/user.interface';
import { UserRequest } from '../api/user.request';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly userSignal = signal<TUserReturn | null>(null);

  constructor(private userRequest: UserRequest, private router: Router) {
    this.userRequest.getUser()?.subscribe({
      next: (data) => {
        this.userSignal.set(data);
      },
      error: (error) => {
        console.log(error);
        this.logout();
      }
    });
  }

  register(formData: TRegisterUserData) {
    this.userRequest.register(formData).subscribe({
      next: () => {
        alert('Cadastro realizado com sucesso');
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  login(formData: TLoginUserData) {
    this.userRequest.login(formData).subscribe({
      next: (data) => {
        this.userSignal.set(data.user);
        localStorage.setItem('@TOKEN', JSON.stringify(data.accessToken));
        localStorage.setItem('@USERID', JSON.stringify(data.user.id));
        this.router.navigateByUrl("/dashboard");
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  logout() {
    this.userSignal.set(null);
    localStorage.removeItem('@TOKEN');
    localStorage.removeItem('@USERID');
    this.router.navigateByUrl("/");
  }
}
