export class User {
    
    userId:number;
    name:string;
    email:string;
    password:string;

    constructor(userId: number = 0, name: string = '', email: string = '', password: string = '') {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}