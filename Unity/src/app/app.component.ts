import { Component,OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl :'./app.component.html'
})
export class AppComponent implements OnInit{
  title = 'app works!';

  ngOnInit(){
  }
}
