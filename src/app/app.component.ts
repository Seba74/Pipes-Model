import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'pipesApp';
  constructor(private primengConfig: PrimeNGConfig){}
  ngOnInit(){
    this.primengConfig.ripple = true;
  }
}
