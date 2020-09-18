## Getting started

###Install
```BASH
yarn install @codehaven/ngx-polylist
```
or
```BASH
npm install @codehaven/ngx-polylist
```

###Add to module
```Typescript
import { NgxPolylistModule } from '@codehaven/ngx-polylist';
...
imports: [
    ...
    NgxPolylistModule
]
```
###Add to template
```HTML
<ch-polylist [items]="items" [config]="config" mode="vertical">
  <div id="empty">No items found</div>
  <div id="loading">Loading</div>
</ch-polylist>
```
