import { Component } from '@angular/core';
import { ListConfig } from '@codehaven/ngx-polylist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'polylist';
  items = [];
  config: ListConfig = {
    showScrollbar: true,
    minHeight: '100px',
    width: '100%'
  };
}
