import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;
  @Input() label: string;
  @Input() type = 'text'; 

  focused: boolean;

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }


  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router:  Router,
  ) {}

  get email(){
    return this.credentials.get('email');
  }

  get password(){
    return this.credentials.get('password');
  }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    });
  }

  async register(){
  const loading = await this.loadingController.create();
  await loading.present();

    const user = await this.authService.register(this.credentials.value);
    await  loading.dismiss();

    if (user){
      this.router.navigateByUrl('usertabs', {replaceUrl: true});
    }else{
      this.showAlert('Registration Failed,', 'Please try again!');
    }
  }

  async login(){
    const loading = await this.loadingController.create();
  await loading.present();

    const user = await this.authService.login(this.credentials.value);
    await  loading.dismiss();

    if (user){
      this.router.navigateByUrl('usertabs', {replaceUrl: true});
    }else{
      this.showAlert('Login Failed,', 'Please try again!');
    }
  }
  

  async showAlert(header, message){
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

}


