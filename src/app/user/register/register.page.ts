import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  fname: any;
  lname: any;
  email: any;
  password: any;
  constructor( private navCtrl: NavController) { }

  SignUp(){
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(res=>{
      console.log('response = ', res);
    })
  }
gotosignin(){
  this.navCtrl.navigateForward('login');
}

  ngOnInit() {
  }

}
