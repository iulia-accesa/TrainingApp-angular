// export interface User{
//     email: string;
//     userId: string;
// }


// export function userInitializer():User{
//     return {
//         email:"",
//         userId:""
//     }
// }


export class User{
    
    constructor(private _email:string,private _userId:string){
            this._email = _email;
            this._userId = _userId;
    }

    get email():string{
        return this._email;
    }

    get userId():string{
        return this._userId;
    }

    public static EMPTY = (() => {
       
           const emptyUser = new User("","");
           return emptyUser;
        
    })();

    
    
}