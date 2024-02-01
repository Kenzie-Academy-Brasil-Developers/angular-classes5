import { Injectable, signal } from '@angular/core';
import {
  TLoginUserData,
  TRegisterUserData,
  TUserReturn,
} from '../interfaces/user.interface';
import { UserRequest } from '../api/user.request';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly userSignal = signal<TUserReturn | null>(null);

  constructor(private userRequest: UserRequest) {
    this.userRequest.getUser()?.subscribe((data) => {
      this.userSignal.set(data);
    });
  }

  register(formData: TRegisterUserData) {
    this.userRequest.register(formData).subscribe((data) => {
      alert('Cadastro realizado com sucesso');
    });
  }

  login(formData: TLoginUserData) {
    this.userRequest.login(formData).subscribe((data) => {
      this.userSignal.set(data.user);
      localStorage.setItem('@TOKEN', JSON.stringify(data.accessToken));
      localStorage.setItem('@USERID', JSON.stringify(data.user.id));
    });
  }
}
