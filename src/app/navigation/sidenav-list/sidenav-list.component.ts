import { Component, OnInit,Output,EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit,OnDestroy {
  @Output() sidenavClose = new EventEmitter<void>();
  authSubscription: Subscription = Subscription.EMPTY;
  isAuth:boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe((authStatus) => {

      this.isAuth = authStatus;
    })
  }

  onToggleSidenav(){
      this.sidenavClose.emit();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  onLogout(){
    
    this.authService.logout();
  }
}
