import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage  {

  constructor(private auth: Auth,
    private navCtrl: NavController) { }

  logout() {
    this.auth.signOut()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('login');
      })
      .catch(error => {
        console.log(error);
      })
  }


}
