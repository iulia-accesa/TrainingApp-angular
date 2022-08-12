import { AuthData } from "./auth-data.model";
import { User } from "./user.model";
import { Subject } from "rxjs";
export class AuthService{
    authChange = new Subject<boolean>();//boolean payload
    private _user: User = User.EMPTY;
    registerUser(authData: AuthData){
        this._user = new User(authData.email,Math.round(Math.random() * 10000).toString());
          
        this.authChange.next(true);
    }

    login(authData: AuthData){
        this._user = new User(authData.email,Math.round(Math.random() * 10000).toString());
          
        this.authChange.next(true);
    }

    logout(){
        this._user = User.EMPTY;
        this.authChange.next(false);
    }
    
    get user():User{
        return new User(this.user.email,this.user.userId);
    }

    isAuth(){
        return this.user != null;
    }
}