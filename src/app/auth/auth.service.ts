import { AuthData } from "./auth-data.model";
import { User } from "./user.model";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
@Injectable()
export class AuthService{
    authChange = new Subject<boolean>();//boolean payload
    private _user: User = User.EMPTY;


    constructor(private router: Router){

    }

    registerUser(authData: AuthData){
        this._user = new User(authData.email,Math.round(Math.random() * 10000).toString());
          
        this.authSuccessfully();
    }

    login(authData: AuthData){
        this._user = new User(authData.email,Math.round(Math.random() * 10000).toString());
          
        this.authSuccessfully();
        
    }

    logout(){
        this._user = User.EMPTY;
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }
    
    get user():User{
        return new User(this._user.email,this._user.userId);
    }

    isAuth(){
        return this._user !== User.EMPTY;
    }

    private authSuccessfully(){
        this.authChange.next(true);
        this.router.navigate(['/training']);
    }
}