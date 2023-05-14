import { GoogleAuthProvider } from 'firebase/auth';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afs: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
    ){
      this.authStatusListener();
    }


  currentUser: any = null;

  private authStatusSub = new BehaviorSubject(this.currentUser);
  currentAuthStatus = this.authStatusSub.asObservable();


  signInWithGoogle() {
    return this.afs.signInWithPopup(new GoogleAuthProvider())
  }
  logout() {
    return this.afs.signOut();
  }

  authStatusListener(){
    this.afs.onAuthStateChanged((credential)=>{
      if(credential){
        this.authStatusSub.next(credential);
        console.log('User is logged in');
      }
      else{
        this.authStatusSub.next(null);
        console.log('User is logged out');
      }
    })
  }

  getAuthStatus(){
    return this.currentAuthStatus;
  }

  getUser(){
    return this.currentUser;
  }

}
