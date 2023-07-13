import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = "My first app title";
  public image_url: string = "https://picsum.photos/300/400"
  public sayHello(){
    alert("Hello There !");
    }

  public changeTitle ()
  {
    this.title = "my project title is changed";
  }

  public firstname: string = "bobby";
}
