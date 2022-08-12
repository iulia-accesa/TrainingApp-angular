import { Component, OnInit,EventEmitter,Output, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>(); //make this listanable from the outside with the output adnotation
  private _isAuth: boolean = false;
  authSubscription: Subscription = Subscription.EMPTY;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(
      authStatus => {
        this._isAuth = authStatus;
      }
    );
  }

  onToggleSidenav(){
      this.sidenavToggle.emit();
  }

  get isAuth():boolean{
    return this._isAuth;
  }

  set isAuth(value:boolean){
    this._isAuth = value;
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

}
