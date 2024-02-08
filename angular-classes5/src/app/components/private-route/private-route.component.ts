import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-private-route',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './private-route.component.html',
  styleUrl: './private-route.component.scss'
})
export class PrivateRouteComponent {
  constructor(private userService: UserService, private router: Router) {
    if(!this.user) this.router.navigateByUrl("/");
  }

  get user(){
    return this.userService.getUser();
  }
}
