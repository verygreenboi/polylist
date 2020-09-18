import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ListItem } from 'projects/codehaven/ngx-polylist/src/lib/base-list-item';
import { ListConfig } from 'projects/codehaven/ngx-polylist/src/lib/list-config';

const defaultListConfig: ListConfig = {
  width: '100%',
  height: '100%',
  showScrollbar: false
};

@Component({
  selector: 'ch-polylist',
  templateUrl: './ngx-polylist.component.html',
  styleUrls: ['./ngx-polylist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxPolylistComponent {

  @Input() items: ListItem[];
  @Input() mode: 'horizontal' | 'vertical' = 'vertical';
  @Input() config?: ListConfig = defaultListConfig;

  constructor() {
  }

}
