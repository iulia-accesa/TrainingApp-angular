import { Email,Password } from "../utils/types";

export class User{
    private _email: Email;
    private _password: Password;
    constructor(email:Email,password: Password){
         this._email = email;
        this._password = password;
      
    }

    get email(){
        return this._email;
    }

    get password(){
        return this._password;
    }

}