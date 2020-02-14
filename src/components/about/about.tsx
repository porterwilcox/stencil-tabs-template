import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-about',
  styleUrl: 'about.css',
  shadow: true
})
export class AppAbout {

  render() {
    return (
      <ion-header>
        <ion-toolbar>
          <ion-sub-title>this is an about page</ion-sub-title>
          <ion-title>about</ion-title>
        </ion-toolbar>
      </ion-header>
    );
  }

}
