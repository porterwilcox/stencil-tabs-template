import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/about" component="app-about" />
        </ion-router>

        <ion-tabs>
          <ion-tab tab="app-home" component="app-home"></ion-tab>
          <ion-tab tab="app-about" component="app-about"></ion-tab>
          <ion-tab-bar slot="bottom">
            <ion-tab-button tab="app-home">
              <ion-icon name="home"></ion-icon>
              <ion-label>home</ion-label>
              {/* <ion-badge>6</ion-badge> */}
            </ion-tab-button>
            <ion-tab-button tab="app-about">
              <ion-icon name="book"></ion-icon>
              <ion-label>about</ion-label>
            </ion-tab-button>
          </ion-tab-bar>
        </ion-tabs>

      </ion-app>     
    );
  }
}
