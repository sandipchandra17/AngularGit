import { Component, OnInit, Injectable } from '@angular/core';
import { LoginService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoginService]
})
@Injectable({
  providedIn: 'root'
})

export class AppComponent implements OnInit {
  title = 'sample';
  dataList: any[];

  constructor(private service: LoginService) { }

  ngOnInit() {
    
    this.service.GetData()
      .subscribe(data => {
        console.log('hellloooo' + data);
        this.dataList = data;
        console.log( this.dataList);
      });
  }

}
