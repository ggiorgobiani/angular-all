import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClickCounter';

  public count: number = 0;
  
  
  public decrement(){
    if(this.count <= -10) return; // ou on peu faure if(this.count > -10)
    this.count--;
  }

  public increment(){
    if(this.count >= 10) return;  // ou on peu faure if(this.count < -10)
     this.count++;
  }

}
