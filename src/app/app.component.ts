import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dummy-api';
  user:any
  constructor(private Data:UserdataService)
  {
    Data.user().subscribe((userdata)=>{
      console.warn(userdata)
      this.user=userdata
    });
    console.warn(this.user)
    
  }

  
}
