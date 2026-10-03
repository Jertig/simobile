import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: false,
})
export class AboutPage implements OnInit {

  constructor(private animationCtrl: AnimationController) { }

  ionViewDidEnter() {
    this.fadeInAbout();
  }

  fadeInAbout() {
    const element = document.querySelector('#about-info') as HTMLElement;
    if (element == null) return;
    const animation = this.animationCtrl.create()
      .addElement(element)
      .duration(500)
      .iterations(1)
      .fromTo('opacity', '0', '1');
    animation.play();
  }

  ngOnInit() {
  }

}
