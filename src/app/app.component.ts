import { Component } from '@angular/core';
import { TopComponent } from './top/top.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { MainComponent } from './main/main.component';
import { BottomComponent } from './bottom/bottom.component';

@Component({
  selector: 'app-root',
  imports: [TopComponent,LeftComponent,RightComponent,MainComponent,BottomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'layout-app';
}
