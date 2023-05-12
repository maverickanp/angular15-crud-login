import { GoogleAuthProvider } from 'firebase/auth';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private afs: AngularFireAuth) { }

  signInWithGoogle() {
    return this.afs.signInWithPopup(new GoogleAuthProvider())
  }
  logout() {
    return this.afs.signOut();
  }
  isLoggedIn() {
    return true;
    // return this.afs.authState.forEach((user: any) => {
    //   if (user) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });
  }
}
