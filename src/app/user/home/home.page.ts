import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  {

  @ViewChild('audioPlayer') audio;

  constructor() { }

  imageClicked() {
    this.audio.nativeElement.play();
  }

}
