import  { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseAuth: AngularFireAuth) { }

    registerUser(value) {
      return new Promise<any>((resolve, reject) => {
  
        this.firebaseAuth.createUserWithEmailAndPassword(value.email, value.password)
          .then(
            res => resolve(res),
            err => reject(err))
      })
  
    }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.firebaseAuth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  logout(){
    return new Promise<void>((resolve, reject) => {
      if (this.firebaseAuth.currentUser) {
        this.firebaseAuth.signOut()
          .then(() => {
            console.log("LOG Out");
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    })
  }

}
