import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sidenavWidth: number;
  public reduit: boolean;

  ouvre(){
    this.reduit = false;
    //this.sidenavWidth = 15;
  }

  ferme(){
    this.reduit = true;
    //this.sidenavWidth = 4;
  }
}
