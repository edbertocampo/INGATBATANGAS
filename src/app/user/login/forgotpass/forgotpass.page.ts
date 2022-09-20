import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import {sendPasswordResetEmail } from "firebase/auth";
import { Auth } from '@angular/fire/auth';
@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {
  email: string = '';

  errorMessage: string = '';

  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController,
    public loadingController: LoadingController,
    // public alertController: AlertController,
    private auth: Auth
  ) { }

  ngOnInit() {
  }

  async resetPassword()
  {
    if(this.email)
    {
      const loadingController= await this.loadingController.create({
        message: 'Please wait...',
        spinner: 'crescent',
        showBackdrop: true
      });
      loadingController.present();

      this.fireauth.sendPasswordResetEmail(this.email).then(()=> {
        loadingController.dismiss();
        this.toast('Please check your email!', 'success');
        this.router.navigate(['login']);
      })
      .catch((error)=>{
        loadingController.dismiss();
        this.toast(error.message, 'danger');
      })

    } else{
      this.toast('Please enter your email address!', 'danger');
    }
    
  }

  async toast(message, status)
  {
    const toast = await  this.toastController.create({
      message: message,
      position: 'top',
      color: status,
      duration: 2000
    });
    toast.present();
  }

  goLoginPage(){
    this.router.navigate(['login'])
  }
}
