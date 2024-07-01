import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSplitPane, IonList, IonMenu, IonItem, IonRouterOutlet, IonApp, IonAvatar, IonIcon, IonLabel, IonButton, IonButtons } from '@ionic/angular/standalone';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButtons, IonButton, IonAvatar, IonApp, IonRouterOutlet, 
    IonSplitPane,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenu,
    IonItem,
    IonIcon,
    IonAvatar,
    IonLabel,
    RouterOutlet
  ],
})
export class HomePage {

  router: Router = inject(Router);
  constructor() {}

  goToDashboardPage(){
    // Navigate to the dashboard page
    this.router.navigateByUrl('/home/dashboard');
  }
}
