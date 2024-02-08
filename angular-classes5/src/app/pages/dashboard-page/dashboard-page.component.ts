import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PrivateRouteComponent } from '../../components/private-route/private-route.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [PrivateRouteComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {
  constructor(private userService: UserService) {}

  get user(){
    return this.userService.getUser();
  }

  handleLogout(){
    this.userService.logout();
  }
}
