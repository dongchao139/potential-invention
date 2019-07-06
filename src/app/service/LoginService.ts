import {Injectable} from "@angular/core";

@Injectable()
export class LoginService {
    public user: any;
    public redirectUrl:string;
    public redirectHash:string;

    public doLogin(value: any): string | boolean {
        if ((<any>value).username != 'admin' || (<any>value).password != '123') {
            return 'error username or password';
        }
        return false;
    }

    public doLogout(): boolean {
        this.user = null;
        return true;
    }

    public saveUser(user: any): boolean {
        this.user = user;
        return true;
    }

    public hasLogin(): boolean {
        return this.user != null;
    }

    public storeUrl(url:string) {
        this.redirectUrl = url.substring(0, url.indexOf('#'));
        this.redirectHash = url.substring(url.indexOf('#'));
        console.log(this);
    }

}