import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  credential:any = [];

  constructor() {}

  public register(credential: any) {
    if (credential.username == '' || credential.password == '') {
      return false;
    } else {
      this.credential.push(credential);
      return true;
    }
  }

  public login(credential: any) {
    let findCred = this.credential.filter((x:any) => x.username == credential.username);
    if(findCred.length > 0){
      if (findCred[0].password == credential.password) {
        return true;
      } else {
        return false;
      }
    }else{
      return false;
    }
  }
}
