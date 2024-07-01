import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonToolbar, IonHeader, IonTitle } from '@ionic/angular/standalone';
import { HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, HttpClientModule],
})
export class AppComponent {
  constructor() {}
}
